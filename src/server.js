const http = require('http');
const url = require('url');

const router = require('./router');

module.exports = http.createServer((req, res) => {
  router.req = req;
  router.res = res;
  let pathname = url.parse(req.url).pathname;
  if(pathname == '/' || pathname == '/index.html') {
    router.renderIndex();
  } else if(pathname == '/upload') {
    router.uploadFile();
  }
});
