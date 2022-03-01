const home = require('./Controller/Home')
const user = require('./Controller/User')

function Route(app){
    // home page
    app.get("/", home.index)
    app.get("/navbar", home.navbar)
    app.get("/sidebar", home.sidebar)
    app.get("/footer", home.footer)

    // user page
    app.get("/users", user.allUsers)
    app.get("/user", user.oneUser)
    app.get("/usersByIds", user.usersByIds)
}
module.exports = Route    