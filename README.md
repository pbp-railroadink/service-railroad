# service-railroad

## Development

### Module Aliases

[Configuring Module Resolution On Typescript and Jest](https://medium.com/@gokulc/configuring-module-resolution-on-typescript-and-jest-b17a93ebf54d)

For webpack, modify `webpack.config.js`.

``` js
{
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
}
```

For typescript, modify `tsconfig.json`.
Note: the `baseUrl` must be set in addition to the paths array.

``` json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  }
}
```

For jest, modify `jest.config.js`.

``` js
{
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  }
};
```

## References

### Project Layout

- Using typescript guidance from [mtimbs/typescript-serverless](https://github.com/mtimbs/typescript-serverless)
- [Simply Anvil — Our Serverless Blueprint: The step-by step guide](https://simplyanvil.com/our-serverless-blueprint/)

### Testing

- [TDD for AWS Lambda with Serverless framework and Jest](https://kalinchernev.github.io/tdd-serverless-jest)
