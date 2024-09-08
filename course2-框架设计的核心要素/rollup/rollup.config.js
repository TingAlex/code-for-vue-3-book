const config = {
  input: 'input.js',
  output: [
    {
      file: 'dist/output.cjs',
      format: 'cjs',
    },
    {
      file: 'dist/output.mjs',
      format: 'es',
    },
    {
      file: 'dist/output.js',
      format: 'iife',
    },
  ],
}

export default config
