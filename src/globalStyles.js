import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,body,#root{
        height: 100%;
    }
    html{
        background-image: linear-gradient(to bottom right,#202020  30%, #383838 70%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 0 0;
        background-size: auto 100%;
        
    }
    *{
        box-sizing: border-box;
        margin:0;
        padding: O;
        font-family:'Roboto';
    }
    a{
        text-decoration:none;
        color:black;
    }
    
`;

export const Container = styled.div`
    width:100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
`;

export const Header = styled.div`
    width: 100%;
    font-size:'';
    letter-spacing:2px;
    text-align: center;
    text-decoration: underline;
    color: white;
    padding: 10px;
    grid-area: header;
`;

export const IconNav = styled.div`
    display: flex; 
    justify-content: flex-end;
    padding-right: 50%;
    grid-area: iconNav;
`;

export const Top = styled.div`
    width:100%;
    height: 10%;
    justifyContent: spaceBetween;

    display: grid;
    grid-template-columns: 15% 70%% 15%;
    grid-template-rows: auto;
    grid-template-areas:
      ". header iconNav"
      ". section ."
`;

export const Section = styled.div`
    width: 100%;
    height:100%;
    grid-area: section;
    padding-left:25%;
    align-items: center;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 20%;
`;

export const Column = styled.div``

export const Button = styled.button``
