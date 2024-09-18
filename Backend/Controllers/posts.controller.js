const PostModel = require("../Models/posts.schema");

const createPosts = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Check if the author (user) exists
    const checkIfUserExist = await UserModel.findById(author);
    if (!checkIfUserExist) {
      return res.status(404).json({
        code: 404,
        message: 'User Not Found'
      });
    }

    // Handle image upload if there is a file
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    // Create a new post instance
    const newPost = new PostModel({
      title,
      content,
      author,
      imageUrl
    });

    // Save the new post to the database
    const resp = await newPost.save();

    // Respond with success message and data
    res.status(201).json({
      code: 201,
      message: 'Post created successfully',
      data: resp
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
  }
};

const viewUserPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(404).json({
        code: 404,
        message: 'Invalid Credentials',
      });
    }

    // Find posts by user ID
    const resp = await PostModel.find({ author: userId });

    // Respond with posts if found
    res.status(200).json({
      code: 200,
      message: 'User Posts',
      data: resp
    });
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error'
    });
  }
};


const getPosts = async (req, res) => {
  try {
    // Retrieve all posts
    const resp = await PostModel.find();

    // Check if there are no posts
    if (!resp || resp.length === 0) {
      return res.status(404).json({
        code: 404,
        message: 'No posts found',
        data: []
      });
    }

    // Respond with retrieved posts
    return res.status(200).json({
      code: 200,
      message: 'Posts retrieved successfully',
      data: resp
    });
  } catch (error) {
    console.error('Error fetching posts:', error);

    // Respond with error information, can be more detailed in development
    return res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

const deletePost = async (req, res) => {
  try {
    // Retrieve the post ID from the request
    const postId = req.params.id;
    if (!postId) {
      return res.status(404).json({
        code: 404,
        message: 'Invalid Credentials',
      });
    }

    // Find the post by ID and remove it from the database
    const deletedPost = await PostModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({
        code: 404,
        message: 'Post not found',
      });
    }

    // Respond with success message
    res.status(200).json({
      code: 200,
      message: 'Post deleted successfully',
      data: deletedPost,
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({
      code: 500,
      message: 'Internal Server Error',
    });
  }
};



module.exports = { createPosts, viewUserPosts, getPosts , deletePost };
