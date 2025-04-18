import styled from "styled-components"

export const Main = styled.main`

    background-color: #0A2E56;
    font-family: "Poppins", sans-serif;
    width: 100%;
    height: 100%;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SongCard = styled.div`

    border-radius: 20px;
    padding: 10px;
    background: linear-gradient(to bottom, #2bbecf, #0a2a2e);
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    z-index: 2;

    p {
        color:rgb(198, 198, 198);
        font-weight: 100px;
        font-size: 13px;
    }

    h4 {
        color: #fff;
        font-size: 20px;
        margin-bottom: -4px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    audio {
        display: flex;
        height: 40px;
        width: 200px;
        margin-top: 39px;
        margin-bottom: 5px;
    }

    img {
        width: 100px;
        border-radius: 20px;
        margin-right: 15px;
    }
`

export const Title = styled.h2`
    color: #fff;
    font-size:20px;
    margin: 10px 0;
`

export const Line = styled.div`
    background-color: #fff;
    height: 2px;
    width: 70%;
    border-radius: 50px;
    margin-bottom: 10px;
`

export const Paragraph = styled.p`
    color: #fff;
    text-align: center;
    width: 70%;
    max-width: 700px;
    margin-bottom: 50px;
`