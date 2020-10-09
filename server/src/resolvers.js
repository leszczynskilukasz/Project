module.exports = {
  Query: {
    articles: async (_, { section, page }, { dataSources }) => dataSources.articlesAPI.getArticles(section, page),
  }
};
