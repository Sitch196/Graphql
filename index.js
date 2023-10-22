const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const MONGODB = `mongodb+srv://sichinava1996:${process.env.PASSWORD}@one.ieclorn.mongodb.net/?retryWrites=true&w=majority`;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const getConnection = async () => {
  try {
    await mongoose.connect(MONGODB, { useNewUrlParser: true });
    console.log("MongoDB Connection Successful");
  } catch (err) {
    console.log(err);
  }
};
getConnection();
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server Successfuly Running on Port ${port}...`);
});
