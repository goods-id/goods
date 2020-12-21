/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import url from '@rollup/plugin-url'
import babel from '@rollup/plugin-babel'

/** @type {import('rollup').RollupOptions} */
const config = {
  input: './src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      exports: 'auto',
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  treeshake: true,
  external: [/@babel\/runtime/, /goods-core/],
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
          './node_modules',
          '**/lib',
          './src/**/*.stories.tsx',
          './src/**/*.story.tsx',
          './src/**/*.docs.tsx',
          './src/**/storybook.tsx',
        ],
      },
    }),
    babel({
      presets: [
        ['@babel/preset-env', { modules: false }],
        'goods-core/babel/preset',
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
      ],
      babelHelpers: 'runtime',
      include: [/src/],
      extensions: ['.ts', '.tsx'],
      babelrc: false,
    }),
  ],
}

export default config
