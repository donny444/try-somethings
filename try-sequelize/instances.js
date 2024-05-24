const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('user', {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'green',
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
});

(async () => {
    await sequelize.sync({ force: true });
    // Code here
    console.log(jane instanceof User) // true
    console.log(jane.name); // "Jane"
    console.log(jane.favoriteColor); // "Green"
    await jane.save();
    console.log("Jane was saved to the database!");

    const drake = await User.create({ name: "Drake" });
    console.log(drake.name); // "Drake"
    drake.name = "Anita Maxwin";
    drake.set({
        age: 37,
        cash: 3200000000
    });
    await drake.save();
    // console.log(drake); // Don't do this
    console.log(drake.toJSON()); // This is good!
    console.log(JSON.stringify(drake, null, 4)); // This is also good!
    await drake.destroy();

    const kendrick = await User.create({ name: "Kendrick" });
    kendrick.cash = 3000000000;
    kendrick.age = 36;
    kendrick.favoriteColor = "Brown";
    await kendrick.save({ fields: ["favoriteColor"] });

    const kanye = await User.create({ name: "Kanye", age: 46, cash: 100 });
    const incrementResult = await kanye.increment("age", "cash");


})();

const jane = User.build({ name: "Jane" });