const courses = [
    { id: 1, title: "JavaScript Basics", description: "Learn the basics of JavaScript", level: "beginner", available: true, enrollments: 150, duration: 10 },
    { id: 2, title: "Advanced Node.js", description: "Deep dive into Node.js", level: "advanced", available: false, enrollments: 80, duration: 15 },
    // Add more courses as needed
];

const getAllCourses = () => courses;

const getCourseById = (id) => courses.find(course => course.id === id);

const updateCourse = (id, updates) => {
    const courseIndex = courses.findIndex(course => course.id === id);
    if (courseIndex === -1) return null;

    courses[courseIndex] = { ...courses[courseIndex], ...updates };
    return courses[courseIndex];
};

module.exports = { courses, getAllCourses, getCourseById, updateCourse };
