import portfolioImage from '../assets/images/work-data-portfolio.png';
import fullStackImage from '../assets/images/work-data-fullstack.png';
import frontEndImage from '../assets/images/work-data-frontend.png';
import resumeManager from '../assets/images/work-data-resume-manager.png';

export const workData = [
    {
        category: 'Personal Work',
        projectName: 'Portfolio Website',
        context: 'A personal project to showcase my skills and personality.',
        description:
            'A portfolio website built with React, Bootstrap, and Webpack. The site highlights my projects, skills, and provides an interactive contact form using EmailJS.',
        link: '',
        technology: [
            'React',
            'Framer Motion',
            'Bootstrap',
            'Chart.js',
            'EmailJS',
            'Webpack',
            'Babel',
        ],
        comment:[
            'React was used for building the interactive user interface, allowing for a dynamic and responsive site. ' ,
            'Framer Motion helped me add animations and smooth transitions to improve the user experience. ' ,
            'Bootstrap was employed to quickly create a responsive and clean layout with its grid system and pre-built components. ' ,
            'Chart.js enabled me to integrate interactive data visualizations into the site, enhancing the presentation of my skills. ' ,
            'EmailJS provided a simple solution for integrating a contact form to send emails directly from the site. ' ,
            'Webpack and Babel were used for bundling the application, optimizing performance, and ensuring compatibility with modern JavaScript syntax.',
        ],
        image: portfolioImage,
        date: 'Octobre 2024'
    },
    {
        category: 'Professional Work',
        projectName: 'Full-Stack Development Internship',
        context: 'Internship at RMS SYSMA, specializing in automotive, aerospace, defense, etc.',
        description:
            'For my final-year internship during my master’s program, i worked as part of a work-study program on several projects using C++ and Qt to develop software tools in various industries. ' +
            'These projects included signal processing software, data validation, and test management. ' +
            'The main software developed includes SignalLab, Qualisig, Marathon, and WinAts, each with specific features to analyze, process, and store test data.',
        link: 'https://www.rms-sysma.fr/',
        technology:
            'C++, Qt',
        comment:
            [
            'Manipulating files and managing memory in C++ for loading and saving signals.\n' ,
            'Creating interactive graphical interfaces in Qt for visualizing signals.\n' ,
            'Developing algorithms in C++ for detecting erroneous measurements and validating signals.\n' ,
            'Setting up processing tasks and exporting data via Qt with dialogues and configuration windows.\n' ,
            'Creating DLLs in C++ for data export and wrapper processing.\n' ,
            'Designing modular interfaces in Qt to improve user interaction.',
            ],
        image: fullStackImage,
        date: 'Septembre 2023 - Septembre 2024'
    },
    {
        category: 'Professional Work',
        projectName: 'Front-End Development Internship',
        context: 'A project aimed at designing and developing a user-friendly interface for converting HTML models to PDF, integrated into the company’s solution (Otrya Consulting).',
        description:
            'For my final-year internship during my bachelor’s program, i designed and developed an intuitive interface for converting HTML models into PDF files, using HTML, CSS, and JavaScript libraries. ' +
            'This functionality was integrated into other modules of the enterprise solution, ensuring seamless operation within the existing system.',
        link: 'https://otrya.com/',
        technology: [
            'HTML',
            'CSS',
            'JavaScript',
            'PDF libraries (e.g., jsPDF, html2pdf)',
        ],
        comment:[
            'The project involved creating a user-friendly interface for HTML to PDF conversion, where HTML and CSS were used to design the front-end layout. ' ,
            'JavaScript libraries like jsPDF or html2pdf were utilized to generate PDF files from HTML content. ' ,
            'Close collaboration with the technical team ensured that the interface was integrated smoothly into the broader company system, maintaining consistency and efficiency throughout.',
        ],
            image: frontEndImage,
        date: 'February 2022 - May 2022'
    },
    {
        category: 'Academic Work',
        projectName: 'CV Creation and Sharing Platform',
        context: 'A project aimed at providing a platform where users can easily create, modify, and share their CVs.',
        description:
            'The main objective of this collaborative project, involving two developers, was to build a platform that allows users to create, edit, and share their CVs easily. The platform was designed with Vue.js for the frontend, ' +
            'Spring Boot for the backend logic, and HSQLDB for managing user data. JUnit was used to ensure proper testing of the application, and JEE was integrated to enhance the features and robustness of the system.',
        link: '',
        technology: [
            'Vue.js',
            'Spring Boot',
            'HSQLDB',
            'JUnit',
            'JEE',
        ],
        comment:[
            'This project helped me to enhance my full-stack development skills, as I worked on both the front-end with Vue.js and the back-end with Spring Boot. ',
            'Vue.js was used for designing the platform’s architecture, ensuring a reactive and user-friendly experience. ' ,
            'Spring Boot handled the business logic and database interaction, making the system scalable and efficient. ' ,
            'HSQLDB was chosen to manage user data in a lightweight, fast database, while JUnit provided essential testing coverage. ' ,
            'Integration of JEE improved the robustness and extensibility of the platform.',
        ],
        date: 'May 2022 - June 2024',
        image: resumeManager,
    }

];
