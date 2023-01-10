const validations = {
  // Regexes
  usernameRegex: /^[A-Za-z0-9_-]/,
  passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
  // Checks
  checkUsernameValidation(username) {
    return username.match(this.usernameRegex);
  },
  checkPasswordValidation(password) {
    return password.match(this.passwordRegex);
  },
};

export default validations;
