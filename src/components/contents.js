const email = "mariamawit.ashenafi2011@gmail.com"
// export const AboutMeList = ["An enthusiastic and skilled <span>computational biologist</span> with a strong background in bioinformatics and biotechnology. Adept at bridging the gap between computation and biology, offering a <span>unique blend of technical expertise</span> and biological insight.", "Experienced in full-stack development, data analysis, machine learning, data management, and computational biology, with a proven track record of <span>successful projects</span> in academic and industry settings. Proficient in Python, JavaScript, HTML5, CSS, and a range of developer tools.","Demonstrated <span>leadership</span> as a team leader and a <span>collaborative</span> approach in multidisciplinary environments. Fluent in Amharic, English, and French, with <span>excellent communication</span> and <span>problem-solving skills</span>.", "Seeking opportunities to leverage my expertise in bioinformatics, data management, and software development to contribute to innovative projects and drive advancements in computational biology."]
export const AboutMeList = [
    "I am a dedicated Bioinformatics Software Engineer with over seven years of experience at the intersection of biology, data science, and software development. My journey in the world of bioinformatics has been fueled by a passion for uncovering the intricate mechanisms of life through advanced statistical methodologies and innovative computational tools.",
    "With a strong foundation in programming languages such as Python, JavaScript and R, coupled with extensive experience in developing and implementing bioinformatics pipelines, I have contributed to research in various capacities. My expertise spans the analysis of large-scale multi-omics data, the development of sophisticated bioinformatics tools, and the execution of complex data analysis tasks. I am committed to translating complex biological data into actionable insights.", 
    "Throughout my career, I have thrived in collaborative environments, leading teams and projects that push the boundaries of our understanding of biological systems. My roles have taken me from the Ethiopian Biotechnology Institute to the University of Zurich, where I have developed a keen ability to adapt quickly, communicate effectively, and deliver results that advance scientific discovery.",
    "In this portfolio, you will find a showcase of my projects, skills, and achievements. From developing full-stack applications to contributing to large-scale research initiatives, each project highlights my dedication to excellence and innovation. I invite you to explore my work and see how my expertise can bring value to your projects and research endeavors.",
    "Thank you for visiting, and I look forward to connecting with you!",
    "Feel free to explore the sections on my portfolio to learn more about my projects, skills, and professional journey. Let's push the boundaries of science and technology together!"
]
const recommend1 = "Mariamawit showed great work ethic. She is diligent, responsive, organized, responsibile and takes initiatives. She adapted quickly to a new profession and a new enviornment, while demonstrating integrity. She was available to listen to others, she was able to maintain an effective relationship with her students and their parents. Her teamwork and effective communication were appreciated by her colleagues."
const author1 = 'Jean-Pierre Pasquiou, Headmaster, LGM'
const recommend2 = "Ms. Ashenafi integrated into the team quickly, and the partners praised her professionalism. During her mission, she has demonstrated rigor and autonomy, this led me to entrust the management of this project to her within few weeks. And I was pleased with the result. I recommend her ability to absorb and implement new knowledge in a short period of time."
const author2 = 'Nicolas Condom, CEO, Ecofilae'
const recommend3 = recommend2
const author3 = author2
export const recommendations = [
    {
        author: author1,
        message: recommend1
    },
    {
        author: author2,
        message: recommend2
    },
    {
        author: author3,
        message: recommend3
    }
]
export const AboutMePageContent = AboutMeList.join("<br/>")
const experience0={
    position: 'Coding Challenge',
    skills: ['HTML5', 'CSS', 'React.js', 'Express.js', 'TypeScript', 'MongoDB', 'Docker'],
    company: '',
    date: '2024',
    description: 'Web application : for the managment of songs. <br/><a class="projecLink" href="https://github.com/Menigedegna/SongViewer" target="_blank" rel="noreferrer">Front End Code</a> ; <a class="projecLink" href="https://github.com/Menigedegna/SongsServer" target="_blank" rel="noreferrer">Back End Code</a>',
    exLink: 'https://songviewer.netlify.app/',
}
const experience1={
    position: 'Coding Challenge',
    skills: ['HTML5', 'CSS', 'React.js','Django'],
    company: '',
    date: '2023',
    description: 'Web application : for the management of soccer players. <br/><a class="projecLink" href="https://github.com/Menigedegna/Football_Players" target="_blank" rel="noreferrer">Front End Code</a> ; <a class="projecLink" href="https://github.com/Menigedegna/Football_Players_Backend" target="_blank" rel="noreferrer">Back End Code</a>',
    exLink: 'https://menigedegna.github.io/Football_Players/'

}
const experience2={
    position: 'Research Project',
    skills: ['PYTHON'],
    company: 'University of Zurich',
    date: '2014-18',
    description: 'Software plugin : automated microscopy image processing',
    exLink: 'https://www.researchgate.net/publication/320533094_Automated_3D_gene_position_analysis_using_a_customized_Imaris_plugin_XTFISHInsideNucleus'

}

const experience3={
    position: 'Side Project',
    skills: ['PYTHON'],
    company: '',
    date: '2022',
    description: 'Desktop application : crossing turtle game',
    exLink: 'https://github.com/Menigedegna/Turtle_Crossing_Game'

}
const experience4={
    position: 'Side Project',
    skills: ['PYTHON'],
    company: '',
    date: '2022',
    description: 'Desktop application: pong-game',
    exLink: 'https://github.com/Menigedegna/Pong_Game/'

}
const experience5={
    position: 'Side Project',
    skills: ['PYTHON'],
    company: '',
    date: '2022',
    description: 'Desktop application: snake-game',
    exLink: 'https://github.com/Menigedegna/Snake_Game/'

}

export const experienceArray = [experience0, experience1, experience2, experience3, experience4, experience5];
export const ContactTel = "(+251) 98-333-0001";
export const ContactEmail= email;
export const ContactLinkedin="https://www.linkedin.com/in/mariamawit-ashenafi/";
export const ContactGit="https://github.com/Menigedegna/";
export const PersDev = [
    {name: 'Integrity', value: 95},
    {name: 'Work ethic', value: 90},
    {name: 'Problem-solving', value: 80},
    {name: 'Active listening', value: 80},
    {name: 'Effective communication', value: 75},
    {name: 'Adaptability', value: 75},
    {name: 'Organization', value: 70},
    {name: 'Conflict resolution', value: 65},
    {name: 'Leadership', value: 65},
];
export const ComSkill = [
    {name: 'Python: Flask, Django', value: 95},
    // eslint-disable-next-line
    {name: "JavaScript: React, Node.js", value: 90},
    {name: 'HTML5', value: 90},
    {name: 'CSS: Bootstrap', value: 85},
    {name: 'Git / Github', value: 70},
    {name: 'Bash', value: 60},
    {name: 'R', value: 60},
    {name: 'MySQL, PostgreSQL, MongoDB', value: 50}
];

export const LanguageSkill = [
    {name: 'English', value: 90},
    {name: 'French', value: 85},
    {name: 'Amharic', value: 90}
]