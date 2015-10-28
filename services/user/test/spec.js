"use strict";

var chai = require("chai"),
    expect = chai.expect();

describe('User services', function () {
   context("CRUD users", function () {
    it("Only create user with full infomation");
    it("Can delete user");
    it("Can edit user info");
    it("Can read user info");
   });
   context("authenticate user", function () {
    it("Can login with user and password");
    it("Return isAuthenticated when login success");
   });
});