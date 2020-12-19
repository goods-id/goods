/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'

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
  plugins: [
    autoExternal(),
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
        ],
      },
    }),
  ],
}

export default config
