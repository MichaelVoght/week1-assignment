// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const result = `<${this.tag}>${this.content}</${this.tag}>`;
    return result;
  }
}

// Export class here
export default HTMLElement;
