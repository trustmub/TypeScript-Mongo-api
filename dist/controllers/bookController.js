"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./../book");
// get all books
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, books) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
//get a book
exports.getBook = (req, res) => {
    book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// add a book
exports.addBook = (req, res) => {
    let book = new book_1.default(req.body);
    book.save(((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    }));
};
//delete a book
exports.deleteBook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successifuly deleted Book");
        }
    });
};
exports.updateBook = (req, res) => {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated Book");
        }
    });
};
//# sourceMappingURL=bookController.js.map