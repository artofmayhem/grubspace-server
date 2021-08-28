require('dotenv').config();

const path = require('path');
const express = require('express');
const server = require('./api/server')

const port = process.env.PORT || 5309;
const message = process.env.MESSAGE || 'Strong in the force you are. Server running on port:';

server.use(express.static(path.join(__dirname, 'client/dist')));

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

server.listen(port, () => {
    console.log(`${message} ${port}`);
    console.log(message);
})