const { Sequelize, Op, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize("try-sequelize", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql"
})

async function testConnection() {

    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

    // `sequelize.define` also returns the model
    // the defined model is the class itself
    console.log(User === sequelize.models.User); // true

    await User.sync();
    await Game.sync();

    const user = new User({ id: 1 });
    console.log(user.id); // 1

    const cs = new Game({
        gameName: "Counter-Strike 2",
        category: "First Person Shooter",
        price: 0,
        releaseDate: "2012-08-22",
    });

    const dota2 = new Game({
        gameName: "Dota 2",
        category: "MOBA",
        price: 0,
        releaseDate: "2013-07-10"
    });
    
    await sequelize.close();
}

// const User = sequelize.define(
//     "User",
//     {
//         // Model attributes are defined here
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             // allowNull defaults to true
//         }
//     },
//     {
//         // Other model options go here
//         freezeTableName: true,
//     },
// );

// Valid
class User extends Model {
    otherPublicFields; // this field does not shadow anything. It is fine.
}

User.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "User", // We need to choose the model name
    },
);

const Game = sequelize.define(
    "Game",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        gameName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: DataTypes.STRING,
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    }
);

testConnection();