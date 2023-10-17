const bcrypt = require("bcryptjs")
const users = [
    {
        name: "Lucky",
        email: "jadhavlaxman136@gmail.com",
        password: bcrypt.hashSync("123", 10),
        isAdmin: true,
    },
    {
        name: "John",
        email: "john@gmail.com",
        password: bcrypt.hashSync("123", 10),
        isAdmin: false,
    }
]

module.exports = users