const url = require('url');
const querystirng = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystirng.parse(parsedUrl.query);
console.log('querystring.parse() : ',query);
console.log('querystirng.stringify() : ', querystirng.stringify(query));