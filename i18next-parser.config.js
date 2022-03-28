module.exports = {
  locales: ['en', 'uk'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  defaultNamespace: 'common',
  useKeysAsDefaultValue: true,
  input: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}'
  ]
}
