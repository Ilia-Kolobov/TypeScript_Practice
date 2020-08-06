import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';
import{ IFighter} from '../interfaces/IFighter';

export  function showFighterDetailsModal(fighter:IFighter): void {
  const title: string = 'Fighter info';
  const bodyElement: HTMLElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter:IFighter): HTMLElement {
  const { name , attack, defense, health, source} = fighter;

  const fighterDetails: HTMLElement = createElement({ tagName: 'div', className: 'modal-body' });
  const attackElement: HTMLElement = createElement({ tagName: 'span', className: 'fighter-atack' });
  const defenseElement: HTMLElement = createElement({ tagName: 'span', className: 'fighter-defense' });
  const healthElement: HTMLElement = createElement({ tagName: 'span', className: 'fighter-health' });
  const imageElement: HTMLElement = createElement({ tagName: 'img', className: 'fighter-image', attributes: {src: source} });
  const nameElement: HTMLElement = createElement({ tagName: 'span', className: 'fighter-name' });
  
  // show fighter name, attack, defense, health, image

  nameElement.innerText = name + "\n";
  attackElement.innerText = "Attack:" + attack.toString() + "\n";
  defenseElement.innerText = "Defense:" + defense.toString() + "\n";
  healthElement.innerText = "Health:" + health.toString() + "\n";

  fighterDetails.append(nameElement);
  fighterDetails.append(imageElement);
  fighterDetails.append(attackElement);
  fighterDetails.append(defenseElement);
  fighterDetails.append(healthElement); 
  
  return fighterDetails;
}
