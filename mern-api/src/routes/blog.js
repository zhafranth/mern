const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  ],
  blogController.createBlog
);

router.get("/posts", blogController.getAllBlog);
router.get("/post/:postId", blogController.getBlogById);
router.put(
  "/post/:postId",
  [
    body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai"),
  ],
  blogController.updateBlog
);
router.delete("/post/:postId", blogController.deleteBlog);

module.exports = router;
