class Formulaire {
  constructor(title, id, method, action) {
    this._title = title;
    this._id = id;
    this._method = method;
    this._action = action;
    this._inputs = [];
    const formHtml = document.createElement("form");
    formHtml.id = this._id;
    formHtml.method = this._method;
    formHtml.action = this._action;
    const titleHtml = document.createElement("h3");
    titleHtml.innerText = this._title;
    document
      .querySelector("#forms")
      .appendChild(titleHtml)
      .appendChild(formHtml);
  }
  insertInput(label, name, type) {
    this._inputs.push({
      label: label,
      name: name,
      type: type,
    });
    this.createHTML();
  }

  createHTML() {
    let inputs = "";
    for (let i = 0; i < this._inputs.length; i++) {
      const element = this._inputs[i];
      inputs += `<label>
            ${element.label}
            <input type=${element.type} name=${element.name} />
        </label>`;
    }
    document.querySelector(`#${this._id}`).innerHTML = inputs;
  }

  /*removeInput(name) {
    this._inputs = this._inputs.filter(function (input) {
      console.log(input.name, name, input.name !== name);
      return input.name !== name;
    });
    console.log(this._inputs);
    this.createHTML();
  } */
}

const form1 = new Formulaire(
  "Mon formulaire:",
  "form1",
  "GET",
  "www.google.com"
);

class FormRemovable extends Formulaire {
  removeInput(name) {
    this._inputs = this._inputs.filter(function (input) {
      console.log(input.name, name, input.name !== name);
      return input.name !== name;
    });
    console.log(this._inputs);
    this.createHTML();
  }
}
