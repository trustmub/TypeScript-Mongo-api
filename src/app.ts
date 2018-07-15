import * as express from "express";
import * as bodyParser from "body-parser";
import * as bookController from "./controllers/bookController"
import * as userController from "./controllers/userController"

const app = express();
app.set("port", 3000);

app.use(bodyParser.json());

app.get('/', (req: any, res: any) => {
    res.send("its working well");
});

app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.put('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.post('/books/:id', bookController.updateBook);

app.put('/user', userController.addUser);
app.post('/user', userController.login);

app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});