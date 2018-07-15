import {Response, Request} from "express"
import User from "../user";

// register s user
export let addUser = (req: Request, res: Response) => {
    let user = new User(req.body);
    user.save(((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    }))
};

// login a user
export let login = (req: Request, res: Response) => {
    let loginDetails = req.body;
    User.find({'username': loginDetails.username}, (err: any, user: any) => {
        if (err) {
            res.send(err);
        }
        if (user.length !== 0) {
            if (loginDetails.password = user[0].password) {
                res.send({message: 'this is the token', status: 200})
            } else {
                res.send({message: 'username or password incorrect', status: 401})
            }
        } else {
            res.send({message: "Username does not exist", status: 404})
        }
    });

};