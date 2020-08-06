import { callApi } from '../helpers/apiHelper';
import { IFighter } from '../interfaces/IFighter';

export async function getFighters() : Promise<IFighter[]>{
  try {
    const endpoint: string = 'fighters.json';
    const apiResult: Array<IFighter> = await callApi(endpoint, 'GET') as IFighter[];
    
    return apiResult;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id:number): Promise<IFighter> {
  // endpoint - `details/fighter/${id}.json`;
  try {
    const endpoint: string = `details/fighter/${id}.json`;
    const apiResult: IFighter = await callApi(endpoint, 'GET') as IFighter;
    
    return apiResult;
  } catch (error) {
    throw error;
  }
}

