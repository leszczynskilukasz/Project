const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ArticlesAPI = require('./datasources/articles');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new ArticlesAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
