const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const OpenApiValidator = require('express-openapi-validator');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({path: '../.env'});

const app = express();
const port = process.env.BACKEND_PORT || 3000;

app.use(cors());
app.use(express.json());

// OpenAPI setup
app.use(
    OpenApiValidator.middleware({
        apiSpec: './openapi.yaml',
        validateRequests: true,
        validateResponses: true,
    })
);

// Database connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Routes
app.use('/api/dictionary', require('./routes/dictionary'));
app.use('/api/story', require('./routes/story'));
app.use('/api/sentence', require('./routes/sentence'));
app.use('/api/word', require('./routes/word'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});