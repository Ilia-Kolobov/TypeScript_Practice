import { createElement } from './helpers/domHelper'; 
import { IFighter } from './interfaces/IFighter';

export function createFighter(fighter: IFighter, handleClick: Function, selectFighter: Function): HTMLElement {
  const { name, source } = fighter;
  const nameElement:HTMLElement = createName(name);
  const imageElement:HTMLElement = createImage(source);
  const checkboxElement:HTMLElement = createCheckbox();
  const fighterContainer:HTMLElement = createElement({ tagName: 'div', className: 'fighter' });
  
  fighterContainer.append(imageElement, nameElement, checkboxElement);

  const preventCheckboxClick = (ev: MouseEvent) => ev.stopPropagation();
  const onCheckboxClick = (ev: Event) => selectFighter(ev, fighter);
  const onFighterClick = (ev: MouseEvent) => handleClick(ev, fighter);

  fighterContainer.addEventListener('click', onFighterClick, false);
  checkboxElement.addEventListener('change', onCheckboxClick, false);
  checkboxElement.addEventListener('click', preventCheckboxClick , false);

  return fighterContainer;
}

function createName(name: string): HTMLElement { 
  const nameElement: HTMLElement = createElement({ tagName: 'span', className: 'name' });
  nameElement.innerText = name;

  return nameElement;
}

function createImage(source: string): HTMLElement{ 
  const attributes = { src: source };
  const imgElement: HTMLElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });

  return imgElement;
}

function createCheckbox(): HTMLElement {
  const label: HTMLElement = createElement({ tagName: 'label', className: 'custom-checkbox' });
  const span: HTMLElement = createElement({ tagName: 'span', className: 'checkmark' });
  const attributes = { type: 'checkbox' };
  const checkboxElement: HTMLElement = createElement({ tagName: 'input', attributes });

  label.append(checkboxElement, span);
  return label;
}