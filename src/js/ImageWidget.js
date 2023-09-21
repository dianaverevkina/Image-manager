export default class ImageWidget {
  constructor(container, createImg) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    }

    this.createImg = createImg;

    this.imageWidgetForm = this.container.querySelector('.image-widget__form');
    this.imageWidgetBtn = this.container.querySelector('.image-widget__btn');
    this.inputLink = this.container.querySelector('.field__input-link');

    this.addImage = this.addImage.bind(this);
    this.hideErrorText = this.hideErrorText.bind(this);

    this.addEvents();
  }

  // Добавляем прослушиватели событий
  addEvents() {
    this.imageWidgetForm.addEventListener('submit', this.addImage);
    this.imageWidgetBtn.addEventListener('click', this.addImage);
    this.inputLink.addEventListener('input', this.hideErrorText);
  }

  // Добавляем изображение по ссылке, указанной пользователем
  addImage(e) {
    e.preventDefault();

    this.nameInput = this.container.querySelector('.field__input-name');
    this.linkInput = this.container.querySelector('.field__input-link');

    const imgName = this.nameInput.value;
    const imgLink = this.linkInput.value;

    const data = {
      name: imgName,
      link: imgLink,
    };

    const fieldLink = this.container.querySelector('.field__block-link');
    this.createImg(data, fieldLink);
    this.imageWidgetForm.reset();
  }

  // Удаляем сообщение об ошибке при вводе текста
  hideErrorText() {
    this.errorText = this.container.querySelector('.field__error-text');
    if (!this.errorText) return;
    this.errorText.remove();
  }
}
