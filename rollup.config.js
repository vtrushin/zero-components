import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import multiInput from 'rollup-plugin-multi-input'

export default {
	input: 'src/*.js',
	output: {
		dir: 'lib',
		format: 'cjs',
		globals: {
			react: 'React'
		}
	},
	external: ['react'],
	plugins: [
		multiInput({
			transformOutputPath: path.basename
		}),
		// Changes package path to relative
		resolve(),
		babel(),
		// Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
		commonjs(),
	],
	watch: {
		include: 'src/**/*.js',
		exclude: 'node_modules/**'
	},
}
