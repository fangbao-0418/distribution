// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportCity from '../../../app/service/city';
import ExportContact from '../../../app/service/contact';
import ExportUser from '../../../app/service/user';

declare module 'beidou' {
  interface IService {
    city: ExportCity;
    contact: ExportContact;
    user: ExportUser;
  }
}
