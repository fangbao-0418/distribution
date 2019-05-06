// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'beidou';
import ExtendContext from '../../../app/extend/context';
declare module 'beidou' {
  type ExtendContextType = typeof ExtendContext;
  interface Context extends ExtendContextType { }
}