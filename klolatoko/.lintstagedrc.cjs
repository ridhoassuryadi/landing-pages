// @ts-nocheck
/** @type {import('lint-staged').Config} */
module.exports = {
  "*.{css,scss,astro}": ["stylelint --fix", "prettier --write"],
  "*.{js,cjs,ts,jsx,tsx,astro}": ["eslint --fix", "prettier --write"],
  "*.{md,html,json,yaml,yml}": ["prettier --write"],
};
