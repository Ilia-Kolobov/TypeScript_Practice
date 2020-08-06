import { getFighters } from './services/fightersService'
import { createFighters } from './fightersView';
import { IFighter } from './interfaces/IFighter';

const rootElement: HTMLElement = document.getElementById('root')!;
const loadingElement: HTMLElement = document.getElementById('loading-overlay')!;

export async function startApp(): Promise<void> {
  try {
    loadingElement.style.visibility = 'visible';
    
    const fighters: Array<IFighter> = await getFighters();
    const fightersElement: Element = createFighters(fighters);

    rootElement.appendChild(fightersElement);
  } catch (error) {
    console.warn(error);
    rootElement.innerText = 'Failed to load data';
  } finally {
    loadingElement.style.visibility = 'hidden';
  }
}
