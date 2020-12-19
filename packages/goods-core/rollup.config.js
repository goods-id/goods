/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import autoExternal from 'rollup-plugin-auto-external'
import copy from 'rollup-plugin-copy'
import url from '@rollup/plugin-url'
import pkg from './package.json'

/** @type {import('rollup').InputOptions['plugins']} */
const commonPlugins = [
  autoExternal(),
  resolve({
    browser: true,
  }),
  commonjs(),
]

/** @param {'lib' | 'ssr'} output */
function generateTypescriptPlugin(output) {
  const isSSR = output === 'ssr'
  const includeds = []
  const excludeds = []

  if (isSSR) {
    includeds.push(
      'src/icon/*.{ts, tsx}',
      'src/icon/**/*.{ts, tsx}',
      'src/@goods-system/*.ts',
      'src/colors/*.ts',
      'src/ssr.ts'
    )
    excludeds.push('src/icon/index.tsx', 'src/index.ts')
  } else {
    excludeds.push('src/**/*-ssr.{ts, tsx}', 'src/ssr.ts')
  }

  return typescript({
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
      include: includeds,
      exclude: [
        'node_modules',
        '**/lib',
        'src/**/*.stories.tsx',
        'src/**/*.story.tsx',
        'src/**/*.docs.tsx',
        'src/utils/storybook.tsx',
        ...excludeds,
      ],
    },
  })
}

/** @type {import('rollup').RollupOptions} */
const configLib = {
  input: './src/index.ts',
  output: [
    {
      dir: pkg.main.replace(/\/[\w.]+$/, ''),
      format: 'esm',
      sourcemap: true,
      chunkFileNames: '[name]-chunk.js',
    },
    {
      dir: 'lib',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
    {
      dir: 'cjs',
      format: 'commonjs',
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  treeshake: true,
  plugins: [
    ...commonPlugins,
    generateTypescriptPlugin('lib'),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: Infinity,
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
          dest: ['lib/global-style/fonts', 'cjs/global-style/fonts'],
        },
      ],
    }),
  ],
}

/** @type {import('rollup').RollupOptions} */
const configSSR = {
  input: './src/ssr.ts',
  output: [
    {
      dir: 'ssr',
      format: 'esm',
      entryFileNames: ({ name }) => {
        if (name === 'ssr') return 'index.js'
        return `${name}.js`
      },
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  treeshake: true,
  plugins: [
    ...commonPlugins,
    generateTypescriptPlugin('ssr'),
    copy({
      targets: [{ src: 'ssr/ssr.d.ts', dest: 'ssr', rename: 'index.d.ts' }],
      hook: 'writeBundle',
      flatten: true,
    }),
  ],
}

export default [configLib, configSSR]
