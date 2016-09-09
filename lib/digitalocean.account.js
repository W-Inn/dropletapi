/*!
* DigitalOcean API V3
*/

/**
 * Module dependencies.
 */

var rest = require('restler');

var Account = function(token) {
    this.baseUri = "https://api.digitalocean.com/v2/";
    this.token = token;
};

Account.prototype.createQuery = function() {
    return {};
};

function makeRequest(fn, uri, options, callback) {
    var handler = function(result) {
        if (result instanceof Error) {
            callback(result);
        } else {
            callback(null, result);
        }

        this.removeListener('complete', handler);
    };

    fn(uri, options)
        .on('complete', handler);
}

function makeRequestJson(fn, uri, data, options, callback) {
    var handler = function(result) {
       if (result instanceof Error) {
            callback(result);
        } else {
            callback(null, result);
        }

        this.removeListener('complete', handler);
    };

    fn(uri, data, options)
        .on('complete', handler);
}

/**
 * Get User Information
 *
 * @response Object containing the standard attributes for your account
 *
 * Api documentation: https://developers.digitalocean.com/#get-user-information
 */

Account.prototype.getUserInfo = function(callback) {

    makeRequest(rest.get, this.baseUri + 'account', {query: headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token}}, callback);
};

module.exports = Account;
