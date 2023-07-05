import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaDependentes(props: any): Promise<any[]> {
  const { data } = await api.get<any>(`/socios/${props.id}/dependentes/`, {});
  return data.dados;
}

export function useDependentes(props: any) {

  const queryName: unknown[] = ['receberDependentes'];

  const headers = {
    id: props.id
  };

  return useQuery(
    queryName,
    () => getListaDependentes(headers),
    {
      onError: (err:AxiosError) => {
      },
    },
  );
}
