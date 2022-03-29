import { ApolloServer, gql } from "apollo-server-express"
import express from "express"

const app = express()

const typeDefs = gql`
  type Query {
    hello: String!
    hell: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello",
    hell: () => "Hell"
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.start().then(() => {
  server.applyMiddleware({ app })
  app.listen({ port: 4000 }, () => {
    console.log(`server running at http://localhost:4000${server.graphqlPath}`)
  })
})
