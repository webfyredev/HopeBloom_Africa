import {FaHandsHelping, FaEye, FaBullseye, FaHeart, FaAward, FaHandshake, FaPeopleCarry, FaLightbulb, FaChartLine, FaArrowRight,FaQuoteRight, FaStar, FaMedal, FaMapMarkerAlt } from 'react-icons/fa'
import {GiPlantSeed, GiEarthAfricaEurope} from 'react-icons/gi'
import {IoEyeOutline} from 'react-icons/io5'
import testimonialBg1 from '../images/ngo/bg (7).webp';
import testimonialBg2 from '../images/ngo/bg (8).webp';
import testimonialBg3 from '../images/ngo/bg (12).webp';
import programImg1 from '../images/ngo/bg (5).webp';
import programImg2 from '../images/ngo/bg (9).webp';
import programImg3 from '../images/ngo/bg (12).webp';
import programImg4 from '../images/ngo/bg (13).webp';
export const choose = [
    {
        id :1,
        icon : FaMedal,
        color : 'bg-blue-100 text-blue-600',
        title : 'Proven Impact',
        text : 'Join a network that has successfully impacted over 250,000 lives across 15 African countries with measurable, sustainable results.'
    },
    {
        id :2,
        icon : FaMapMarkerAlt,
        color : 'bg-yellow-100 text-yellow-400',
        title : 'Local Expertise',
        text : 'Benefit from our deep understanding of African communities, local partnerships, and culturally appropraite development approaches'
    },
    {
        id :3,
        icon : FaEye,
        color : 'bg-green-100 text-green-600',
        title : 'Transparent Operations',
        text : 'Work with an organization committed to full transparency, regular reporting, and accountable use of resources for maximum impact'
    },
]

export const stats = [
    {
        id : 1,
        percent : 98,
        rate : 'Satisfation Rate',
        text : 'From program participants',
        color : 'blue-600',
        value : '%'
    },
    {
        id : 2,
        percent : 95,
        rate : 'Would Recommend',
        text : 'Our programs to others',
        color : 'green-600',
        value : '%'
    },
    {
        id : 3,
        percent : 92,
        rate : 'Long-term impact',
        text : 'Sustained after 2 years',
        color : 'yellow-400',
        value : '%',
    },
    {
        id : 4,
        percent : 1500,
        rate : 'Success Stories',
        text : 'Documented impacts',
        color : 'purple-600',
        value : '+'
    },
]
export const testimonial = [
    {
        id : 1,
        icon : FaQuoteRight,
        text : "Thanks to Bloom_Africa's education program, our school has modern learning materials and trained teachers.My students are thriving like never before.The digital learning platform has revolutionized how we teach, and our literacy rates have improved by 85%.",
        image : testimonialBg1,
        name : 'Amara Okafor',
        role : 'Teacher, Lagos Nigeria',
        location : 'Lagos, Nigeria',
        rating : 5,
        category : 'Education for All'

    },
    {
        id : 2,
        icon : FaQuoteRight,
        text : 'The mobile clinic program has transformed healthcare in our rural community, We have been able to provide essential medical care to thousands of families who previously had no access to healthcare.The impact on child mortality rates has been remarkable',
        image : testimonialBg2,
        name : 'Dr.kwame Asanme',
        role : 'Teacher, Northern Ghana',
        location : 'Ghana',
        rating : 4,
        category : 'Healthcare Outreach'
    },
    {
        id : 3,
        icon : FaQuoteRight,
        text : "The women empowerment program gave me the skills and confidence to start my own business.Now I'm helping other women in my community do the same. We've created a network of 50 women-owned business that support each other and our families",
        image : testimonialBg3,
        name : 'Amara Famoth',
        role : 'Women Leader, Kenya',
        location : 'Nairobi, Kenya',
        rating : 5,
        category : 'Women Empowerment'
    },
]
export const programs = [
    {
        id : 1,
        title : 'Education for All',
        // icon : <FaBookOpen  className="mt-[-15%] w-9 h-9 mt-5 p-2 rounded-md bg-blue-600 text-white"/>,
        image : programImg1,
        text : 'Building schools, training teachers, and providing educational resources to ensure every child has access to quality education', 
        cate : '50,000+ students supported',
        bg : 'blue-100',
        color : 'blue-600'
    },
    {
        id : 2,
        title : 'Healthcare Outreach',
        image : programImg2,
        // icon : <FaHandHoldingMedical className="w-9 h-9 mt-5 p-2 rounded-md bg-blue-600 text-white" />,
        text : 'Mobile clinics, vaccination programs and health education initiatives bringing medical care to remote communities',
        cate : '100,000+ patients treated',
        bg : 'yellow-100',
        color : 'yellow-400'
    },
    {
        id : 3,
        title : 'Women Empowerment',
        // icon : <FaFemale />,
        image : programImg3,
        text : 'Skills training, microfinance programs, and leadership development to empower women as agent of change',
        cate : '25,000+ women empowered',
        bg : 'purple-100',
        color : 'purple-600'
    },
    {
        id : 4,
        title : 'Environmental Sustainability',
        // icon : <GiPlantSeed />,
        image : programImg4,
        text : 'Tree planting, clean water projects, and sustainable farming practice to protect Africa natural resources',
        cate : '500,000+ trees planted',
        bg : 'green-100',
        color : 'green-600'
    },

]
export const process = [
    {
        id : 1,
        step : 'Step 01',
        title : 'Community Assesment',
        item : 'right',
        text : 'We conduct thorough needs assessments and local communities to understand their challenges and priorities',
    },
    {
        id : 2,
        step : 'Step 02',
        title : 'Collaborative Planning',
        item : 'left',
        text : 'Together with community leaders, we design programs that address identified needs using local resources and knowledge'
    },
    {
        id : 3,
        step : 'Step 03',
        title : 'Implementation & Training',
        item : 'right',
        text : 'We implement programs while traininglocal teams to ensure knowledge transfer and capacity building'
    },
    {
        id : 4,
        step : 'Step 04',
        title : 'Monitoring & Evaluation',
        item : 'left',
        text : 'Continous monitoring ensures programs meet objectives and adapt to changing needs.'
    },
    {
        id : 5,
        step : 'Step 05',
        title : 'Sustainability & Handover',
        item : 'right',
        text : 'We gradually transfer program ownership to communities, ensuring long-term sustainability and independence'
    },
]

export const approach = [
    {
        id :1,
        icon : FaPeopleCarry,
        color : 'bg-blue-100 text-blue-600',
        title : 'Community-Centered',
        text : 'We work directly with local communities to identify their most pressing needs and develop solutions together',
        values : ['Local leadership development', 'Cultural sensitivity training', 'Community ownership of projects', 'Participatory decision making']
    },
    {
        id :2,
        icon : FaLightbulb,
        color : 'bg-yellow-100 text-yellow-400',
        title : 'Innovation-Driven',
        text : 'We leverage technology and innovative approaches to maximize impact and create scalable solutions',
        values : ['Digital learning platforms', 'Mobile health solutions', 'Solar-powered infrastructure', 'Data-driven monitoring']
    },
    {
        id :3,
        icon : GiEarthAfricaEurope,
        color : 'bg-green-100 text-green-600',
        title : 'Sustainable Impact',
        text : 'Our programs are designed to create lasting change that communities can maintain independently',
        values : ['Local capacity building', 'Economic sustainability models', 'Environmental COnservation', 'Knowledge transfer systems']
    },
    {
        id :4,
        icon : FaChartLine,
        title : 'Results-Focused',
        color : 'bg-purple-100 text-purple-600',
        text : 'We measure success through tangible outcomes and transparent reporting of our impact',
        values : ['Regular impact assessments', 'Community feedback systems', 'Financial transparency', 'Third-party-evalutaions']
    },
    
];
export const impacts1 = [
    {
        id : 1,
        value : 250,
        data : 'K',
        color : 'blue-600',
        title : 'Lives Impacted',
        text : 'Across 15 countries'
    },
    {
        id : 2,
        value : 1200,
        data : '+',
        color : 'yellow-400',
        title : 'Active Volunteers',
        text : 'Local & International'
    },
    {
        id : 3,
        value : 85,
        color : 'green-600',
        title : 'Projects Completed',
        text : 'Since 2018'
    },
    {
        id : 4,
        value : 15,
        color : 'purple-600',
        title : 'Countries Reached',
        text : 'Across Africa'
    },
];

export const principles = [
    {
        id : 1,
        icon : FaAward,
        color : 'bg-[#DBEAFE] text-blue-600',
        title : 'Excellence',
        text : 'Delivering high-quality programs with measureable impact'
    },
    {
        id : 2,
        icon : GiPlantSeed,
        color : 'bg-[#DCFCE7] text-green-600',
        title : 'Sustainability',
        text : 'Creating long-term solutions that communities can contain'
    },
    {
        id : 3,
        icon : FaHandshake,
        color : 'bg-yellow-100 text-yellow-400',
        title : 'Partnership',
        text : 'Collaborating with local leaders and international organizations'
    },
    {
        id : 4,
        icon : IoEyeOutline,
        color : 'bg-[#F3E8FF] text-purple-600',
        title : 'Transparency',
        text : 'Open reporting on all activities and financial accountability'
    },

]
export const impact2 = [
    {
        id :1,
        value : '98%',
        text : 'Program Success Rate',
        color : 'blue-600'
    },
    {
        id :2,
        value : '$2.5M',
        text : 'Fund raised in 2024',
        color : 'green-600'
    },
    {
        id :3,
        value : '45',
        text : 'Partner Organization',
        color : 'yellow-400'
    },
];
export const mission = [
    {
        id : 1,
        title : 'Our Mission',
        icon : FaHandsHelping,
        style : 'bg-[#DBEAFE] text-blue-600',
        text : 'To empower African communities through sustainable development programs that create lasting positive change, focusing on education and healthcare, economic empowerment, and environmental conservation.'
    },
    {
        id : 2,
        title : 'Our Vision',
        icon : FaEye,
        style : 'bg-yellow-100 text-yellow-400',
        text : 'A thriving Africa where every community has access to quality education, healthcare, and economic opportunities, leading to self-sufficient and prosperous societies across the continent.'
    },
    {
        id : 3,
        title : 'Our Goals',
        icon : FaBullseye,
        style : 'bg-[#DCFCE7] text-green-600',
        text : 'To reach 1 million lives by 2030 through our integrated approach to community development, establishing 500 schools, 100 health centers, and 1000 women-led enterprises.'
    },
    {
        id : 4,
        title : 'Our Values',
        icon : FaHeart,
        style : 'bg-[#F3E8FF] text-purple-600',
        text : 'Integrity, compassion, sustainability, transparency, and community-driven solutions guide everything we do.We belive in local leadership and culturally sensitive approaches.'
    },
]