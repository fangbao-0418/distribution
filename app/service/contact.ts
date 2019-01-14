import { Service } from 'egg';

export default class ContactService extends Service {
  async getFrom() {
    this.logger.info('1234');
    return Promise.resolve('server');
  }
}

