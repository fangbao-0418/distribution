// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'beidou';
import { EggAppConfig } from 'beidou';
import ExportConfigDefault from '../../config/config.default';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
declare module 'beidou' {
  type NewEggAppConfig = ConfigDefault;
  interface EggAppConfig extends NewEggAppConfig { }
}