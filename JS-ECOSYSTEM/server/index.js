const express = require('express');
// Middleware for express; takes an options object or function as input to configure behavior, and returns an express middleware.
const graphqlHTTP = require('express-graphql');
// A helper function to build a GraphQLSchema directly from a source document.
const { buildSchema } = require('graphql');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors())


// GraphQL (SCOPE)
//  GraphQLSchema : (graph ql application structure) defines types, queries and mutations
// think of interfaces
const schema = buildSchema(`

  type User {
    id: String
    name: String
    job_title: String
    email: String
  }

  type Query {
    getUsers: [User],
    getUserInfo(id: Int) : User
  }

  type Mutation {
    updateUserInfo(id: Int, name: String, email: String, job_title: String) : Boolean
    createUser(name: String, email: String, job_title: String) : Boolean
    deleteUser(id: Int) : Boolean
  }
`);

//  Escope : A  Promise that performs an action on the database. Low level JDBC operations
// Executing the prepared statement, processing the resultset and returning the values. [Promises]
const queryDB = (req, sql, args) => new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
        if (err)
            return reject(err);
        rows.changedRows || rows.affectedRows || rows.insertId ? resolve(true) : resolve(rows);
    });
});

// resolvers do
// 1. perform the computation and
// 2. dipatch the data
// 3. mapping for queries to perform computation and return data.
// think of interface implementations. PreparedStatements
const root = {
    getUsers: (args, req) => queryDB(req, "select * from users").then(data => data),
    getUserInfo: (args, req) => queryDB(req, "select * from users where id = ?", [args.id]).then(data => data[0]),
    updateUserInfo: (args, req) => queryDB(req, "update users SET ? where id = ?", [args, args.id]).then(data => data),
    createUser: (args, req) => queryDB(req, "insert into users SET ?", args).then(data => data),
    deleteUser: (args, req) => queryDB(req, "delete from users where id = ?", [args.id]).then(data => data)
};

// Hanldle the request
app.use((req, res, next) => {
    req.mysqlDb = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'mysql',
        database : 'amddb'
    });
    req.mysqlDb.connect();
    next();
});


// setting up the (generic http infrastructure)
//  /graphql is the endpoint
app.use('/graphql', graphqlHTTP({
    // A GraphQL schema from graphql-j
    schema: schema,
    // An object to pass as the rootValue to the graphql() function.
    rootValue: root,
    // A boolean to optionally enable GraphiQL mode.
    // In Browser IDE.
    graphiql: true,
}));

app.listen(4000);

// Node JS / Apache tomcat / IIS log.....
console.log('Running a GraphQL API server at localhost:4000/graphql');
