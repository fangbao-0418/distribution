import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    await this.ctx.render('pages/index');
  }
  async city() {
    this.ctx.locals = {
      a: 2
    }
    await this.ctx.render('pages/city');
  }
}

