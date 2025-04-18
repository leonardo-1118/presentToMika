import { createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-weight: 400;
        font-style: normal;
    }
    
    button, a {
        cursor: pointer;
    }
`

export default globalStyle