import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import ShoppingCart from './components/shopping-cart.js';
import Filter from './components/filter.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;

    this._render();

    this._catalog = new PhoneCatalog({
      element: this._element.querySelector('[data-component="phone-catalog"]')
    });

    this._viewer = new PhoneViewer({
      element: this._element.querySelector('[data-component="phone-viewer"]')
    });

    this._cart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]')
    });

    this._filter = new Filter({
      element: this._element.querySelector('[data-component="filter"]')
    });
  }

  _render() {
    this._element.innerHTML = `
        <!--Sidebar-->
    <div class="col-md-2">
      <section data-component="filter"></section>
      <section data-component="shopping-cart"></section>
    </div>

    <!--Main content-->
    <div class="col-md-10">
      <div data-component="phone-catalog"></div>
      <div data-component="phone-viewer" hidden></div>
    </div>
    `;
  }
}
