import { ViewProps } from 'beidou';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill'
import configureStore from '../store';
import { run } from '../saga';
import Router from '../router/router';
import '../styles/common.sass'
import vconsole from 'vconsole'
Object.assign(APP, require('client/utils/app'))
const suffix = '?v=' + new Date().getTime()
export default class View extends React.Component<ViewProps> {
  static doctype = '<!DOCTYPE html>';
  static defaultProps = {
    title: '噼里啪智能•财税'
  }
  static configureStore (initialState?: any) {
    return configureStore(initialState)
  }
  static getPartial({ store, ctx }) {
    APP.ctx = ctx
    const html = (
      <Provider store={store}>
        <Router
          location={ctx.req.url}
          context={{}}
        />
      </Provider>
    );
    return { html };
  }
  render() {
    const { html, state, helper, asset } = this.props;
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta name="apple-mobile-web-app-title" content="react" />
        <meta content="telephone=no" name="format-detection"/>
        <meta content="email=no" name="format-detection"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="icon" href={require('client/assets/favicon.ico')}></link>
        <link rel="stylesheet" href={helper.asset(`vendor.css${suffix}`)} />
        <link rel="stylesheet" href={helper.asset(`app.css${suffix}`)} />
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: html }}/>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${state}`,
        }}
      />
      <script type="text/javascript" src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            if ('addEventListener' in document) {
              document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
              }, false);
            }
            if(!window.Promise) {
              document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
            }
          `
        }}
      >
      </script>
      {/* <script src={helper.asset('manifest.js+ subfix}/> */}
      <script src={helper.asset(`corejs.js${suffix}`)}/>
      <script src={helper.asset(`vendor.js${suffix}`)}/>
      <script src={helper.asset(`base.js${suffix}`)}/>
      <script src={helper.asset(`app.js${suffix}`)}/>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1276106900'%3E%3C/span%3E%3Cscript async src='" + cnzz_protocol + "s96.cnzz.com/z_stat.php%3Fid%3D1276106900' type='text/javascript'%3E%3C/script%3E"));`
        }}
      ></script>
      </body>
      </html>
    );
  }
}
if (__CLIENT__) {
  const store = configureStore(window.__INITIAL_STATE__)
  APP.dispatch = store.dispatch
  const app = (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
  run();
  ReactDOM.hydrate(app, document.getElementById('app'));
  if (/debug=true/.test(window.location.href)) {
    new vconsole()
  }
}
