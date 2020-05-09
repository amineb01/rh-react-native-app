import client from 'controllers/HttpClient';

class UserController {
  constructor() {
    this.basePath = '/sessions';
  }

  login = (login, password, company_id) =>{
    const body = {
      user: {
        login,
        password ,
        company_id
      }
    }
    return client.post(this.basePath, body )
  }

  logout = () => client.delete(this.basePath);
}

export default new UserController();
