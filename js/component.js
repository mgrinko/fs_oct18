export default class Component {
  constructor({ element }) {
    this._element = element;
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }

  on(eventName, callback) {
    this._element.addEventListener(eventName, callback);
  }
}
