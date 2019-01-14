// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportContact from '../../../app/service/contact';

declare module 'egg' {
  interface IService {
    contact: ExportContact;
  }
}
