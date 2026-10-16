# Padrões de Código e Guia de Linting — Pauliceia 2.0

Este documento descreve as ferramentas, convenções e comandos utilizados para manter a qualidade, consistência e legibilidade do código no projeto **Pauliceia 2.0**.

---

## 🛠️ Ferramentas Utilizadas

O projeto utiliza três camadas complementares de padronização:

1. **EditorConfig (`.editorconfig`):** Garante configurações básicas de espaçamento, quebra de linha e codificação diretamente no editor do desenvolvedor.
2. **Prettier:** Responsável pela formatação automática e estilo do código (espaçamento, aspas, pontuação).
3. **ESLint 9 (`eslint.config.js`):** Responsável pela análise estática, boas práticas de JavaScript e regras essenciais de componentes Vue 2 (`flat/vue2-essential`).

---

## 📋 Comandos Disponíveis

Todos os comandos de verificação e correção são executados a partir da raiz do repositório via NPM:

| Comando | Descrição | Ferramenta |
| :--- | :--- | :--- |
| `npm run lint` | Executa a validação e correção completa (Prettier + ESLint em sequência) | Ambos |
| `npm run lint:prettier` | Formata automaticamente os arquivos do projeto de acordo com as regras de estilo | Prettier |
| `npm run lint:eslint` | Analisa e corrige automaticamente problemas sintáticos e de boas práticas | ESLint |

> **Nota:** Antes de abrir um Pull Request, certifique-se de executar `npm run lint` para garantir que nenhuma violação de estilo seja enviada.

---

## 📏 Regras Adotadas

### 1. Configurações Globais (`.editorconfig`)
- **Indentação:** 2 espaços (`indent_size = 2`, `indent_style = space`).
- **Codificação de Caracteres:** UTF-8 (`charset = utf-8`).
- **Final de Linha:** LF no padrão Unix (`end_of_line = lf`).
- **Espaços no final de linha:** Removidos automaticamente (`trim_trailing_whitespace = true`).
- **Nova linha final:** Arquivos devem sempre terminar com uma linha em branco (`insert_final_newline = true`).

### 2. Regras de JavaScript e Vue (`eslint.config.js`)
- **Vue 2 Essential:** Regras fundamentais do plugin `eslint-plugin-vue` para evitar comportamentos inesperados no ciclo de vida de componentes Vue 2.
- **Nomes de Componentes:** A regra `vue/multi-word-component-names` está desativada (`off`) para manter compatibilidade com componentes legados de nome único.
- **Variáveis não utilizadas (`no-unused-vars`):** Erro estrito, com exceções permitidas para parâmetros utilitários comuns que começam com `_`, `event`, `response` ou `val`.

---

## 💻 Integração com Editores (VS Code)

Para formatar automaticamente ao salvar no Visual Studio Code, recomenda-se instalar as seguintes extensões:
- **EditorConfig for VS Code** (`EditorConfig.EditorConfig`)
- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)

### Configuração sugerida para o `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
