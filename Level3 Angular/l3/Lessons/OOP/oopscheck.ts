// to instantiate a class(Create an object o that class), we use the new keyword

import { Library } from "./library";

const ganeChanger = new Library();
ganeChanger.author = 'SAA LEVEL-3';
ganeChanger.coauthors = ['Mr Kambang' , 'Mme Yomba'];
ganeChanger.description = 'The best GC in Typescript/Angular'


const urlParser = new Library();
urlParser.author = 'some body';
urlParser.coauthors = ['New some people', 'SAA Students'];
urlParser.description = 'The best URL transformer';

console.log(urlParser.getAuthor());
urlParser.setCoauthors('Randy Author');
console.log(urlParser.getCoAuthors());

