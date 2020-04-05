const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/health', (req, res) => res.send('Server Healthy'));

router.post('/posts', controllers.createPost);
router.get('/posts', controllers.getAllPosts);
router.get('/posts/:postId', controllers.getPostById);
router.put('/posts/:postId', controllers.updatePost);
router.delete('/posts/:postId', controllers.deletePost);

module.exports = router;
