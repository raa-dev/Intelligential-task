import config from ('../../config/config');
// const BookService = require('../../src/services/book.services');
// const service = new BookService();

export const url = config.apiUrl;

// export default async function getBooks(req, res, next) {
//     try {
//     const books = await service.find(req.query);
//     res.json(books);
//     } catch (error) {
//     next(error);
//     }
// }

export default function getBooks(){
    alert(url)
};