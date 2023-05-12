
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* @media (max-width: 900px) {
        flex-direction: column;
    } */
`

export const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: #7BADF7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: none;
        width: 25px;
        height: 25px;
        background-color: transparent;
        color: white;
        font-size: 24px;
        cursor: pointer;
    }
`;

export const MenuUser = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    background-color: white;
    top: 60px;
    right: 10px;

    ul {
        list-style: none;

        li {
            border: 1px solid #CCC;
            padding: 16px;
            cursor: pointer;

            button {
                border: none;
                width: auto;
                height: auto;
                background-color: transparent;
                color: unset;
                font-size: unset;
            }

            :hover {
                background-color: rgba(0,0,0,.2);
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
`;

export const MainContent = styled.div`
    width: 80vw;
    height: auto;
    padding: 24px;

    table {
        width: 100%;
        border: 1px solid #CCC;
        border-collapse: collapse;

        th {
            background-color: #CCC;
        }

        tr:nth-child(even) {
            background-color: #EEE;
        }
    }
`;

export const Menu = styled.div`
    background-color: #7BADF7;
    min-width: 150px;
    width: 200px;
    height: calc(100vh - 60px);
    //position: fixed;

    ul {
        li {
            padding: 16px;
            color: white;
            font-size: 20px;
            cursor: pointer;
            vertical-align: middle;
            text-align: left;
            display: flex;
            align-items: center;

            span {
                margin-left: 16px;
            }

            :hover {
                background-color: rgba(0,0,0,.2);
            }
        }
    }
`;