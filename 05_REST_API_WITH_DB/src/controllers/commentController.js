import { comment as Comment } from '../modal/commentSchema.js';

export async function getComment(req, res) {
    try {
        let allcomments = await Comment.find();
        return res.status(200).json({
            message: "fetched all comments",
            data: allcomments
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            success: false
        });
    }
}

export async function createComment(req, res) {
    try {
        const { userName, comment } = req.body;
        let newComment = await Comment.create({ userName, comment });
        return res.status(201).json({
            message: "created successfully",
            data: newComment
        });
    } catch (error) {
        return res.status(400).json({
            message: "error",
            success: false
        });
    }
}


// index.js -> commentsRoutes(app) -> routes (modal) -> controller(db-query) -> changes in db.