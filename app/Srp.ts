//IMPLEMENTACIÓN QUE NO SE DEBE HACER
class UserSettings1 {
    user: string;
    constructor(user) {
      this.user = user;
    }
  
    changeSettings(settings) {
1
    }
  
    verifyCredentials() {
      // ...
    }
  }

//IMPLEMENTACIÓN CORRECTA

class UserAuth {
  user: string;
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  user: string;
  auth: UserAuth;
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {

  }
}
