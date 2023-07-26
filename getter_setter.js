class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this.password.toUpperCase();
  }

  set password(value) {
    this.password = value;
  }
}

const parteek = new User("a@b.com", "123");
