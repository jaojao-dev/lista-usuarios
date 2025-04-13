<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# Lista de Usuários

Este é um projeto simples em React que consome dados de uma API pública (JSONPlaceholder) e exibe uma lista de usuários com funcionalidades de busca e paginação.

## Funcionalidades

- **Busca por nome**: Permite filtrar os usuários por nome.
- **Paginação**: Exibe 5 usuários por página.
- **Carregamento**: Mostra uma mensagem enquanto os dados estão sendo carregados.
- **Tratamento de erros**: Exibe uma mensagem de erro caso a API não seja carregada corretamente.
- **Responsividade**: Interface adaptável a diferentes tamanhos de tela.
- **Feedback de nenhum usuário encontrado**: Mostra uma mensagem quando não houver resultados de busca ou se a lista de usuários estiver vazia.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS**: Estilos para a aplicação.

## Como Rodar o Projeto
```bash
git clone https://github.com/seu-usuario/lista-usuarios.git
cd lista-usuarios
npm install
npm start
>>>>>>> a7894d76ba087f26447f802bd5eaddcdfdb41247
