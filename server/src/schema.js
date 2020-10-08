const { gql } = require('apollo-server');

const typeDefs = gql`
"""
TEMPLATE
"""
type TemplateType {
  id: ID!
  name: String!
}

type Query {
  launch(id: ID!): TemplateType
}
`;

module.exports = typeDefs;
