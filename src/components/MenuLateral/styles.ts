import styled from 'styled-components';


export const Container = styled.div`
    background-color: #1C1C1C;
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