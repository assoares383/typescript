import $ from 'jquery';
import Book from './model/book';

const book = new Book('Dom Quixote', 108.80, 0.1);
console.log(book.discountPrice());

$('body').append(`<h1>${book.name}</h1>`);
$('body').append(`<h2>R$ ${book.discountPrice()}</h2>`);