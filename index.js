import { ApolloServer, gql } from "apollo-server";

const persons = [
  {
    name: "Frank",
    phone: "0303456999",
    street: "Brick Lane",
    city: "London",
    id: "71267236128012",
  },
  {
    name: "David",
    phone: "27363097333",
    street: "The Mall",
    city: "Copenhagen",
    id: "7363739902092",
  },
  {
    name: "Charlie",
    phone: "36390283620",
    street: "Carnaby Street",
    city: "San Miguel",
    id: "2372366349033",
  },
  {
    name: "Lucas",
    street: "Leicester Square",
    city: "Manchester",
    id: "28746490189373",
  },
];

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
