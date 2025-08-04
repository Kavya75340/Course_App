const dummyCourses = [
    {
        id: 1122,
        author: "CodeWithHarry",
        title: "Python Full Course (Hindi)",
        description: [
            "Learn Python syntax, loops, functions, and modules.",
            "Build mini projects like calculators and games.",
            "Work with pandas and matplotlib for data tasks.",
            "Automate workflows using Python scripting.",
        ],
        imageLink: "https://img.youtube.com/vi/J0OvDNmAWNw/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=J0OvDNmAWNw",
        rating: 4.8,
        likes: 3213,
        comments: [
            {
                id: 1,
                userName: "Amit Sharma",
                commentText: "Very easy to follow, thanks Harry bhai!",
            },
            {
                id: 2,
                userName: "Priya Singh",
                commentText: "Loved the projects section!",
            },
        ],
        tags: ["Python", "Programming", "Automation"],
    },
    {
        id: 2,
        author: "Apna College",
        title: "DSA with C++ (Hindi)",
        description: [
            "Cover arrays, stacks, queues, linked lists.",
            "Learn sorting & searching algorithms deeply.",
            "Practice placement-level coding questions.",
            "Solve interview-style problems with explanation.",
        ],
        imageLink: "https://img.youtube.com/vi/WQoB2z67hvY/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=WQoB2z67hvY",
        rating: 4.9,
        likes: 6463,
        comments: [
            {
                id: 1,
                userName: "Ravi Verma",
                commentText: "Helped me crack my campus interview!",
            },
            {
                id: 2,
                userName: "Sneha Patel",
                commentText: "Clear explanations and examples.",
            },
        ],
        tags: ["DSA", "C++", "Placement Prep"],
    },
    {
        id: 3,
        author: "Krish Naik",
        title: "Machine Learning Full Course (Hindi)",
        description: [
            "Learn regression, classification, clustering.",
            "Hands-on with real datasets and scikit-learn.",
            "Feature engineering & model evaluation.",
            "Build ML projects like predictive models.",
        ],
        imageLink: "https://img.youtube.com/vi/JxgmHe2NyeY/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=JxgmHe2NyeY",
        rating: 4.7,
        likes: 2135,
        comments: [
            {
                id: 1,
                userName: "Manish Kumar",
                commentText: "Best ML Hindi tutorial!",
            },
            {
                id: 2,
                userName: "Anjali Gupta",
                commentText: "Easy to understand and practical.",
            },
        ],
        tags: ["Machine Learning", "Python", "ML Projects"],
    },
    {
        id: 5,
        author: "CodeWithHarry",
        title: "HTML, CSS & JS Crash Course",
        description: [
            "Learn HTML structure and CSS styling.",
            "Add interactivity with JavaScript.",
            "Build responsive layouts with Flexbox/Grid.",
            "Create a real landing page project.",
        ],
        imageLink: "https://img.youtube.com/vi/UrsmFxEIp5k/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=UrsmFxEIp5k",
        rating: 4.9,
        likes: 651,
        comments: [
            {
                id: 1,
                userName: "Deepak Mehta",
                commentText: "Now I can build my own website!",
            },
            {
                id: 2,
                userName: "Neha Sharma",
                commentText: "Very beginner friendly.",
            },
        ],
        tags: ["Web Development", "JavaScript", "Frontend"],
    },
    {
        id: 6,
        author: "Apna College",
        title: "Python for Beginners",
        description:
            "• Basics of Python: variables, loops, functions.\n" +
            "• Learn data types and conditionals.\n" +
            "• Mini-projects for hands-on practice.\n" +
            "• Perfect start for absolute beginners.",
        imageLink: "https://img.youtube.com/vi/m67-bOpOoPU/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=m67-bOpOoPU",
        rating: 4.8,
        likes: 516,
        comments: [
            {
                id: 1,
                userName: "Vikas Yadav",
                commentText: "Apna College never disappoints!",
            },
            {
                id: 2,
                userName: "Meena Kapoor",
                commentText: "Short and clear.",
            },
        ],
        tags: ["Python", "Programming", "Beginner"],
    },
    {
        id: 7,
        author: "Krish Naik",
        title: "DSA Complete Tutorial",
        description:
            "• Learn common data structures in depth.\n" +
            "• Solve interview problems step-by-step.\n" +
            "• Understand complexity and optimizations.\n" +
            "• Practice with multiple coding examples.",
        imageLink: "https://img.youtube.com/vi/rZ41y93P2Qo/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=rZ41y93P2Qo",
        rating: 4.7,
        likes: 162,
        comments: [
            {
                id: 1,
                userName: "Shivam Mishra",
                commentText: "Clear and concise explanations.",
            },
            {
                id: 2,
                userName: "Alok Pandey",
                commentText: "Helped in my coding interviews.",
            },
        ],
        tags: ["DSA", "Algorithms", "Placement Prep"],
    },
    {
        id: 8,
        author: "Neso Academy",
        title: "Operating System Full Course",
        description:
            "• Understand processes, threads, and scheduling.\n" +
            "• Learn memory management techniques.\n" +
            "• Study file systems and I/O systems.\n" +
            "• Includes GATE/placement practice.",
        imageLink: "https://img.youtube.com/vi/6ZrO90AI0c8/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=6ZrO90AI0c8",
        rating: 4.9,
        likes: 135,
        comments: [
            {
                id: 1,
                userName: "Aarav Joshi",
                commentText: "Best OS tutorial ever.",
            },
            {
                id: 2,
                userName: "Sanya Bhat",
                commentText: "Very detailed explanation.",
            },
        ],
        tags: ["Operating System", "Core CS", "GATE Prep"],
    },
    {
        id: 9,
        author: "Geeky Shows",
        title: "C Programming Tutorial",
        description:
            "• Learn C from scratch: syntax to advanced.\n" +
            "• Pointers, arrays, and memory management.\n" +
            "• Structures and file handling.\n" +
            "• Build strong programming fundamentals.",
        imageLink: "https://img.youtube.com/vi/irqbmMNs2Bo/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=irqbmMNs2Bo",
        rating: 4.6,
        likes: 622,
        comments: [
            {
                id: 1,
                userName: "Rohit Agarwal",
                commentText: "Perfect for beginners.",
            },
            {
                id: 2,
                userName: "Pooja Rani",
                commentText: "Very thorough explanation.",
            },
        ],
        tags: ["C Programming", "Basics", "Competitive Programming"],
    },
    {
        id: 10,
        author: "Technical Suneja",
        title: "Java Full Course (Hindi)",
        description:
            "• Learn Java from basics to advanced.\n" +
            "• OOP concepts with real examples.\n" +
            "• Build console and GUI-based applications.\n" +
            "• Covers JDBC and file handling.",
        imageLink: "https://img.youtube.com/vi/hBh_CC5y8-s/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=hBh_CC5y8-s",
        rating: 4.8,
        likes: 664,
        comments: [
            {
                id: 1,
                userName: "Rajat Kapoor",
                commentText: "Java made simple!",
            },
            {
                id: 2,
                userName: "Nidhi Verma",
                commentText: "Loved the OOP section.",
            },
        ],
        tags: ["Java", "OOP", "Backend Development"],
    },
    {
        id: 11,
        author: "CodeWithHarry",
        title: "React JS Full Course (Hindi)",
        description:
            "• Learn React basics: components, props, state.\n" +
            "• Build reusable UI with JSX.\n" +
            "• Learn hooks like useState and useEffect.\n" +
            "• Create a full project using API integration.",
        imageLink: "https://img.youtube.com/vi/4UZrsTqkcW4/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v/4UZrsTqkcW4",
        rating: 4.9,
        likes: 6161,
        comments: [
            {
                id: 1,
                userName: "Aditya Kumar",
                commentText: "Great React introduction!",
            },
            {
                id: 2,
                userName: "Snehal Sharma",
                commentText: "The project building was fun.",
            },
        ],
        tags: ["React", "JavaScript", "Frontend"],
    },
    {
        id: 12,
        author: "Apna College",
        title: "SQL & Database Management",
        description:
            "• Learn SQL queries from scratch.\n" +
            "• Master SELECT, JOIN, GROUP BY.\n" +
            "• Build and manage relational databases.\n" +
            "• Understand indexes and optimization.",
        imageLink: "https://img.youtube.com/vi/hlGoQC332VM/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=hlGoQC332VM",
        rating: 4.8,
        likes: 161,
        comments: [
            {
                id: 1,
                userName: "Rahul Sinha",
                commentText: "Now I can write complex queries!",
            },
            {
                id: 2,
                userName: "Megha Singh",
                commentText: "Easy and well explained.",
            },
        ],
        tags: ["SQL", "Database", "Backend"],
    },
    {
        id: 13,
        author: "Gate Smashers",
        title: "Computer Networks Full Course",
        description:
            "• Learn OSI and TCP/IP models.\n" +
            "• Understand DNS, HTTP, FTP protocols.\n" +
            "• Network security basics.\n" +
            "• GATE & placement oriented content.",
        imageLink: "https://img.youtube.com/vi/IPvYjXCsTg8/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=IPvYjXCsTg8",
        rating: 4.7,
        likes: 216,
        comments: [
            {
                id: 1,
                userName: "Vikram Singh",
                commentText: "Excellent for GATE prep.",
            },
            {
                id: 2,
                userName: "Pallavi Joshi",
                commentText: "Very clear networking concepts.",
            },
        ],
        tags: ["Networking", "Protocols", "GATE Prep"],
    },
    {
        id: 14,
        author: "Love Babbar",
        title: "JavaScript for Beginners",
        description:
            "• Learn variables, loops, and functions.\n" +
            "• DOM manipulation basics.\n" +
            "• Event handling and forms.\n" +
            "• Build interactive projects.",
        imageLink: "https://img.youtube.com/vi/ER9SspLe4Hg/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=ER9SspLe4Hg",
        rating: 4.8,
        likes: 156,
        comments: [
            {
                id: 1,
                userName: "Aman Yadav",
                commentText: "Now JS feels easy!",
            },
            {
                id: 2,
                userName: "Priyanka Das",
                commentText: "Best crash course for beginners.",
            },
        ],
        tags: ["JavaScript", "Web Development", "Frontend"],
    },
    {
        id: 16,
        author: "CodeWithHarry",
        title: "Node.js and Express.js Crash Course",
        description:
            "• Learn Node.js basics and server setup.\n" +
            "• Use Express.js for building REST APIs.\n" +
            "• Handle requests, responses, and middleware.\n" +
            "• Connect Node.js with MongoDB.",
        imageLink: "https://img.youtube.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        rating: 4.9,
        likes: 556,
        comments: [
            {
                id: 1,
                userName: "Harshit Sharma",
                commentText: "Simple and effective tutorial.",
            },
            {
                id: 2,
                userName: "Kiran Patel",
                commentText: "Loved the MongoDB integration part.",
            },
        ],
        tags: ["Node.js", "Express.js", "Backend"],
    },
    {
        id: 17,
        author: "Gate Smashers",
        title: "Database Management Systems (DBMS)",
        description:
            "• Understand ER diagrams and relational models.\n" +
            "• Learn SQL queries and constraints.\n" +
            "• Covers normalization and transactions.\n" +
            "• Useful for GATE and university exams.",
        imageLink: "https://img.youtube.com/vi/4Z9KEBexzcM/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=4Z9KEBexzcM",
        rating: 4.8,
        likes: 199,
        comments: [
            {
                id: 1,
                userName: "Aakash Verma",
                commentText: "Best DBMS crash course.",
            },
            {
                id: 2,
                userName: "Neelam Singh",
                commentText: "Helped in my GATE prep.",
            },
        ],
        tags: ["DBMS", "Database", "SQL"],
    },
    {
        id: 18,
        author: "Apna College",
        title: "Java Placement Course",
        description:
            "• Learn Java syntax and OOP concepts.\n" +
            "• Master exception handling and collections.\n" +
            "• Work with JDBC for database connectivity.\n" +
            "• Placement-focused content with coding questions.",
        imageLink: "https://img.youtube.com/vi/UmnCZ7-9yDY/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=UmnCZ7-9yDY",
        rating: 4.9,
        likes: 50,
        comments: [
            {
                id: 1,
                userName: "Sumit Kumar",
                commentText: "Very good for placements.",
            },
            {
                id: 2,
                userName: "Ananya Gupta",
                commentText: "OOP was explained perfectly.",
            },
        ],
        tags: ["Java", "Placement", "OOP"],
    },
    {
        id: 19,
        author: "Love Babbar",
        title: "C++ Full Course for Beginners",
        description:
            "• Learn C++ basics: syntax, loops, functions.\n" +
            "• OOP concepts: classes, inheritance.\n" +
            "• Solve competitive programming problems.\n" +
            "• Covers STL for fast coding.",
        imageLink: "https://img.youtube.com/vi/z9bZufPHFLU/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=z9bZufPHFLU",
        rating: 4.7,
        likes: 155,
        comments: [
            {
                id: 1,
                userName: "Rajesh Yadav",
                commentText: "Perfect C++ tutorial.",
            },
            {
                id: 2,
                userName: "Simran Kaur",
                commentText: "Great STL coverage.",
            },
        ],
        tags: ["C++", "OOP", "Competitive Programming"],
    },
    {
        id: 21,
        author: "Apna College",
        title: "Full Stack Web Development Roadmap",
        description:
            "• Learn HTML, CSS, and JavaScript fundamentals.\n" +
            "• Build backend with Node.js & Express.\n" +
            "• Work with MongoDB and MySQL.\n" +
            "• Deploy full stack apps on cloud.",
        imageLink: "https://img.youtube.com/vi/nu_pCVPKzTk/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
        rating: 4.9,
        likes: 516,
        comments: [
            {
                id: 1,
                userName: "Vikas Kumar",
                commentText: "Covers everything from basics to deployment.",
            },
            {
                id: 2,
                userName: "Priya Singh",
                commentText: "Very useful for job preparation.",
            },
        ],
        tags: ["Full Stack", "Web Development", "JavaScript"],
    },
    {
        id: 22,
        author: "Love Babbar",
        title: "DSA Placement Series",
        description:
            "• Covers all important data structures.\n" +
            "• Step-by-step problem solving.\n" +
            "• Interview-focused approach.\n" +
            "• Practice questions with solutions.",
        imageLink: "https://img.youtube.com/vi/t6zLJOCVqD0/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=t6zLJOCVqD0",
        rating: 4.8,
        likes: 613,
        comments: [
            {
                id: 1,
                userName: "Rohit Verma",
                commentText: "Helped me crack my interview.",
            },
            {
                id: 2,
                userName: "Sneha Patel",
                commentText: "Great explanation of recursion.",
            },
        ],
        tags: ["DSA", "Placement", "Coding"],
    },
    {
        id: 23,
        author: "CodeWithHarry",
        title: "Python for Data Science",
        description:
            "• Learn Python libraries for data analysis.\n" +
            "• Work with Pandas, NumPy, and Matplotlib.\n" +
            "• Clean, process, and visualize datasets.\n" +
            "• Build small data science projects.",
        imageLink: "https://img.youtube.com/vi/ua-CiDNNj30/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=ua-CiDNNj30",
        rating: 4.9,
        likes: 543,
        comments: [
            {
                id: 1,
                userName: "Aditya Sharma",
                commentText: "Loved the visualization examples.",
            },
            {
                id: 2,
                userName: "Meena Gupta",
                commentText: "Pandas section was very clear.",
            },
        ],
        tags: ["Python", "Data Science", "Pandas"],
    },
    {
        id: 24,
        author: "Apna College",
        title: "React.js Complete Course",
        description:
            "• Learn JSX and React components.\n" +
            "• Use hooks like useState and useEffect.\n" +
            "• Build dynamic SPAs.\n" +
            "• Deploy React projects to live server.",
        imageLink: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        rating: 4.9,
        likes: 523,
        comments: [
            {
                id: 1,
                userName: "Ramesh Kumar",
                commentText: "Best React tutorial I have seen.",
            },
            {
                id: 2,
                userName: "Shalini Gupta",
                commentText: "Hooks explained clearly.",
            },
        ],
        tags: ["React", "Frontend", "JavaScript"],
    },
    {
        id: 26,
        author: "Telusko",
        title: "Java Full Course",
        description:
            "• Learn Java basics: variables, loops, and arrays.\n" +
            "• Object-Oriented Programming with classes & objects.\n" +
            "• Exception handling & file I/O.\n" +
            "• JDBC for database connectivity.",
        imageLink: "https://img.youtube.com/vi/UmnCZ7-9yDY/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=UmnCZ7-9yDY",
        rating: 4.9,
        likes: 122,
        comments: [
            {
                id: 1,
                userName: "Mohit Sharma",
                commentText: "Great for beginners in Java.",
            },
            {
                id: 2,
                userName: "Sonia Kapoor",
                commentText: "Loved the JDBC section.",
            },
        ],
        tags: ["Java", "OOP", "Backend"],
    },
    {
        id: 28,
        author: "CodeWithHarry",
        title: "Node.js Tutorial",
        description:
            "• Learn Node.js fundamentals.\n" +
            "• Work with Express.js framework.\n" +
            "• Connect with MongoDB.\n" +
            "• Build REST APIs from scratch.",
        imageLink: "https://img.youtube.com/vi/BLl32FvcdVM/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=BLl32FvcdVM",
        rating: 4.9,
        likes: 522,
        comments: [
            {
                id: 1,
                userName: "Vivek Gupta",
                commentText: "Best Node.js course for beginners.",
            },
            {
                id: 2,
                userName: "Neha Sharma",
                commentText: "API building was explained well.",
            },
        ],
        tags: ["Node.js", "Backend", "JavaScript"],
    },
    {
        id: 29,
        author: "Apna College",
        title: "SQL Full Course",
        description:
            "• Learn SQL basics: SELECT, INSERT, UPDATE.\n" +
            "• Work with joins and subqueries.\n" +
            "• Database design principles.\n" +
            "• Real-world query optimization tips.",
        imageLink: "https://img.youtube.com/vi/hlGoQC332VM/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=hlGoQC332VM",
        rating: 4.9,
        likes: 441,
        comments: [
            {
                id: 1,
                userName: "Rajat Singh",
                commentText: "Joins explained perfectly.",
            },
            {
                id: 2,
                userName: "Shreya Jain",
                commentText: "Loved the optimization tricks.",
            },
        ],
        tags: ["SQL", "Databases", "Backend"],
    },
    {
        id: 30,
        author: "CodeHelp - Love Babbar",
        title: "System Design Basics",
        description:
            "• Learn scalability principles.\n" +
            "• Understand load balancing & caching.\n" +
            "• Database sharding & replication.\n" +
            "• Great for SDE interviews.",
        imageLink: "https://img.youtube.com/vi/xpDnVSmNFX0/hqdefault.jpg",
        videoLink: "https://www.youtube.com/watch?v=xpDnVSmNFX0",
        rating: 4.8,
        likes: 335,
        comments: [
            {
                id: 1,
                userName: "Harshit Kumar",
                commentText: "Very clear and practical.",
            },
            {
                id: 2,
                userName: "Ananya Sharma",
                commentText: "Helped in my interview prep.",
            },
        ],
        tags: ["System Design", "Backend", "Architecture"],
    },
];
export default dummyCourses;
