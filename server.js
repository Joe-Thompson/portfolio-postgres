const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const message_router = require('./router_models/message_router');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/message', message_router);

server.get('/', async (req, res, next) => {
    res.status(200).json({
        message: 'welcome'
    });
});

server.use('/', async (err, req, res, next) => {
   res.status(500).json({
       error_message: 'Opps, something went wrong.'
   });
});

server.listen(PORT, () => {
   console.log(`--- server running on port ${PORT} ---`);
});