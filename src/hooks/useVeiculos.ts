import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaVeiculos(props: any): Promise<any[]> {
  const { data } = await api.get<any>(`/socios/${props.id}/veiculos/`, {});
  return data.dados;
}

export function useVeiculos(props: any) {

  const queryName: unknown[] = ['receberVeiculos'];

  const headers = {
    id: props.id
  };

  return useQuery(
    queryName,
    () => getListaVeiculos(headers),
    {
      onError: (err:AxiosError) => {
      },
    },
  );
}
