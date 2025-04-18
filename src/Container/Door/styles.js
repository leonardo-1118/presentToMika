import styled from "styled-components"
import { Link as ReactLink } from 'react-router-dom'

export const Section = styled.section`
    background-color: #0A2E56;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        border: 2px solid #33BFFF;
        background: transparent;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        transition: 0.4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        
        img {
            height: 20px;
        }

        &:hover{
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`