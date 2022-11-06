// For The Full file of the client https://github.com/machadop1407/graphql-full-course

const { ApolloServer } = require ("@apollo/server");
const { resolvers } = require("./schema/resolvers");
const { startStandaloneServer } = require ("@apollo/server/standalone");

const { typeDefs } = require("./schema/type_defs");

const server = new ApolloServer({ typeDefs, resolvers });
const { url } =  startStandaloneServer(server, {
    context: ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at ${url}`);






