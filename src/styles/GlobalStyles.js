import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        font-family: var(--font-family);
    }

    ul, ol{
        list-style: none;
    }

    body{
        width: 100%;
        margin: 0 auto;
    }

    main{
        width: 95%;
        max-width: 1200px;
        flex-wrap: wrap;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: 0;
    }

    :root{
        --color-primary: #FD377E;
        --color-primary2: #E34981;
        --color-secundary:#03B898;

        --grey400: #212529;
        --grey300: #868E96;
        --grey200: #E9ECEF;
        --grey100: #F8F9FA;

        --font-family: 'Nunito', sans-serif;

    }
`

