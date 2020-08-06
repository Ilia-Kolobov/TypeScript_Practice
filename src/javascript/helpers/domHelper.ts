export function createElement(obj: { tagName:string, className?: string, attributes?:any}): HTMLElement{
  const element: HTMLElement = document.createElement(obj.tagName);
  
  if (obj.className) {
    element.classList.add(obj.className);
  }

  if(obj.attributes != null){
    Object.keys(obj.attributes).forEach(key => element.setAttribute(key, obj.attributes[key]));
  }
  return element;
}