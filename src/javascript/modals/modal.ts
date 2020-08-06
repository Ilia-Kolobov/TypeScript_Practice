import { createElement } from '../helpers/domHelper';

export function showModal(obj:{ title:string, bodyElement:Element }) {
  const root: HTMLElement|null = getModalContainer();
  const modal: HTMLElement = createModal(obj.title, obj.bodyElement); 
  
  root!.append(modal);
}

function getModalContainer(): HTMLElement|null{
  return document.getElementById('root');
}

function createModal(title:string, bodyElement:Element): HTMLElement {
  const layer: HTMLElement = createElement({ tagName: 'div', className: 'modal-layer' });
  const modalContainer: HTMLElement = createElement({ tagName: 'div', className: 'modal-root' });
  const header: HTMLElement = createHeader(title);

  modalContainer.append(header, bodyElement);
  layer.append(modalContainer);

  return layer;
}

function createHeader(title:string): HTMLElement {
  const headerElement: HTMLElement = createElement({ tagName: 'div', className: 'modal-header' });
  const titleElement: HTMLElement = createElement({ tagName: 'span' });
  const closeButton: HTMLElement = createElement({ tagName: 'div', className: 'close-btn' });
  
  titleElement.innerText = title;
  closeButton.innerText = '×';
  closeButton.addEventListener('click', hideModal);
  headerElement.append(title, closeButton);
  
  return headerElement;
}

function hideModal(event:any): void {
  const modal: Element = document.getElementsByClassName('modal-layer')[0];
  modal?.remove();
}
