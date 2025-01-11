const courses = [
    { id: 1, title: "JavaScript Basics", description: "Learn the basics of JavaScript", level: "beginner", available: true, enrollments: 150, duration: 10 },
    { id: 2, title: "Advanced Node.js", description: "Deep dive into Node.js", level: "advanced", available: false, enrollments: 80, duration: 15 },
    { id: 3, title: "React for Beginners", description: "Introduction to building dynamic web apps with React", level: "beginner", available: true, enrollments: 200, duration: 12 },
    { id: 4, title: "Python for Data Science", description: "Learn Python and its applications in data analysis", level: "intermediate", available: true, enrollments: 300, duration: 20 },
    { id: 5, title: "Machine Learning Essentials", description: "Explore the fundamentals of machine learning", level: "intermediate", available: true, enrollments: 250, duration: 25 },
    { id: 6, title: "CSS Mastery", description: "Master modern CSS techniques for responsive design", level: "beginner", available: false, enrollments: 120, duration: 8 },
    { id: 7, title: "Full-Stack Web Development", description: "Learn to build full-stack applications with MERN", level: "advanced", available: true, enrollments: 180, duration: 30 },
    { id: 8, title: "DevOps Fundamentals", description: "Learn the essentials of DevOps and CI/CD pipelines", level: "intermediate", available: false, enrollments: 90, duration: 18 },
    { id: 9, title: "Database Management with SQL", description: "Learn SQL for efficient database management", level: "beginner", available: true, enrollments: 270, duration: 14 },
    { id: 10, title: "Kubernetes for Developers", description: "Understand container orchestration with Kubernetes", level: "advanced", available: true, enrollments: 110, duration: 20 },
    { id: 11, title: "Introduction to Cybersecurity", description: "Learn the basics of securing applications and networks", level: "beginner", available: true, enrollments: 160, duration: 10 },
    { id: 12, title: "AI and Deep Learning", description: "Dive into AI concepts and neural networks", level: "advanced", available: false, enrollments: 140, duration: 28 },
    { id: 13, title: "Frontend Development with Vue.js", description: "Learn to build elegant UIs with Vue.js", level: "intermediate", available: true, enrollments: 130, duration: 15 },
    { id: 14, title: "Cloud Computing with AWS", description: "Explore cloud solutions using Amazon Web Services", level: "intermediate", available: false, enrollments: 100, duration: 22 },
    { id: 15, title: "C# for Game Development", description: "Learn C# and Unity for creating games", level: "beginner", available: true, enrollments: 140, duration: 12 }
];


const getAllCourses = () => courses;

const getCourseById = (id) => courses.find(course => course.id === id);



module.exports = { courses, getAllCourses, getCourseById };
