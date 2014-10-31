node-sharepoint-ntlm
=============

SharePoint 2013 REST API using NTLM.


### Using node-sharepoint-ntlm

    $ npm install node-sharepoint-ntlm

With it now installed in your project:

    var settings = {
        user      : "node",
        pass      : "password",
        url       : "https://sharepoint/subsite"
    };

    var SharePoint = require('node-sharepoint-ntlm');
    
    var sharePoint = new SharePoint(settings);

----

#### GET API

##### <a id="get">get</a>
is a base function of the SharePoint class for getting any data from a SharePoint app.  

    sharePoint.get("/_api/Web/Lists"), function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.dir(result);
      }
    
###### [Back to top](#node-sharepoint-ntlm)
----
