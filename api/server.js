const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authentication = require('./auth/users-auth-middleware');
const usersRouter = require('./auth/users-router');
const recipesRouter = require('./recipes/recipes_router');


const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
server.use("/api/users", usersRouter);
server.use("/api/recipes", authentication, recipesRouter);
server.options('*', cors());

server.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Grubspace server',
    });
});

server.use((err, req, res, next) => {
    console.log({err})
    res.status(err.status || 500).json({
        message: err.message,
    });
})

module.exports = server
