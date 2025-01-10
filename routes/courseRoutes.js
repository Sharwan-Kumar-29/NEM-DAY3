const express = require('express');
const { getCourses, getCourse, updateCourseDetails, getCourseSummary } = require('../controllers/courseController');

const router = express.Router();

// Routes
router.get('/', getCourses);
router.get('/:id', getCourse);
router.put('/:id', updateCourseDetails);
router.get('/summary', getCourseSummary);

module.exports = router;
