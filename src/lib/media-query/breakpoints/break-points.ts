/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {OpaqueToken} from '@angular/core';
import {validateSuffixes} from '../../utils/breakpoint-tools';
import {BreakPoint} from './break-point';

export const RESPONSIVE_ALIASES = [
              'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
            ];

export const RAW_DEFAULTS :BreakPoint[] = validateSuffixes([
  {
    alias: 'xs',
    overlapping: false,
    mediaQuery: 'screen and (max-width: 599px)'
  },
  {
    alias: 'gt-xs',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 600px)'
  },
  {
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)'
  },
  {
    alias: 'gt-sm',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 960px)'
  },
  {
    alias: 'md',
    overlapping: false,
    mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)'
  },
  {
    alias: 'gt-md',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1280px)'
  },
  {
    alias: 'lg',
    overlapping: false,
    mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)'
  },
  {
    alias: 'gt-lg',
    overlapping: true,
    mediaQuery: 'screen and (min-width: 1920px)'
  },
  {
    alias: 'xl',
    overlapping: false,
    mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)'
  }
]);

/**
 *  Opaque Token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
export const BREAKPOINTS: OpaqueToken = new OpaqueToken('fxRawBreakpoints');

/**
 *  Provider to return observable to ALL known BreakPoint(s)
 *  Developers should build custom providers to override
 *  this default BreakPointRegistry dataset provider
 *  NOTE: !! custom breakpoints lists MUST contain the following aliases & suffixes:
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 */
export const BreakPointsProvider = { // tslint:disable-line:variable-name
  provide: BREAKPOINTS,
  useValue: RAW_DEFAULTS
};
