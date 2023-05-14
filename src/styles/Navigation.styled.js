import styled from "styled-components";

const FooterNav = styled.div`
    background-color: #59CAFF;
    padding: 15px;
    font-weight: bold;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Navbar = styled.div`
    background-color: #59CAFF;
    padding: 15px 100px;
    color: #ffffff;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1 {
        display: inline-block;
        color: #ffffff;
    }

    @media (max-width: 768px) {
        padding: 15px 15px;
    }

`
const IconHome = styled.div`
    & {
        font-size: 32px;
        color: #ffffff;
    }
`

export {FooterNav, Navbar, IconHome}