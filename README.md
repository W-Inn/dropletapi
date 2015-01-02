DropletApi
=======

[![NPM](https://nodei.co/npm/dropletapi.png?downloads=true&stars=true)](https://nodei.co/npm/dropletapi/)

(C) Oliwer Helsén (oliwer.helsen@live.com) 2015

A wrapper for DigitalOceans API v2

See [Version History](https://github.com/oliwerhelsen/DigitalOcean-API-v2/wiki/Version-History) for changes

Installing
----------

```
npm install dropletapi
npm install dropletapi --save
```

Features
--------

* Create new Droplet

API
---


### createDroplet(name, region, size, image, ssh_keys, backups, ipv6, private_networking, user_data, callback)

Create a new Droplet

Example usage
-------------

```javascript
var DIGITALOCEAN = require('dropletapi');

var digitalocean = new DIGITALOCEAN('Your API-TOKEN');

digitalocean.createDroplet('testingAPI', 'nyc3', '512mb', 'ubuntu-14-04-x64', null, false, true, null, null, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

TODO
----
* Add more actions from the DigitalOcean API v2