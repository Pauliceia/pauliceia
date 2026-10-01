# Guia de Contribuição — Pauliceia 2.0

Este documento define as convenções de nomenclatura para **Issues**, **Branches**, **Pull Requests** e **Commits** do projeto Pauliceia 2.0.

O objetivo é manter a organização, a rastreabilidade e a consistência do repositório à medida que a equipe cresce.

---

## Sumário

- [Issues](#issues)
- [Branches](#branches)
- [Pull Requests](#pull-requests)
- [Commits](#commits)
- [Fluxo Completo: da Issue ao Merge](#fluxo-completo-da-issue-ao-merge)

---

## Issues

Os títulos das Issues devem começar com uma **categoria entre colchetes**, seguida de uma descrição curta e objetiva.

### Categorias

| Prefixo       | Quando usar                                      |
| ------------- | ------------------------------------------------ |
| `[FEATURE]`   | Nova funcionalidade                              |
| `[FIX]`       | Correção de um problema conhecido                |
| `[BUG]`       | Relato de um problema identificado               |
| `[DOCS]`      | Criação ou atualização de documentação           |
| `[REFACTOR]`  | Refatoração de código sem alterar comportamento   |
| `[CHORE]`     | Tarefas técnicas e manutenção (dependências, CI) |

### Formato

```
[CATEGORIA] Descrição curta e objetiva
```

### Exemplos

```
[FEATURE] Adicionar filtro de camadas por período
[FIX] Corrigir popup de erro no geocoding
[BUG] Mapa não carrega camadas ao fazer login
[DOCS] Atualizar instruções de instalação no README
[REFACTOR] Simplificar lógica de autenticação
[CHORE] Atualizar dependências do Webpack
```

---

## Branches

As branches devem seguir o formato:

```
tipo/numero-da-issue-descricao-curta
```

- Use **kebab-case** (letras minúsculas separadas por hífen).
- Inclua o **número da Issue** relacionada.
- A descrição deve ser curta (2–4 palavras).

### Tipos

| Tipo       | Quando usar                          |
| ---------- | ------------------------------------ |
| `feature`  | Nova funcionalidade                  |
| `fix`      | Correção de bug                      |
| `docs`     | Documentação                         |
| `refactor` | Refatoração                          |
| `chore`    | Manutenção e tarefas técnicas        |
| `hotfix`   | Correção urgente em produção         |

### Exemplos

```
feature/110-filtro-por-periodo
fix/112-correcao-geocoding
docs/108-padrao-nomenclatura
refactor/115-simplificar-autenticacao
chore/118-atualizar-dependencias
hotfix/120-correcao-urgente-login
```

---

## Pull Requests

Os títulos dos PRs devem seguir o padrão **[Conventional Commits](https://www.conventionalcommits.org/)**.

### Formato

```
tipo: descrição curta no imperativo
```

Opcionalmente, inclua um **escopo** entre parênteses:

```
tipo(escopo): descrição curta no imperativo
```

### Tipos

| Tipo       | Quando usar                          |
| ---------- | ------------------------------------ |
| `feat`     | Nova funcionalidade                  |
| `fix`      | Correção de bug                      |
| `docs`     | Documentação                         |
| `refactor` | Refatoração                          |
| `chore`    | Manutenção e tarefas técnicas        |
| `style`    | Formatação (sem mudança de lógica)   |
| `test`     | Adição ou correção de testes         |
| `ci`       | Configuração de CI/CD                |

### Exemplos

```
feat: adicionar filtro de camadas por período
fix: corrigir popup de erro no geocoding
fix(geocoding): corrigir validação de coordenadas
docs: definir convenções de nomenclatura
refactor: simplificar lógica de autenticação
chore: atualizar dependências do Webpack
```

### Corpo do PR

No corpo do Pull Request, inclua:

- Breve descrição do que foi feito e por quê.
- Referência à Issue relacionada usando a palavra-chave `Closes`:

```
Closes #108
```

---

## Commits

Os commits devem seguir o padrão **[Conventional Commits](https://www.conventionalcommits.org/)**.

### Formato

```
tipo(escopo opcional): descrição no imperativo
```

### Exemplos

```
feat: adicionar botão de exportar camada
fix(geocoding): corrigir busca de endereços
docs: adicionar guia de contribuição
refactor: remover estados desnecessários do Vuex
chore: atualizar ESLint para v9
test: adicionar teste de registro de usuário
```

> **Referência completa:** [conventionalcommits.org](https://www.conventionalcommits.org/)

---

## Fluxo Completo: da Issue ao Merge

O exemplo abaixo ilustra o ciclo completo de uma contribuição:

```
1. Issue criada
   #108 — [DOCS] Definir padrão de nomenclatura
                    │
2. Branch criada    ▼
   docs/108-padrao-nomenclatura
                    │
3. Commits          ▼
   docs: definir convenções de nomenclatura
                    │
4. Pull Request     ▼
   Título: docs: definir convenções de nomenclatura
   Corpo:  Closes #108
                    │
5. Code Review      ▼
   Revisão pela equipe
                    │
6. Merge            ▼
   Branch mergeada na branch de desenvolvimento
```

### Resumo rápido

| Etapa         | Exemplo                                          |
| ------------- | ------------------------------------------------ |
| **Issue**     | `[DOCS] Definir padrão de nomenclatura`          |
| **Branch**    | `docs/108-padrao-nomenclatura`                   |
| **Commit**    | `docs: definir convenções de nomenclatura`        |
| **PR título** | `docs: definir convenções de nomenclatura`        |
| **PR corpo**  | `Closes #108`                                    |
