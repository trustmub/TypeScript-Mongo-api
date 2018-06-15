import { Response, Request } from "express"
import Book from './../book'

// get all books
export let allBooks = (req: Request, res: Response) => {
    let books = Book.find((err: any, books: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(books)
        }
    })
}
//get a book
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(book)
        }
    })
}

// add a book
export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body)
    book.save(((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(book)
        }
    }))
}

//delete a book
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successifuly deleted Book")
        }
    })
}

export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully updated Book")
        }
    })
}

