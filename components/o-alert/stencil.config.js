const sass = require('@stencil/sass');
exports.config = {
  namespace: 'o-alert',
  plugins: [
    sass()
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ]
};
