
import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 24px;

    table {
        width: 100%;
        border: 1px solid #CCC;
        border-collapse: collapse;

        th {
            background-color: #CCC;
            height: 55px;
        }

        tr:nth-child(even) {
            background-color: #EEE;
        }
        
        td {
            height: 55px;
        }
    }

    .switch {
        .MuiSwitch-switchBase {
            .Mui-checked {
                background-color: red;
            }
        }
    }
`;
export const TitleArea = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CreateButton = styled.button`
    padding: 10px;
    color: #FFF;
    background-color: #1C1C1C;
    border-radius: 8px;
`;