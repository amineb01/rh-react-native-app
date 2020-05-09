import client from 'controllers/HttpClient';

class CompanyController {

  constructor() {
    this.basePath = '/company?key=';
  }

  getCompany = ( key ) => client.get(this.basePath + key )


  logout = () => null;
}

export default new CompanyController();
