import { findAllUserBlogs, findBlogById, createBlog } from "../db/blogQueries";

//uses GET "/api/blogs" route
function getAllBlogs(req, res) {
    //logic for getting the blog
    findAllUserBlogs();
}

//uses GET "api/blogs/:id" route
function getSingleBlog(req, res) {
    //logic for getting the blog
    findBlogById();
}

//uses POST "/api/blogs" route
function postBlog(req, res) {
    //logic for posting the blog
    createBlog();
}

export { getAllBlogs, getSingleBlog, postBlog };
