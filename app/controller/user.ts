import { Controller } from 'egg';

export default class UserController extends Controller {
  async index() {
    await this.ctx.render('pages/user');
  }
}

