const { getAllCourses, getCourseById, updateCourse } = require('../models/courseModel');
const { validateCourse, paginateCourses, aggregateSummary } = require('../services/courseService');

// Get all courses with filtering and pagination
const getCourses = (req, res) => {
    const { available, title, description, level, page, limit } = req.query;

    let filteredCourses = getAllCourses();

    if (available) {
        filteredCourses = filteredCourses.filter(course => course.available.toString() === available);
    }
    if (title) {
        filteredCourses = filteredCourses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (description) {
        filteredCourses = filteredCourses.filter(course => course.description.toLowerCase().includes(description.toLowerCase()));
    }
    if (level) {
        filteredCourses = filteredCourses.filter(course => course.level.toLowerCase() === level.toLowerCase());
    }

    const paginatedCourses = paginateCourses(filteredCourses, page, limit);
    res.json(paginatedCourses);
};

// Get a single course by ID
const getCourse = (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const course = getCourseById(courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
};

// Update a course with validation
const updateCourseDetails = (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const error = validateCourse(req.body);

    if (error) {
        return res.status(400).json({ error });
    }

    const updatedCourse = updateCourse(courseId, req.body);
    if (!updatedCourse) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json(updatedCourse);
};

// Get course summary
const getCourseSummary = (req, res) => {
    const summary = aggregateSummary();
    res.json(summary);
};

module.exports = { getCourses, getCourse, updateCourseDetails, getCourseSummary };
