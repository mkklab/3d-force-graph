import postCss from 'rollup-plugin-postcss';
import postCssSimpleVars from 'postcss-simple-vars';
import postCssNested from 'postcss-nested';
import babel from 'rollup-plugin-babel';
import { name, dependencies, homepage, version } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: `dist/${name}.common.js`,
      sourcemap: true,
      banner: `// Version ${version} ${name} - ${homepage}`,
    },
    {
      format: 'es',
      file: `dist/${name}.module.js`,
      sourcemap: true,
      banner: `// Version ${version} ${name} - ${homepage}`,
    }
  ],
  external: Object.keys(dependencies),
  plugins: [
    postCss({
      plugins: [
        postCssSimpleVars(),
        postCssNested()
      ]
    }),
    babel()
  ]
};