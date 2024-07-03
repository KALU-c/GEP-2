import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '/about',
    },
    {
        text: 'Our Programs',
        link: '/programs',
    },
    {
        text: 'Testimonials',
        link: '/testimonial',
    },
    {
        text: 'Join The Program',
        link: '/register',
    }
];
const ServicesData = [
    {
        titleone: 'Spiritual',
        titletwo: 'Teachings',
        link: '/programs',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Community',
        titletwo: 'Support',
        link: '/programs',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Youth',
        titletwo: 'Engagement',
        link: '/programs',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Worship',
        titletwo: 'Sessions',
        link: '/programs',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Mentorship',
        titletwo: 'Programs',
        link: '/programs',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Family',
        titletwo: 'Activities',
        link: '/programs',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]

const CaseStudies = [
    {
        text: 'Through our youth engagement activities, we saw a 50% increase in youth participation and a 25% increase in community events.',
        link: '#',
    },
    {
        text: 'Our mentorship programs resulted in significant improvements in personal growth and a 200% increase in mentor-mentee relationships.',
        link: '#',
    },
    {
        text: 'Our family activities boosted family involvement by 25% and led to a 20% increase in overall program participation.',
        link: '#',
    },
];


const WorkingProcess = [
    {
        title: 'Introduction Meeting',
        description: 'In our first meeting, we will discuss your spiritual needs and goals. This helps us understand how our program can best support your journey.',
    },
    {
        title: 'Assessment and Planning',
        description: 'We assess your current spiritual state and develop a personalized plan to guide your growth and involvement in our activities.',
    },
    {
        title: 'Engagement',
        description: 'You will start participating in our spiritual teachings, worship sessions, and community support activities, tailored to your needs.',
    },
    {
        title: 'Support and Monitoring',
        description: 'We provide continuous support and monitor your progress, ensuring you receive the guidance and resources needed for your spiritual development.',
    },
    {
        title: 'Feedback and Communication',
        description: 'Regular feedback sessions help us understand your experiences and make necessary adjustments to better support your growth.',
    },
    {
        title: 'Ongoing Improvement',
        description: 'We continuously refine our program based on your feedback and evolving needs, ensuring you have the best possible support on your spiritual journey.',
    },
];


const Team = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'አለሙ አበበ',
        position: 'Participant in GEP',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt cursus sapien, a egestas dui bibendum id. Integer malesuada libero vitae mauris sollicitudin, ac dignissim sapien fermentum. Suspendisse sit amet turpis at lorem.",
    },
    {
        name: 'አርአያስ ተፈራ',
        position: 'Participant in GEP',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt cursus sapien, a egestas dui bibendum id. Integer malesuada libero vitae mauris sollicitudin, ac dignissim sapien fermentum. Suspendisse sit amet turpis at lorem.",
    },
    {
        name: 'እሸቱ ብርሀን',
        position: 'Participant in GEP',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt cursus sapien, a egestas dui bibendum id. Integer malesuada libero vitae mauris sollicitudin, ac dignissim sapien fermentum. Suspendisse sit amet turpis at lorem.",
    },
    {
        name: 'ዳንኤል ምንሶት',
        position: 'Participant in GEP',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt cursus sapien, a egestas dui bibendum id. Integer malesuada libero vitae mauris sollicitudin, ac dignissim sapien fermentum. Suspendisse sit amet turpis at lorem.",
    },
];

export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };