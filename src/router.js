const pug = require('pug');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const viewsPath = path.resolve('views');

let router = {};
router.renderIndex = function() {
  const template = path.resolve(viewsPath, 'index.pug');
  const html = pug.renderFile(template);

  this.res.writeHeader(200, {'Content-Type': 'text/html'});
  this.res.end(html);
}

router.uploadFile = function() {
  const filesDir = path.resolve('files');
  const template = path.resolve(viewsPath, 'files.pug');

  if(!fs.existsSync(filesDir)) fs.mkdirSync(filesDir);
  let options = { multiples: true, uploadDir: filesDir }
  let form = new formidable.IncomingForm(options);

  form.parse(this.req, function(err, fields, files){
    const html = pug.renderFile(template, {files: files.my_files});

    router.res.writeHeader(200, {'Content-Type': 'text/html'});
    router.res.end(html);
  });
}

module.exports = router;
