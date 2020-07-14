/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import pkg from './package.json'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    autoExternal(),
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
      tsconfigDefaults: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          jsx: 'react',
        },
      },
    }),
    copy({
      targets: [
        {
          src: 'assets/svg/*',
          dest: 'lib/assets/svg',
        },
        {
          src: 'assets/png/*',
          dest: 'lib/assets/png',
        },
      ],
    }),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: Infinity,
    }),
  ],
}
