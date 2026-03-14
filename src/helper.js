export { createElement, setRadioAtributes }

function createElement(typeName, className, idName) {
  const element = document.createElement(`${typeName}`);
  element.className = `${className}`;
  element.id = `${idName}`;
  return element;
};

function setRadioAtributes(element, value, name) {
  element.setAttribute(`type`, "radio");
  element.setAttribute(`value`, `${value}`);
  element.setAttribute(`name`, `${name}`);
  return element
};