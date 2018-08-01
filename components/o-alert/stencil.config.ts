
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import * as autoprefixer from 'autoprefixer';


export const config: Config = {
  namespace: 'o-alert',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false})]
    })
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ]
};
