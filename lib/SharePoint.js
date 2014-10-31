(function() {
  var CustomLists, SharePoint, SuperClass, UserProfiles,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SuperClass = require('./SuperClass');

  UserProfiles = require('./UserProfiles');

  CustomLists = require('./CustomLists');

  SharePoint = (function(_super) {
    __extends(SharePoint, _super);

    SharePoint.include(UserProfiles);

    SharePoint.include(CustomLists);

    function SharePoint(settings) {
      this.settings = settings;
      UserProfiles.call(this);
      CustomLists.call(this);
      if (!this.settings) {
        throw new Error("settings object is required for instance creation");
      } else {
        if (!this.settings.strictSSL) {
          this.settings.strictSSL = false;
        }
        this.request = require('request');
        this.user = this.settings.username || void 0;
        this.pass = this.settings.password || void 0;
        this.url = this.settings.url || void 0;
        if (typeof this.url === "undefined" || typeof this.user === "undefined" || typeof this.pass === "undefined") {
          throw new Error("settings object requires username, password, and url for instance creation");
        }
        this.setSiteUrl(this.url);
      }
    }

    SharePoint.prototype.log = function(msg) {
      return console.log(msg);
    };

    SharePoint.prototype.setSiteUrl = function(url) {
      this.url = url;
      this.log('setting site url to: ' + this.url);
      return this;
    };

    return SharePoint;

  })(SuperClass);

  module.exports = SharePoint;

}).call(this);
