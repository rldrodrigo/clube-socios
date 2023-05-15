import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaSocios(props: any): Promise<any[]> {
  const { data } = await api.get<any>('/socios', {});
  return data.dados;
}

export function useSocios(props: any) {

  const queryName: unknown[] = ['receberSocios'];

  const headers = {
  };

  return useQuery(
    queryName,
    () => getListaSocios(headers),
    {
      onError: (err:AxiosError) => {
      },
    },
  );
}
