import { Skeleton } from "@mui/material";

interface LoadingTableProps {
    numeroLinhas: number;
    numeroColunas: number;
  }

export const LoadingTable: React.FC<LoadingTableProps> = ({ numeroLinhas, numeroColunas }) => {

    return (
        <>
            {Array.from({ length: numeroLinhas }, (_, i) => (
            <tr key={i}>
                {Array.from({ length: numeroColunas || 1 }, (_, index) => (
                <td key={index}>
                    <Skeleton animation="wave" style={{ margin: '5px' }} />
                </td>
                ))}
            </tr>
            ))}
        </>
    );
}