import client from 'controllers/HttpClient';

class TechniciansController {
  constructor() {
    this.basePath = '/connection?company_id=';
  }

  getTechnicians = ( companyId ) => client.get(this.basePath + companyId )


}

export default new TechniciansController();
