// Section 1
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

// Adding middleware proxy for call localhost API available on 8080 port to avoid cors issue.
app.use('/java', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true, pathRewrite: {"^/java": "/"}}));
app.use(bodyParser.json()); 

module.exports = app;
module.exports.handler = serverless(app);
