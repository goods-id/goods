/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import pkg from './package.json'

/** @type {import('rollup').RollupOptions} */
const config = {
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
      preserveModulesRoot: 'src',
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
          importHelpers: true,
        },
        exclude: [
          'node_modules',
          '**/lib',
          'src/**/*.stories.tsx',
          'src/**/*.story.tsx',
          'src/**/*.docs.tsx',
          'src/utils/storybook.tsx',
        ],
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
          dest: 'lib/global-style/fonts',
        },
      ],
    }),
  ],
}

export default config
