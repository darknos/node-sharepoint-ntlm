var CustomLists;

var httpntlm = require('./httpntlm');

CustomLists = (function() {
  function CustomLists() {}

  CustomLists.prototype.get = function(url, cb) {
    var config, processRequest;
    processRequest = function(err, res, body) {
      console.log(err, res);
      if (err || !res || !res.body || !JSON.parse(res.body)) {
        return cb(err || "Empty body or no result");
      } else {
        return cb(err, JSON.parse(res.body));
      }
    };
    config = {
      headers: {
        Accept: "application/json;odata=verbose"
      },
      url: "" + this.url + url,
      username: this.user,
      password: this.pass
    };
    console.log(this.settings);
    httpntlm.get(config, processRequest, this.settings.ca);
    return this;
  };

  return CustomLists;

})();

module.exports = CustomLists;
