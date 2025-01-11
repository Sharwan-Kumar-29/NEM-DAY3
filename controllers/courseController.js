const { getAllCourses, getCourseById} = require('../models/courseModel');


// Paginate courses
const paginateCourses = (courses, page = 1, limit = 3) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
        total: courses.length,
        page: +page,
        limit: +limit,
        data: courses.slice(startIndex, endIndex),
    };
};

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
//-----------------------------------------------------------------------------
//update the course

const updateCourse = (id, updates) => {
    const courseIndex = courses.findIndex(course => course.id === id);
    if (courseIndex === -1) return null;

    courses[courseIndex] = { ...courses[courseIndex], ...updates };
    return courses[courseIndex];
};

// Validate course fields
const validateCourse = (course) => {
    if (!course.title || course.title.length < 3) return "Title must be at least 3 characters long.";
    if (!course.description || course.description.length < 10) return "Description must be at least 10 characters long.";
    if (!course.level) return "Level is required.";
    return null;
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

//------------------------------------------------

// Aggregate course summary
const aggregateSummary = () => {
    const courses = getAllCourses;
    console.log("Courses fetched:", courses);  // Log the courses here

    if (!courses || courses.length === 0) {
        return { error: 'No courses available to generate summary.' };  // Handle case if no courses are available
    }

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

// Get course summary
const getCourseSummary = (req, res) => {
    const summary = aggregateSummary();
    res.json(summary);
};

module.exports = { getCourses, getCourse, updateCourseDetails, getCourseSummary };
