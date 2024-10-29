import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Sebastian Orlando Lopez",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "RogerRoger",
        desc: (
            <>
                <strong>Full stack</strong> responsive chat app using <strong>sockets</strong> for <strong>real time communication</strong>
                <br /><br />
                <strong>Group chats & file messaging are also featured</strong> amongst other features including emojis
                <br /><br />
                <strong>Authentication handled by JWTs</strong> and efficient <strong>data storage</strong> using <strong>MongoDB</strong>
                <br /><br />
                Seamless <strong>state management</strong> and smooth <strong>API interactions</strong>
            </>
        ),
        image: "",
        live: false,
        technologies: ["React", "Tailwind", "JWT", "Socket.io", "Node.js", "Express", "MongoDB", "Zustand", "Axios"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/sebastianorlando"
    },
    {
        title: "SIREN",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/sebastianorlando"
    },
    {
        title: "Angular Project",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/sebastianorlando"
    },
    {
        title: ".NET project",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/sebastianorlando"
    },
    {
        title: "Python Project",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/sebastianorlando"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Tailwind CSS", "Material UI"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "AWS"]
    }
]
const socialLinks = [
    { link: "https://github.com/sebastianorlando", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/sebastianorlando772", icon: IconBrandLinkedin }
    
];


const ExperienceInfo = [
    {
        role: "Software Developer",
        company: "ICONIC Lakeland",
        date: "Feb 2024 - May 2024",
        desc: (
            <>
                Developed and implemented an automation tool using <strong>Python</strong> and <strong>Jupyter Notebook</strong>, fully <strong>automating</strong> the client's social media postings
                <br /><br />
                Integrated <strong>OpenAI's API</strong> for dynamic content creation, <strong>increasing engagement</strong> by generating tailored posts
                <br /><br />
                <strong>Reduced</strong> manual <strong>social media management time by over 80%</strong>, allowing the business to focus on core operations
                <br /><br />
                Provided comprehensive <strong>documentation</strong>, allowing the client to manage their automation processes
            </>
        ),
        skills: ["Python, Jupyter Notebook, APIs, OpenAI, Automation"]
    },
    {
        role: "Developer Trainee",
        company: "FocusKPI",
        date: "May 2024 - Aug 2024",
        desc: (
            <>
                Assisted in the <strong>redesign, development, and maintenance</strong> of a new management service <strong>improving</strong> its effective <strong>implementation and usability</strong>
                <br /><br />
                Developed <strong>detailed reports</strong> and advised team members on improvements to <strong>UX and site features</strong> resulting in <strong>higher levels</strong> of <strong>user engagement</strong>
                <br /><br />
                Utilized FIGMA to visualize additional services that would be made available to users to increase <strong>productivity and retention</strong>
            </>
        ),
        skills: ["Python", "MySQL", "JSON", "RESTful APIs", "SaaS"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "java",
    "react",
    "angular",
    "html5",
    "css3",
    "mongodb",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "firebase",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };