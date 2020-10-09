const { gql } = require('apollo-server');

const typeDefs = gql`
"""
Article Object
"""
type Article {
  id: ID!
  section: String!
  title: String!
  publicationDate: String!
  url: String!
}
"""
Get Articles Query
"""
type Query {
  articles(section: String!, page: Int!): [Article]!
}
`;

module.exports = typeDefs;
