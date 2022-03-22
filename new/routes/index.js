const express = require("express");
const router = express.Router();


const post_ctrl = require("../controls/post.js");


module.exports = function() {

  router.get("/customers_list", post_ctrl._customers_list);

  return router;
};