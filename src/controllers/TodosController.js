import client from 'controllers/HttpClient';

class TodosController {
  constructor() {
    this.basePath = '/todos';
  }

  getTodos = ( ) => client.get(this.basePath )


}

export default new TodosController();
