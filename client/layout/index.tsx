import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import { run } from '../saga';
import Router from '../router/router';
import 'client/styles/common'
Object.assign(APP, require('client/utils/app'))
export default class View extends React.Component<any> {
  static doctype = '<!DOCTYPE html>';
  static defaultProps = {
    title: '分销'
  }
  static configureStore (initialState?: any) {
    return configureStore(initialState)
  }
  static getPartial({ store, ctx }) {
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
        {/* <!-- uc强制竖屏 --> */}
        <meta name="screen-orientation" content="portrait" />
        {/* <!-- UC强制全屏 --> */}
        <meta name="full-screen" content="yes" />
        {/* <!-- UC应用模式 --> */}
        <meta name="browsermode" content="application" />
        {/* <!-- QQ强制竖屏 --> */}
         <meta name="x5-orientation" content="portrait" />
        {/* <!-- QQ强制全屏 --> */}
        <meta name="x5-fullscreen" content="true" />
        {/* <!-- QQ应用模式 --> */}
        <meta name="x5-page-mode" content="app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="icon" href={require('client/assets/favicon.ico')}></link>
        <link rel="stylesheet" href="https://cdn.staticfile.org/antd-mobile/2.2.8/antd-mobile.min.css"/>
        <link rel="stylesheet" href={helper.asset('app.css?v=' + new Date().getTime())} />
        {/* <script
          src="https://os.alipayobjects.com/rmsportal/lvEQQbNgHsIxVfXLkmuX.js"
        /> */}
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
      <script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>
      <script src="https://cdn.staticfile.org/moment.js/2.23.0/moment.min.js"></script>
      <script src="https://cdn.staticfile.org/react/16.6.0/umd/react.production.min.js"></script>
      <script src="https://cdn.staticfile.org/react-dom/16.6.1/umd/react-dom.production.min.js"></script>
      <script src="https://cdn.staticfile.org/react-router/4.3.1/react-router.min.js"></script>
      <script src="https://cdn.staticfile.org/react-router-dom/4.3.1/react-router-dom.min.js"></script>
      <script src="https://cdn.staticfile.org/antd-mobile/2.2.8/antd-mobile.min.js" />
    
      <script src={helper.asset('manifest.js?v=' + new Date().getTime())}/>
      <script src={helper.asset('app.js?v=' + new Date().getTime())}/>
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
}
