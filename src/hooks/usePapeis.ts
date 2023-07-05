import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaPapeis(props: any): Promise<any[]> {
  const { data } = await api.get<any>('/papeis', {});
  return data.dados;
}

export function usePapeis(props: any) {

  const queryName: unknown[] = ['receberPapeis'];

  const headers = {
  };

  return useQuery(
    queryName,
    () => getListaPapeis(headers),
    {
      onError: (err:AxiosError) => {
      },
    },
  );
}
