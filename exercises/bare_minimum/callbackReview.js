/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
const lineBuilder = (err, data) => {
  if(err){
    return err;
  }else{
    return data;
  }
}
var pluckFirstLineFromFile = function (filePath, lineBuilder) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
      lineBuilder(err);
    }else{
      lineBuilder(null, data.split('\n')[0]);
    }
  })
};

const status = (err, stat) => {
  if(err){
    return err;
  }else{
    return stat;
  }
}
// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, status) {
  request(url, 'headers', (err, headers) => {
    if(err) {
      status(err);
    }else {
      status(null, headers.statusCode)
    }
    
  })


};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
