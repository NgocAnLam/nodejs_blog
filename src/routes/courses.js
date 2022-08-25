const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.post('/handle-form-action', CourseController.handleFormAction)
router.get('/create', CourseController.create)
router.post('/store', CourseController.stored)
router.get('/:id/edit', CourseController.edit)
router.put('/:id', CourseController.update)
router.delete('/:id', CourseController.delete)
router.delete('/:id/force', CourseController.forceDelete)
router.patch('/:id/restore', CourseController.restore)
router.get('/:slug', CourseController.show)

module.exports = router;
