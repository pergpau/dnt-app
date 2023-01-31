import axios, { AxiosResponse } from 'axios';
import cache from '../data/cache.json';

const api = axios.create({
  baseURL: 'https://www.dnt.no/api/v3/iprospect_pilot',
  headers: { 'Content-Type': 'application/json' },
});

export type County = {
  code: string;
  name: string;
};

export type Forening = {
  id: number;
  url: string;
  name: string;
  type: string;
  typeName: string;
  groupType: string;
  groupTypeName: string;
  description: string;
  counties?: County[];
};

export type ApiResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Forening[];
};

function filterCachedData(
  foreninger: Forening[],
  offset: number,
  foreningType?: string,
  groupType?: string
) {
  console.log('Hitting cache');
  return foreninger
    .filter((forening) => {
      return forening.type === foreningType || foreningType === undefined;
    })
    .filter((forening) => {
      return forening.groupType === groupType || groupType === undefined;
    })
    .slice(offset, offset + 50);
}

export default {
  getForeninger: async (
    offset: number,
    foreningType?: string,
    groupType?: string
  ): Promise<Forening[]> =>
    api
      .get('foreninger/', {
        params: {
          format: 'json',
          limit: 50,
          offset,
          type: foreningType,
          groupType,
        },
      })
      .then((response: AxiosResponse<ApiResponse>) => response.data.results)
      // Naively believe that all errors are because of api throttling and return cache
      .catch(() => filterCachedData(cache, offset, foreningType, groupType)),
};
