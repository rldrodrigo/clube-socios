import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaPlanos(props: any): Promise<any[]> {
  const { data } = await api.get<any>('/planos', {});
  console.log(data);
  return data.dados;
}

export function usePlanos(props: any) {

  const queryName: unknown[] = ['receberPlanos'];

  const headers = {
  };

  return useQuery(
    queryName,
    () => getListaPlanos(headers),
    {
      onError: (err:AxiosError) => {
      },
    },
  );
}
