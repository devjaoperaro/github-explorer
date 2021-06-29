import { createGlobalStyle } from 'styled-components'

import githubbackground from '../assets/github-background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #f0f0f5 url(${githubbackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }
    /* ajustar o tamanho da tela da aplicação: Pegue o tamanho do maior componente e atribui no max-width*/
    /* root é o id q vai gerar toda a aplicação */
    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    button {
        cursor: pointer;
    }
`;