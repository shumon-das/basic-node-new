const home = {}

home.index = (req, res) => {
    res.render("./views/home")
}

home.navbar = (req, res) => {
    res.send("Home Navbar!!!")
}

home.sidebar = (req, res) => {
    res.send("Home Sidebar!!!")
}

home.footer = (req, res) => {
    res.send("Home Footer!!!")
}

module.exports = home