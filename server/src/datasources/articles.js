const { RESTDataSource } = require('apollo-datasource-rest');

class ArticlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
}

module.exports = ArticlesAPI;
