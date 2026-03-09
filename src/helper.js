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
    element.setAtribute(`type`, `${formType}`);
    element.setAtribute(`name`, `${formName}`);
    element.setAtribute(`value`, `${formValue}`);
    element.id = `${id}`;
};