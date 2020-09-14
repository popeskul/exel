export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement("div");

    this.components.forEach(Component => {
      const component = new Component();
      $root.insertAdjacentHTML("beforeend", component.toHTML());
    });

    return $root;
  }

  render() {
    // insertAdjacentHTML, insertInner, append, appendChild
    // this.$el.insertAdjacentHTML(  `<h1>Hello world!</h1>`);
    // const node = document.createElement("h1");
    // node.textContent = "Hello World!";
    this.$el.append(this.getRoot());
  }
}
