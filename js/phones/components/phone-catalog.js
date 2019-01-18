import Component from '../../component.js';

export default class PhoneCatalog extends Component {
  constructor({
    element,
    phones,
    onPhoneSelected = () => {}
  }) {
    super({ element });

    this._element = element;
    this._phones = phones;
    this._onPhoneSelected = onPhoneSelected;

    this._render();

    this._element.addEventListener('click', (event) => {
      let detailsLink = event.target.closest('[data-element="details-link"]');

      if (!detailsLink) {
        return;
      }

      let phoneElement = event.target.closest('[data-element="phone-item"]');

      this._onPhoneSelected(phoneElement.dataset.phoneId);
    });
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._phones.map(phone => `
        
          <li
            class="thumbnail"
            data-phone-id="${ phone.id }"
            data-element="phone-item"
          >
            <a
              href="#!/phones/${ phone.id }"
              class="thumb"
              data-element="details-link"
            >
              <img alt="${ phone.name }" src="${ phone.imageUrl }">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>
  
            <a
              href="#!/phones/${ phone.id }"
              data-element="details-link"
            >
              ${ phone.name }
            </a>
            
            <p>${ phone.snippet }</p>
          </li>
        
        `).join('') }
      </ul>
    `;
  }
}
