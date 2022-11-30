class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
       Angel Yael Mendez Romero.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
