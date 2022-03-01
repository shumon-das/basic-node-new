

const user = {}


user.allUsers = (req, res) => {
    res.send("show all user")
}

user.oneUser = (req, res) => {
    res.send("show only one user")
}

user.usersByIds = (req, res) => {
    res.send("show some user by there ids")
}


module.exports = user