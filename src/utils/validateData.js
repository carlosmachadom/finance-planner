function isValidName(name) {
  const regex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export { isValidName, isValidEmail };