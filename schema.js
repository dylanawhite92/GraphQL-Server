// Importing needed data types from GraphQL 
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcoded Data
const customers = [
    {
        id : '1', 
        name : 'Jahm Dorp',
        email : 'jdorp@gmail.com',
        age : 35
    },
    {
        id : '2', 
        name : 'Uncle Diaper',
        email : 'ucdiaper@gmail.com',
        age : 11
    },
    {
        id : '3', 
        name : 'Granny Syrup-Pants',
        email : 'syrupbottoms@gmail.com',
        age : 89
    }
]

// Customer Type, defining fields for data
const CustomerType = new GraphQLObjectType({
    name : 'Customer',
    fields : () => ({
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        email : {type : GraphQLString},
        age : {type : GraphQLInt}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    customer : {
        type : CustomerType
    }
});

module.exports = new GraphQLSchema({

});