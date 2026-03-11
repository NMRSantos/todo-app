export { createElement }

function createElement(typeName, className, idName) {
  const element = document.createElement(`${typeName}`);
  element.className = `${className}`;
  element.id = `${idName}`;
  return element;
};

function createForm(formType, formName, formValue, id) {
    const element = document.createElement("form");
    element.className = `${className}`;
    element.id = `${idName}`;
    element.setAttribute(`type`, `${formType}`);
    element.setAttribute(`name`, `${formName}`);
    element.setAttribute(`value`, `${formValue}`);
    element.id = `${id}`;
};