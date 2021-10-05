const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");
const path = require("path");
const fs = require("fs");

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
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then((result) => {
      res.status(200).json({
        messege: "Data Blog Post Berhasil diPanggil",
        data: result,
        total_data: totalItems,
        per_page: parseInt(perPage),
        current_page: parseInt(currentPage),
      });
    })
    .catch((err) => {
      next(err);
    });

  // BlogPost.find()
  //   .then((result) => {
  //     res.status(200).json({
  //       messege: "Data Blog Post Berhasil diPanggil",
  //       data: result,
  //     });
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
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

exports.updateBlog = (req, res, next) => {
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
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        messege: "Update Success",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteBlog = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Post tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      removeImage(post.image);
      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      res.status(200).json({
        messege: "Delete Berhasil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeImage = (filePath) => {
  console.log(filePath);
  console.log("dirname: ", __dirname);

  filePath = path.join(__dirname, "../..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
