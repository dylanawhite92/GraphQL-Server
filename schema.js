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
];

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
// resolve fetched customer by ID, using for loop on account of hardcoded data
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields : {
        customer : {
            type : CustomerType,
            args : {
                id : {type: GraphQLString},
            },
            resolve(parentValue, args) {
                for (let i = 0; i < customers.length; i++) {
                    if (customers[i].id === args.id) {
                        return customers[i];
                    }
                }
            }
        },
        customers : {
            type : new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return customers;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});