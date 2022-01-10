//import db by requiring it from connection.js
const db = require('./connection')
//import models for seeding database
const { User, Area } = require('../models')
const userSeeds = require('./seeders/userSeeds.json')
const areaSeeds = require('./seeders/areaSeeds.json')

db.once('open', async() => {
    try {
        await Area.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);
        console.log('user and area seeds before loop')
        console.log(userSeeds)
        console.log('area seeds before loops')
        console.log(areaSeeds)

        for (let i = 0; i < areaSeeds.length; i++) {
            const { _id, areaOwner } = await Area.create(areaSeeds[i]);
            const user = await User.findOneAndUpdate(
                { email: areaOwner},
                {
                    $addToSet: {
                        areas: _id,
                    },
                }
            )
            console.log('id areaOwners and user below after loop')
            console.log(_id, areaOwner, user)

            console.log('///////////////////// just user ////////////////////')
            console.log(user)

            console.log(user.areas)
        }

    } catch (err) {
        console.error(err);
        process.exit(1)
    }

    console.log('db seeded');
    process.exit(0)

 });