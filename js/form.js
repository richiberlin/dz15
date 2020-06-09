import { storage } from "./storage";

export class FormNative {
  constructor(form) {
    this.form = form;
    this.btnSubmit = this.form.querySelector('button[type="submit"]');

    this._handleSubmitForm = this._submitForm.bind(this);

    this._init();
  }

  _init() {
    this.btnSubmit.addEventListener("click", this._handleSubmitForm);
  }

  _submitForm(event) {
    event.preventDefault();

    if (!this.form.checkValidity()) {
      this.form.classList.add("invalid");
    } else {
      this.form.classList.remove("invalid");

      const formData = new FormData(this.form);
      formData.append("token", "fgjsnjvkdfhsdjfhhuu5w4958y0457y03y5vm745y");

      const now = new Date();
      formData.append("time", now);

      const resume = {};
      for (const [name, value] of formData) {
        storage.set(name, value);

        resume[name] = value;
      }

      this.form.reset();

      console.log(resume);
    }
  }
}
