// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCity from '../../../app/service/city';
import ExportContact from '../../../app/service/contact';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    city: ExportCity;
    contact: ExportContact;
    user: ExportUser;
  }
}
