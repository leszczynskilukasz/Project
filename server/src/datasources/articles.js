const { RESTDataSource } = require('apollo-datasource-rest');
const API_KEY = 'b014d316-d72d-45be-a2bd-fb94d7a09401';

class ArticlesAPI extends RESTDataSource{
  constructor() {
    super();
    this.baseURL = 'https://content.guardianapis.com/';
  }

  willSendRequest(request) {
    request.params.set('api-key', API_KEY);
  }

  // Map response values to schema
  articleReducer(article) {
    return {
        id: article.id,
        section: article.sectionName,
        title: article.webTitle,
        publicationDate: article.webPublicationDate,
        url: article.webUrl,
    };
  }

  async getArticles(section, page) {
    try {
      const data = await this.get(`search?section=${section}&page=${page}&page-size=10`);
      const result = data.response.results.map(article => this.articleReducer(article))

      return result;

    } catch (error) {
      return [];
    }
  }
}

module.exports = ArticlesAPI;
