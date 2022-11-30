class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Mendez Romero Angel Yael.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
