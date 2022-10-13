const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String,
    numberOfAnimals: Int,
    price: Float!
    isCool: Boolean
    products: [Product!]!,
    product(id: String!): Product
    categories: [Category!]!
    category(id:ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description:String!,
    price: Float!
    quantity: Int!
    onSale: Boolean!
    image: String!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`