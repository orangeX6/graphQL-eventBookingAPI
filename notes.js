/*

#Rest API Limitations 
>> Lots of endpoints
>> Fetches all the data even if we don't require all the fields 

# GraphQL ? 
-> With GraphQL we can build a backend which exposes a single endpoint which is very  flexible regarding the query that is sent to it. We basically expose a query language to the front-end and therefore front end engineers can request data in all forms or shapes and at backend we don't have to edit the api because we expose it in a very flexible format and in the frontend we only get what we need.

# How exactly does GraphQL work? 
-> With GraphQL you always send a POST request even if we are fetching the data. 
>> POST/graphql (can be named anything but typically graphql)
-> So you have only one single endpoint /graphql with a POST request and the reason for sending a POST request is that graphql basically exposes a query language to the front-end.

-> POST request contains Query Expression(to define the data that should be returned)

>> A graphQL Query Example
{
    query {                 // operation type [types: query, mutation, subscription, etc]
        user {              // Operation endpoint
            name            // Requested fields
            age
        }
    }
}

->Operation Types -
>> query - retrieve data ('GET')
>> mutation - Manipulate Data ('POST', 'PATCH', 'PUT', 'DELETE')
>> subscription - Set up realtime connection via WebSockets

-> GRAPH QL BIG PICTURE

                              |-> Type Definition
Client--Server--POST/graphQL -|->  Query Definitions(like Routes)->> Resolver
                              |-> Mutation Defn (like Routes)       (contain 
                              |-> subscription Defn (like Routes)   server side
                                                                    logic)


                                                                    # PACKAGES INSTALLED
-> express graphql - this is a graphql package that can be used a middleware in nodejs Applications and that allows us to point to a schema, at resolvers and automatically connect that for us and route requests to a parser and then handle that according to our schema and forward them to the right resolvers.
const graphQlHttp = require('express-graphql');
This package exports a middleware function that takes incoming requests and funnel them through the graphQl query parser and automatically forward them to the right resolvers.

-> graphql - the graphql package will in the end allow us to define the schema and set up a schema that follows the official graphql specification and definition. 
>>Graph Ql supported types 
# Strings 
# Integer
# Boolean
# Floats
# and More


-> events: [String!]! ---> ! means it will return the specified type  guaranteed. It cant be nullable or something else. It can be an empty list but not null
-> rootValue is the bundle of all resolvers we have.
-> resolvers for your commands for eg. events, createEvent() must have the exact same names.
-> resolver is just a function, for example check the resolver events in rootValue in app.js file. The resolver function will be called for you by the express-graphql package in the end when an incoming request looks for this events property


-> graphiql - A built in debugging and development tool which express graphql ships with and we can unlock this tool by adding a third property after schema and rootValue which we pass to the object

>> difficult to understand point.
// we can use different names instead of /graphql, RootQuery, RootMutation, and data in RootQuery and RootMutation everything else is graphql syntax
*/
