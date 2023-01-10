const validations = {
  // Regexes
  usernameRegex: /^[A-Za-z0-9_-]/,
  passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  idRegex: /[0-9A-Fa-f]{24}/,
  // Checks
  isUsernameValidated(username) {
    return username.match(this.usernameRegex);
  },
  isPasswordValidated(password) {
    return password.match(this.passwordRegex);
  },
  isIdValidated(id) {
    return id.match(this.idRegex);
  },
};

export default Object.freeze(validations);
