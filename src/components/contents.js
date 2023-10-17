const email = "mariamawit.ashenafi2011@gmail.com"
export const AboutMePageContent = `I am a full-stack web developer; passionate about creating impactful and user-friendly. <br/>Make sure you have a look at my latest projects on the web galery page.
<br/>Remotely available.`;
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
const experience1={
    position: 'Full-Stack Developer',
    skills: ['HTML5', 'CSS', 'FLASK'],
    company: 'Silver Lining',
    date: '2023',
    description: 'Developed web application to inhance visibility of startup.',
    exLink: 'https://silverliningserv.com/'

}
const experience2={
    position: 'Computational Biologist',
    skills: ['Python'],
    company: 'University of Zurich',
    date: '2014-18',
    description: 'Developed software plugin to automate microscopy image processing.',
    exLink: 'https://www.researchgate.net/publication/320533094_Automated_3D_gene_position_analysis_using_a_customized_Imaris_plugin_XTFISHInsideNucleus'

}

const experience3={
    position: 'Side Project',
    skills: ['HTML5', 'CSS', 'FLASK'],
    company: '',
    date: '2022-23',
    description: 'Developed web application to store and manage passwords.',
    exLink: 'https://silverliningserv.com/'

}
const experience4={
    position: 'Side Project',
    skills: ['HTML5', 'CSS', 'Django'],
    company: '',
    date: '2020-21',
    description: 'Developed blog application.',
    exLink: 'https://silverliningserv.com/'

}
const experience5={
    position: 'Computational Biologist',
    skills: ['R'],
    company: 'Ecofilae',
    date: '2013',
    description: 'Developed web application to store and manage passwords.',
    exLink: 'https://silverliningserv.com/'

}

export const experienceArray = [experience1, experience2, experience3, experience4, experience5];
export const ContactTel = "+251983330001";
export const ContactEmail= email;
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
    {name: "JavaScript: React, Node.js, Mocha", value: 90},
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