/*
 * @Author: wangyunbo
 * @Date: 2021-06-24 12:28:17
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-06-24 12:32:24
 * @Description: file content
 * @FilePath: \proTemplate\.eslintrc.js
 */
module.exports = {
  plugins: ["@typescript-eslint", 'prettier', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  rules: {},
  overrides: [
    {
      files: ['src/*/*'],
      rules: {
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-statements': 'off'
      }
    }
  ],
  settings: {
    node: {
      extensions: ['.ts', '.json']
    }
  }
}