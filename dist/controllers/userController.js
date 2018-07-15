"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
// register s user
exports.addUser = (req, res) => {
    let user = new user_1.default(req.body);
    user.save(((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    }));
};
// login a user
exports.login = (req, res) => {
    let loginDetails = req.body;
    user_1.default.find({ 'username': loginDetails.username }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user.length != 0) {
            if (loginDetails.password = user[0].password) {
                res.send({ message: 'this is the token', status: 200 });
            }
            else {
                res.send({ message: 'username or password incorrect', status: 401 });
            }
        }
        else {
            res.send({ message: "Username does not exist", status: 404 });
        }
    });
};
//# sourceMappingURL=userController.js.map