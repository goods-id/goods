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
      format: 'esm',
      sourcemap: true,
    },
    {
      dir: 'lib',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
  ],
  treeshake: true,
  plugins: [
    autoExternal(),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: Infinity,
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      typescript: require('typescript'),
      tsconfigDefaults: {
        compilerOptions: {
          jsx: 'react',
          module: 'es2015',
          allowJs: true,
          sourceMap: true,
          declaration: true,
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
        {
          src: 'src/global-style/fonts/*',
          dest: 'lib/packages/goods-core/src/global-style/fonts',
        },
      ],
    }),
  ],
}
