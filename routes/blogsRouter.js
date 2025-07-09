import { Router } from 'express';
import {
    getAllBlogs,
    getSingleBlog,
    postBlog
} from '../controllers/blogControllers';

const blogsRouter = Router();

blogsRouter.get('/blogs', getAllBlogs);
blogsRouter.get('/blogs/:id', getSingleBlog);
blogsRouter.post('/blogs', postBlog);

export default blogsRouter;
