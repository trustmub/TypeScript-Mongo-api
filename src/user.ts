import * as mongoose from "mongoose";

const uri: string = 'mongodb://127.0.0.1:27017/local';


mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully Connected");
    }
});

export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    create_date: {type: Date, default: Date.now},

});

const User = mongoose.model('User', UserSchema);

export default User;