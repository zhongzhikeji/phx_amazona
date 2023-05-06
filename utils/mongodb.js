require('dotenv').config()

const { MongoClient } = require('mongodb')

const client = new MongoClient(process.env.MONGODB_URI)

client.connect()

client.users = client.db().collection('users')
client.projects = client.db().collection('projects')

exports.users = client.db().collection('users')

module.exports = client
