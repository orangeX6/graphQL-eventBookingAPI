const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(express.json());

// app.get('/', (req, res, next) => {
//   console.log(req);
//   res.send('Hello World');
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
      type RootQuery {
        events: [String!]!
      }
      type RootMutation {
        createEvent(name: String): String
      }
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      events: () => {
        return ['Romantic Cooking', 'Sailing', 'All-Night Coding'];
      },
      createEvent: (args) => {
        const eventName = args.name;
        return eventName;
      },
    },
    graphiql: true,
  })
);

app.listen(3000);
