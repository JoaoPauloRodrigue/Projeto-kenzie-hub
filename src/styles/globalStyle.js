import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: Inter, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    list-style: none;
}

.App {
    height: 100vh;
    margin: 0 15px;

    @media(min-width: 700px){
        margin: 0 115px;
    }
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1:#868E96;
    --color-grey-0: #F8F9FA;
    --color-white: #ffffff;

    --color-sucess: #3FE864;
    --color-negative:#E83F5B;

    background-color: var(--color-grey-4)
}
`;
