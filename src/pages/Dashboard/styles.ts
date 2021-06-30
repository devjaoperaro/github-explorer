import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 65px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0px 0px 5px;
        color: 3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        //se tiver erro, eu quero por a borda vermelha
        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a3a3a3;
        }

        &.error{
            border: 2px solid green;
        }
    }

    button {
        width: 210px;
        height: 70px;
        border: 0;
        background: #04d361;
        color: #fff;
        border-radius: 0px 5px 5px 0px;
        font-weight: bold;
        transition: background-color 0.3s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`; 

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
    margin-left: 4px;
`;

export const Repositories = styled.div`
    margin-top: 60px;
    max-width: 700px;

    a {
        background: #fff;
        width: 100%;
        display: block;
        text-decoration: none;

        display: flex;
        padding: 25px;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div {
        margin-left: 16px;

        strong {
            font-size: 20px;
            color: #3D3D4D
        }

        p {
            font-size: 18px;
            color: #A8A8B3;
            margin-top: 4px
        } 
    }

    svg {
        margin-left: auto;
        color: #CBCBD6;
    }
`; 

