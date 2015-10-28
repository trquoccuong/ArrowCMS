"use strict";

//var actionheroClient = require("actionhero-client");
//var client = new actionheroClient();

module.exports.findById = function (id) {
    var self = this;
    return self.models.user.findById(id);
};

//client.on("error", function (err, data) {
//    console.log("ERROR: " + err);
//    if (data) {
//        console.log(data);
//    }
//});
//
//client.connect({
//    host: "127.0.0.1",
//    port: "5000"
//}, function () {
//    console.log("Connected to Action hero");
//});
//
//module.exports.findById = function (id) {
//    return new Promise(function (fulfill, reject) {
//        client.actionWithParams("findById", {id: 2}, function (err, apiResponse, delta) {
//            if (err) {
//                return reject(err);
//            }
//            fulfill(apiResponse);
//        });
//    })
//};