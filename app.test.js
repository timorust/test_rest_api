var supertest = require('supertest');
var should = require('should');

const server = supertest.agent('localhost:8080')