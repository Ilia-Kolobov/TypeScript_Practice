import { createFighter } from './fighterView';
import { showFighterDetailsModal } from './modals/fighterDetails';
import { createElement } from './helpers/domHelper';
import { fight } from './fight';
import { showWinnerModal } from './modals/winner';
import { IFighter } from './interfaces/IFighter';
import { getFighterDetails } from './services/fightersService';


export function createFighters(fighters:IFighter[]): Element{
  const selectFighterForBattle = createFightersSelector();
  const fighterElements: HTMLElement[] = fighters.map(fighter => createFighter(fighter, showFighterDetails, selectFighterForBattle));
  const fightersContainer: Element = createElement({ tagName: 'div', className: 'fighters' });

  fightersContainer.append(...fighterElements);

  return fightersContainer;
}

async function showFighterDetails(event:Event, fighter:IFighter): Promise<void> {
  const fullInfo: IFighter = await getFighterInfo(fighter._id);
  showFighterDetailsModal(fullInfo);
}

export async function getFighterInfo(fighterId: number): Promise<IFighter>{
  // get fighter form fightersDetailsCache or use getFighterDetails function
  return getFighterDetails(fighterId);
}

function createFightersSelector() {
  const selectedFighters = new Map<number,IFighter>();

  return async function selectFighterForBattle(event: Event, fighter: IFighter) {
    const fullInfo: IFighter = await getFighterInfo(fighter._id);

    if ((<HTMLInputElement>event.target).checked) {
      selectedFighters.set(fighter._id, fullInfo);
    } else { 
      selectedFighters.delete(fighter._id);
    }

    if (selectedFighters.size === 2) {
      let fighters: IFighter[] = Array.from(selectedFighters.values());
      const winner: IFighter = fight(fighters[0],fighters[1]);
      showWinnerModal(winner);
    }
  }
}
