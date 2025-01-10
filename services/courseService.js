// Validate course fields
const validateCourse = (course) => {
    if (!course.title || course.title.length < 3) return "Title must be at least 3 characters long.";
    if (!course.description || course.description.length < 10) return "Description must be at least 10 characters long.";
    if (!course.level) return "Level is required.";
    return null;
};

// Paginate courses
const paginateCourses = (courses, page = 1, limit = 10) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + +limit;

    return {
        total: courses.length,
        page: +page,
        limit: +limit,
        data: courses.slice(startIndex, endIndex),
    };
};

// Aggregate course summary
const aggregateSummary = () => {
    const courses = require('../models/courseModel').courses;

    const totalCourses = courses.length;
    const totalEnrollments = courses.reduce((sum, course) => sum + course.enrollments, 0);
    const averageEnrollments = (totalEnrollments / totalCourses).toFixed(2);
    const totalDuration = courses.reduce((sum, course) => sum + course.duration, 0);
    const averageDuration = (totalDuration / totalCourses).toFixed(2);

    return {
        totalCourses,
        averageEnrollments,
        averageDuration,
    };
};

module.exports = { validateCourse, paginateCourses, aggregateSummary };
