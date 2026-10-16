# pauliceia front-end

Pauliceia 2.0 project front-end.

## Dependencies

Requires:

- Node: >=22.6.0
- NPM: >=10.8.2

You can install the above versions globally on your machine or through [NVM](https://github.com/nvm-sh/nvm).

## Install

Create the `config/prod.env.js` file and install the dependencies:

```
$ cp config/prod.env.js.EXAMPLE config/prod.env.js
$ npm i
```

## Run

Run locally with hot reload by using one of the following commands:

```
$ npm start
$ npm run dev
```

Now you can access: http://localhost:8080

Or build for production with minification:

```
$ npm run build
```

Or build for production and view the bundle analyzer report

```
$ npm run build --report
```

## Code Quality & Standards

O projeto utiliza **ESLint 9**, **Prettier** e **EditorConfig** para garantir a consistência do código.

Execute a validação e formatação automática com:

```bash
# Formata com Prettier e corrige com ESLint
$ npm run lint

# Ou individualmente:
$ npm run lint:prettier
$ npm run lint:eslint
```

Para mais detalhes sobre regras e configuração do editor, consulte o [Guia de Padrões de Código](docs/code-standards.md).

## Contributing

Consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso fluxo de desenvolvimento, convenções de branches, issues, Pull Requests e commits.

