import styled from 'styled-components';
import {shade } from 'polished';
import { motion } from 'framer-motion';

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

export const Main = styled.main`
    .first{
        background: red;
        overflow: hidden;

        .offset{
            width: 100%;
            height: 100%;
        }

        .a{
            background: #f5f1ea;
            height: 100%;
            display:flex;
            align-items: flex-end;

            .left-side{
                width: 50%;
                height: 100%;
                background: #040d1c;
            }

            .right-side{
                width: 60%;
                height: 100%;

                .right-image {
                    /* background: #040d1c; */
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .b {
            width: 100%;
            height: 100%;
            background: #582534;
        }

        .c {
            width: 100%;
            height: 100%;
            background: #0a7397;
        }
     }

    .second {
         background: green;
    }

    .third {
         background: yellow;
    }

    .fourth {
         background: blue;
    }
`;

export const Section = styled.section`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;
