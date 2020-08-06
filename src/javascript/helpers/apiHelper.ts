import { fightersDetails, fighters } from './mockData';

const API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
const useMockAPI = true;

async function callApi(endpoint:string, method:string) {
  const url: string = API_URL + endpoint;
  const options = {
    method,
  };

  return useMockAPI
    ? fakeCallApi(endpoint)
    : fetch(url, options)
        .then((response) => (response.ok ? response.json() : Promise.reject(Error('Failed to load'))))
        .then((result) => JSON.parse(atob(result.content)))
        .catch((error) => {
          throw error;
        });
}

async function fakeCallApi(endpoint:string) {
  const response = endpoint === 'fighters.json' ? fighters : getFighterById(endpoint);

  return new Promise((resolve, reject) => {
    setTimeout(() => (response ? resolve(response) : reject(Error('Failed to load'))), 500);
  });
}

function getFighterById(endpoint:string) {
  const start: number = endpoint.lastIndexOf('/');
  const end: number = endpoint.lastIndexOf('.json');
  const id: string = endpoint.substring(start + 1, end);

  return fightersDetails.find((it) => it._id === id);
}

export { callApi };
