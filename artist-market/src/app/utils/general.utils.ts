export function scrollToElement(elementoDiDestinazione: string): void {
    const element = document.getElementById(elementoDiDestinazione);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

 export function scrollToCenter(elementoDiDestinazione: string): void {
    const element = document.getElementById(elementoDiDestinazione);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const elementHeight = elementRect.height;
      const windowHeight = window.innerHeight;
      const offset = (elementHeight - windowHeight) / 2;
      window.scroll({
        top: elementRect.top + offset,
        behavior: 'smooth'
      });
    }
  }