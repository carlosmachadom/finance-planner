function scrollToElement(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
}

export default scrollToElement;