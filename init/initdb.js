const mongodb = require('../utils/mongodb')

const data = require('../utils/data')

;(async function () {
    await mongodb.users.deleteMany({})

    await Promise.all([
        mongodb.users.insertMany(data.users),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
        mongodb.projects.insertMany([{ test: 1 }]),
    ])
    const result = await mongodb.users.find().toArray()


    console.log('init db success')
    process.exit(0)
})()
