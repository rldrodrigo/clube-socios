import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import api from '../services/api';


async function getListaSocios(props: any): Promise<any[]> {
  const {
    FinalDate, InitialDate,
  } = props;
  const { data } = await api.get<any>('/socios', {});

  return data;
}

export function useSocios(props: any) {
  const {
    InitialDate,
    FinalDate,
  } = props;

  // Objeto para filtro
  const filtersFields = {
    InitialDate,
    FinalDate,
  };

  const queryName: unknown[] = ['receberSocios'];
  if (Object.keys(filtersFields).length !== 0) queryName.push(filtersFields);

  const headers = {
    InitialDate,
    FinalDate,
  };

  return useQuery(
    queryName,
    () => getListaSocios(headers),
    {
      onError: (err:AxiosError) => {
       console.log(err);
      },
    },
  );
}
