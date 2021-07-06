import styled, {css} from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3; 
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }

`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;
            
            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                margin-top: 4px;
                font-size: 18px;
                color: #737380; 
            }
        }

    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
            }

            span {
                display: block;
                margin-top: 4px;
                font-size: 15px;
                color: #737380; 
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 85px;
    
    a {
        background: #fff;
        width: 100%;
        display: block;
        text-decoration: none;
        border-radius: 5px;
        
        display: flex;
        padding: 25px;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 15px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            display: 1;
            margin-left: 15px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
                display: block;
                margin-bottom: 4px;
            }
            p {
                color: #737380; 
                font-size: 18px;
            }   
        }

        svg {
            color: #CBCBD6;
            margin-left: auto;
        }
    }
    

`;