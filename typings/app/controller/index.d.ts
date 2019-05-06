// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'beidou' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
  }
}
