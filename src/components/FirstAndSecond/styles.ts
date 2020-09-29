import styled from 'styled-components';
import {shade } from 'polished';


export const Container = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    padding-top: 100px;
    width: 100%;
    max-width: 700px;
/* 
    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;
    } */

    h1{
        font-size: 42px;
        color: white;
        /* margin-bottom: 24px; */
    }

    a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;

        &:hover{
            color: ${shade(0.2, "#f4ede8")}
        }
    }

    > a {
        color: #f4ede8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;

        display: flex;
        align-items: center;

        svg {
         margin-right: 16px;
        }

        &:hover{
            color: ${shade(0.3, '#FF9000')}
        }
    }
`;
