
import styled from 'styled-components';


export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: #1C1C1C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;

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