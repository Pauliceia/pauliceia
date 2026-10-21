# Pauliceia 2.0 — Front-end

![Vue.js](https://img.shields.io/badge/Vue.js-2.7.16-4FC08D?logo=vuedotjs&logoColor=white)
![OpenLayers](https://img.shields.io/badge/OpenLayers-9.2.4-1F6B75?logo=openlayers&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-5.94.0-8DD6F9?logo=webpack&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.6.0-339933?logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%3E%3D10.8.2-CB3837?logo=npm&logoColor=white)

Aplicação web front-end da plataforma **Pauliceia 2.0**, um projeto aberto e colaborativo de mapeamento histórico da cidade de São Paulo (1870–1940), desenvolvido em parceria entre **UNIFESP**, **INPE**, **Arquivo Público do Estado de São Paulo** e **Emory University** (com apoio da FAPESP).

A interface permite explorar mapas históricos georreferenciados, realizar buscas de endereços no tempo (geocodificação histórica), filtrar feições por período e contribuir com novas camadas cartográficas (*Volunteered Geographic Information* — VGI).

---

## 🛠️ Tecnologias Principais

- **Vue.js 2.7** + **Vuex** + **Vue Router** (arquitetura SPA e gerenciamento de estado)
- **OpenLayers 9** (renderização e manipulação de camadas geográficas vetoriais e raster)
- **Element UI**, **Vue Material** e **Bootstrap 5** (componentes visuais e layout)
- **Axios** (integração com API VGI, API de Geocodificação e GeoServer)
- **Webpack 5** (empacotamento, servidor de desenvolvimento e build de produção)
- **ESLint 9** + **Prettier** + **EditorConfig** (padronização e qualidade de código)

---

## 📋 Pré-requisitos (Dependencies)

Certifique-se de ter instalado em sua máquina:

- **Node.js**: `>= 22.6.0`
- **NPM**: `>= 10.8.2`

Você pode instalar as versões acima globalmente ou gerenciar múltiplas versões utilizando o [NVM](https://github.com/nvm-sh/nvm).

---

## ⚙️ Instalação e Configuração (Install)

1. Crie o arquivo de configuração de ambiente `config/prod.env.js` a partir do arquivo de exemplo e instale as dependências:

```bash
$ cp config/prod.env.js.EXAMPLE config/prod.env.js
$ npm i
```

### Variáveis de Ambiente (`config/prod.env.js`)

| Variável | Descrição | Valor Padrão (Exemplo) |
| :--- | :--- | :--- |
| `NODE_ENV` | Ambiente de execução | `"production"` |
| `urlVGI` | Endpoint da API REST de dados colaborativos (VGI) | `"http://www.pauliceia.dpi.inpe.br/api/vgi"` |
| `urlGeocoding` | Endpoint do serviço de geocodificação histórica | `"http://www.pauliceia.dpi.inpe.br/api/geocoding"` |
| `urlGeoserverPauliceia` | Workspace principal do GeoServer (camadas oficiais e VGI) | `"http://www.pauliceia.dpi.inpe.br/geoserver/pauliceia"` |
| `urlGeoserveOther` | Workspace secundário do GeoServer | `"http://www.pauliceia.dpi.inpe.br/geoserver/other"` |
| `keyCripto` | Chave auxiliar utilizada em validações no cliente | `"keytest"` |

---

## 🚀 Execução e Scripts Disponíveis (Run)

Execute localmente em modo de desenvolvimento com *hot-reload*:

```bash
$ npm start
# ou
$ npm run dev
```

Acesse a aplicação em: **http://localhost:8080**

### Todos os Scripts (`package.json`)

| Comando | Descrição |
| :--- | :--- |
| `npm start` / `npm run dev` | Inicia o servidor de desenvolvimento (`webpack-dev-server`) com *hot-reload* em `localhost:8080` |
| `npm run build` | Gera o pacote otimizado e minificado para produção no diretório `dist/` |
| `npm run build --report` | Gera o build de produção e exibe o relatório visual de tamanho dos pacotes (*bundle analyzer*) |
| `npm run lint` | Executa a formatação com Prettier e a análise/correção estática com ESLint em sequência |
| `npm run lint:prettier` | Formata automaticamente os arquivos do projeto utilizando o Prettier |
| `npm run lint:eslint` | Verifica e corrige problemas de código utilizando o ESLint 9 |

---

## 📚 Documentação e Arquitetura

Para entender como o código-fonte está organizado (`src/middleware`, `src/store`, `src/router`, `src/views`) e como o front-end interage com o OpenLayers e as APIs da plataforma, consulte:

- 🏛️ **[Arquitetura e Estrutura de Pastas (`docs/architecture.md`)](docs/architecture.md)**

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Antes de criar uma Issue, abrir uma branch ou submeter um Pull Request:

1. Leia nossas convenções de nomenclatura e fluxo de trabalho no guia **[CONTRIBUTING.md](CONTRIBUTING.md)** *( caso ainda esteja em revisão, consulte a documentação da branch correspondente)*.
2. Certifique-se de que seu código segue os padrões do projeto executando `npm run lint` antes de enviar suas alterações.
