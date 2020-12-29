const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlog = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    // res.status(400).json({
    //   messege: "Request erorr",
    //   data: null,
    // });

    // default error
    const err = new Error("invalid value");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error("Image Harus di Upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: {
      uid: 1,
      name: "zhafran",
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        messege: "Create Blog Post Success",
        data: result,
      });

      console.log(req.file);
    })
    .catch((err) => console.log(err));
};

exports.getAllBlog = (req, res, next) => {
  BlogPost.find()
    .then((result) => {
      res.status(200).json({
        messege: "Data Blog Post Berhasil diPanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBlogById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("Blog post tidak ditemukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(200).json({
        messege: "Data berhasil dipanggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};
