
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'o-button',
  plugins: [
    sass()
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ]
};
