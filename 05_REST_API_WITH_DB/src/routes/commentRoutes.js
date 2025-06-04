import { createComment, getComment } from "../controllers/commentController.js";

export function commentRoutes(app){
    app.get('/comments',getComment);
    app.post('/comments',createComment)
    app.put('/comment/:id',updateComment);
}



// index.js -> commentRoutes ->