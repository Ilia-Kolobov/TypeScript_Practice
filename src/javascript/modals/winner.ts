import { IFighter } from "../interfaces/IFighter";
import { createElement } from "../helpers/domHelper";
import { showModal } from "./modal";

export  function showWinnerModal(fighter:IFighter): void {
  // show winner name and image
  const { name , source} = fighter;
  const bodyElement: HTMLElement = createElement({ tagName: 'div', className: 'modal-body' });
  const imageElement: HTMLElement = createElement({ tagName: 'img', className: 'fighter-image', attributes: {src: source} });
  const nameElement: HTMLElement = createElement({ tagName: 'span', className: 'fighter-name' });
  
  nameElement.innerText = name + '\n';

  bodyElement.append(nameElement);
  bodyElement.append(imageElement);

  const title: string = 'Winner';
  showModal({ title, bodyElement });
    
}