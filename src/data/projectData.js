import {FaHandsHelping, FaEye, FaBullseye, FaHeart, FaGraduationCap, FaStethoscope, FaFemale,FaAward, FaHandshake, FaPeopleCarry, FaLightbulb, FaChartLine, FaArrowRight,FaQuoteRight, FaStar, FaMedal, FaMapMarkerAlt,FaGlobeAfrica, FaUser, FaUsers, FaLandmark, FaUniversity, FaEnvelope, FaPhoneAlt, FaClock} from 'react-icons/fa'
import {GiPlantSeed, GiEarthAfricaEurope} from 'react-icons/gi'
import {IoEyeOutline} from 'react-icons/io5'
import testimonialBg1 from '../images/ngo/bg (7).webp';
import testimonialBg2 from '../images/ngo/bg (8).webp';
import testimonialBg3 from '../images/ngo/bg (12).webp';
import programImg1 from '../images/ngo/bg (5).webp';
import programImg2 from '../images/ngo/bg (9).webp';
import programImg3 from '../images/ngo/bg (12).webp';
import programImg4 from '../images/ngo/bg (13).webp';
import teamBg1 from '../images/team/team (6).webp';
import teamBg2 from '../images/team/team (5).webp';
import teamBg3 from '../images/team/team (3).webp';
import teamBg4 from '../images/team/team (7).webp';
import teamBg5 from '../images/team/team (4).webp';
import teamBg6 from '../images/team/team (1).webp';
import fStories1 from '../images/ngo/bg (5).webp';
import fStories2 from '../images/ngo/blog.webp';
import blogImg1 from '../images/ngo/blog1.webp'
import blogImg2 from '../images/ngo/bg (6).webp';
import blogImg3 from '../images/ngo/blog2.webp';
import blogImg4 from '../images/ngo/bg (10).webp';
import programDataImg1 from '../images/ngo/bg (3).webp';
import programDataImg2 from '../images/ngo/blog1.webp';
import programDataImg3 from '../images/ngo/bg (7).webp';
import programDataImg4 from '../images/ngo/bg (11).webp'

export const programsData = [
    {
        id : 1,
        program : 'Education',
        image : programDataImg1,
        style : 'bg-blue-100 text-blue-600',
        title  : 'Education for All',
        text : 'Building Brighter Futures Through Learning',
        icon_style : 'bg-blue-600 text-white',
        color : 'text-blue-600',
        sub_text : 'Our comprehensive education program focuses on building schools, training teachers, providing learning materials and implmenting innovative teaching methods to ensure every child has access to quality education.',
        rating : [{value : 25000, text : 'Women Empowered'}, {value:5000, text: 'Business Started'}, {value : 80, text : 'Training centers'}],
        location : ['Kenya', 'Ghana', 'Nigeria', 'Ethopia', 'Mali'],
        skills : ['Skills Training Programs', 'Microfinance & Loans', 'Leadership Development'],
    },
    {
        id : 2,
        style : 'bg-red-100 text-red-600',
        program : 'Health',
        image : programDataImg2,
        title  : 'Healthcare Outreach',
        text : 'Bringing Medical Care to Every Community',
        icon_style : 'bg-red-600 text-white',
        color : 'text-red-600',
        sub_text : 'Mobile clinics, vaccination programs, health education, and medical infrastructure development to ensure healthcare access in the most remote and underserved communities across Africa',
        rating : [{value : 100000, text : 'Patients Treated'}, {value:45, text: 'Mobile CLinics'}, {value : 1200, text : 'Health Workers Trained'}],
        location : ['Kenya', 'Ghana', 'Rwanda', 'Senegal', 'Zambia'],
        skills : ['Mobile Medical Clinics', 'Vaccination Campaigns', 'Maternal Health Programs'],
    },
    {
        id : 3,
        style : 'bg-purple-100 text-purple-600',
        program : 'Women',
        image : programDataImg3,
        title  : 'Women Empowerment',
        text : 'Empowerment Women as Agents of Change',
        icon_style : 'bg-purple-600 text-white',
        color : 'text-purple-600',
        sub_text : 'Skills training, microfinance programs, leadership development, and enterpreneurship support to empower women economically and socially, creating ripple effects throughout their communities',
        rating : [{value : 25000, text : 'Women Empowered'}, {value:5000, text: 'Business Started'}, {value : 80, text : 'Training Centers'}],
        location : ['Kenya', 'Ghana', 'Nigeria', 'Ethiopia', 'Mali'],
        skills : ['Skills Training Programs', 'Microfinanace & Loans', 'Leadership Development'],
    },
    {
        id : 4,
        style : 'bg-green-100 text-green-600',
        program : 'Environmental',
        image : programDataImg4,
        title  : 'Environmental Sustainability',
        text : 'Protecting Africa Natural Heritage',
        icon_style : 'bg-green-600 text-white',
        color : 'text-green-600',
        sub_text : 'Tree planting initiatives, clean water projects, sustinable farming practices, and environmental education to combat climate change and protect Africa natural resources for future generations',
        rating : [{value : 500000, text : 'Trees Planted'}, {value:200, text: 'Water Wells Built'}, {value : 15000, text : 'Farmers Trained'}],
        location : ['Kenya', 'Ghana', 'Burkina-Fase', 'Niger', 'Chad'],
        skills : ['Reforestation Programs', 'Clean Water Projects', 'Sustainable Agriculture'],
    },
    
]
export const contacts = [
    {
        id : 1,
        icon : FaEnvelope,
        title : 'Email Address',
        links : ['hopebloomafrica@gmail.com', 'partnershipafrica@gmail.com'],
        type : 'email'

    },
    {
        id : 2,
        icon : FaPhoneAlt,
        title : 'Phone Numbers',
        links : ['+234 700 123 456', '+254 700 123 457'],
        type : 'phone',

    },
    {
        id : 3,
        icon : FaMapMarkerAlt, 
        title : 'Office Address',
        links : ['HopeBloom_Africa Foundation', 'Westlands Business Center','Abuja Nigeria'],
        type : 'address'
    },
    {
        id : 4,
        icon : FaClock,
        title : 'Office Hours',
        type : 'address',
        links : ['Monday - Friday: 8:00 AM - 6:00 PM (EAT)', 'Saturday: 9:00 AM - 2:00 PM (EAT)', 'Sunday: Closed'],
    },
];
export const commitment = [
    {
        id : 1,
        rate : 85,
        text : 'Goes directly to programs'
    },
    {
        id : 2,
        rate : 10,
        text : 'Administrative costs'
    },
    {
        id : 3,
        rate : 5,
        text : 'Fundraising expenses'
    },
]
export const DonateImpact = [
    {
        id : 1,
        icon : FaGraduationCap,
        title : 'Education Impact',
        style : 'bg-blue-100 text-blue-600',
        text : 'Your donation helps build schools, train teachers, and provide learning materials.',
        data : ['$25 = School supplies for 5 children', '$100 = Teacher training workshop', '$500 = Classroom renovation']
    },
    {
        id : 2,
        icon : FaHeart,
        title : 'Healthcare Impact',
        style : 'bg-red-100 text-red-600',
        text : 'Support mobile clinics, medical equipment, and health education programs.',
        data : ['$50 = Medical supplies for 20 patients', '$200 = Mobile clinics visit to remote village', '$1000 = Medical equipments for clinic']
    },
    {
        id : 3,
        icon : FaUsers,
        title : 'Women Empowerment',
        style : 'bg-purple-100 text-purple-600',
        text : 'Enable skills training, microfinance, and leadership development programs',
        data : ['$75 = Business training for 3 women', '$300 = Microfinance loan for entrepreneur', '$750 = Women cooperative setup']
    },
    {
        id : 4,
        icon : GiPlantSeed,
        title : 'Environmental Impact',
        style : 'bg-green-100 text-green-600',
        text : 'Fund free planting, clean water projects, and sustainable famring initiatives',
        data : ['$10 = Plant 50 trees', '$150 = Clean water system maintainance', '$600 = Sustainable farming training']
    },
]
export const DonateData = [
    {
        rate : 25,
        text : 'Provide school supplies for 5 children'
    },
    {
        rate : 100,
        text : 'Funds medical care for 10 patients'
    },
    {
        rate : 500,
        text : 'Support a womans business training'
    },

];
export const officeData = [
    {
        id : 1,
        name : 'West Africa Hub',
        location : 'Abuja Nigeria',
        phone : '+2348050123458',
        email : 'westafrica@hopebloomafrica@.org'
    },
    {
        id : 2,
        name : 'Central Africa Hub',
        location : 'Accra Ghana',
        phone : '+233501234567',
        email : 'centralafrica@hopebloomafrica@.org'
    },
    {
        id : 3,
        name : 'South Africa Hub',
        location : 'Kigali Rwanada',
        phone : '+250781234567',
        email : 'southafrica@hopebloomafrica@.org'
    },
]

export const blogLinks = ['All', 'Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Volunteer Stories', 'Partnerships'];
export const blogData = [
    {
        id : 1,
        image : blogImg1,
        author : 'Dr.Kwama Samale',
        date : 'September 25 2025',
        title : 'Mobile Clinics: Reaching the Unreachable',
        text : 'Our mobile healthcare units have travlled over 50,000 kilometers this year, bringing essential medical care to remote villages across Ghana.',
        time : 5,
    },
    {
        id : 2,
        image : blogImg2,
        author : 'James Benson',
        date : 'October 25 2025',
        title : '500,000 Trees Planted: A milestone Achievement',
        text : 'Celebrating our environmental sustainability programs major milestone and the communities leading the change in reforestation in Tanzania.',
        time : 4,
    },
    {
        id : 3,
        image : blogImg3,
        author : 'Mariam Kolley',
        date : 'October 20 2026',
        title : 'Volunteer Spotlight: Mariam Journey in South Africa',
        text : 'International volunteer Mariam Kolley shares her  transformative 6-month experience working with our education program in tanzania', 
        time : 7,
    },
    {
        id : 1,
        image : blogImg4,
        author : 'Dr.Kwama Samale',
        date : 'September 25 2026',
        title : 'Strenghtening Partnerships with Local Governments',
        text : 'How our collaborations with government agencies is scaling our impact and creating sustainable change across multiple african countries.',
        time : 5,
    }

]
export const featured_stories = [
    {
        id : 1,
        image : fStories1,
        author : 'Sarah wangi',
        dates : 'October 30, 2025',
        time : 5,
        title : 'Transform Education in Rural Kenya: A Success Story',
        text : 'How our education program in Kakamega Country has improved literacy rates by 85% and changed the lives of over 2,000 children'

    },
    {
        id : 2,
        image : fStories2,
        author : 'Grace Obengi',
        dates : 'October 20, 2025',
        time : 6,
        title : 'Women Entrepreneurs Changing Their Communities',
        text : 'Meet five incredible women who have used our microfinance and training programs to start successful businesses and empower others'

    },
]
export const partnerships = [
    {
        id : 1,
        icon : FaHandshake, 
        title : 'Corporate Partnerships',
        text : 'Partner with us through CSR initiatives, employee, volunteering, and funding support',
        values : ['Brand Visibility', 'Employee engagement', 'Social impact reporting', 'Tax benefits'],
    },
    {
        id : 2,
        icon : FaHandsHelping, 
        title : 'NGO Collaborations',
        text : 'Join forces with other organizations to amplify our collective impact',
        values : ['Resource sharing', 'Knowledge exchange', 'Joint programs', 'Wider reach'],
    },
    {
        id : 3,
        icon : FaLandmark, 
        title : 'Government Partnerships',
        text : 'Work with local and international governments on policy and implementation',
        values : ['Policy influence', 'Sustainable funding', 'Large-scale impact', 'Community trust'],
    },
    {
        id : 4,
        icon : FaUniversity, 
        title : 'Academic Institutions',
        text : 'Collaborate on research, student exchanges, and capacity building programs',
        values : ['Research insights', 'Students volunteers', 'Innovation', 'Knowledge creation'],
    },
]
export const involvedData = [
    {
        id : 1,
        icon : FaUsers,
        title : 'Education Volunteer',
        location : 'Kenya, Ghana, Nigeria',
        period : '3-12 months',
        text : 'Teach in schools, develop curriculum, and train local teachers in our education programs.',
        requirements : ['Teaching experience preferred', 'Bachelors Degree', 'Passion for education']

    },
    {
        id : 2,
        icon : FaHeart,
        title : 'Healthcare Volunteer',
        location : 'Rwanda, Senegal, Zambia',
        period : '6-24 months',
        text : 'Support mobile clinics, health education, and medical infrastructure development',
        requirements : ['Medical Background', 'Valid certifications', 'Cultural sensitivity']

    },
    {
        id : 3,
        icon : FaUsers,
        title : 'Skill Training Facilitator',
        location : 'Ethopia, Mali, Uganda',
        period : '2-6 months',
        text : 'Lead women empowerment workshops and business skills  training programs',
        requirements : ['Business experience', 'Training skills', 'Language proficiency']

    },
]
export const aboutImpact = [
    {
        id : 1,
        icon : FaHandsHelping,
        value : 250000,
        sym : '+',
        title : 'Lives Transformed',
        text : 'Individuals directly impacted by our programs'
    },
    {
        id : 2,
        icon : FaGraduationCap,
        value : 50000,
        sym : '+',
        title : 'Students Educated',
        text : 'Children recieving quality education'
    },
    {
        id : 3,
        icon : FaStethoscope,
        value : 100000,
        sym : '+',
        title : 'Patients Treated',
        text : 'Medical consultations and treatment provided'
    },
    {
        id : 4,
        icon : FaFemale,
        value : 25000,
        sym : '+',
        title : 'Women Empowered',
        text : 'Women trained in skills and leadership'
    },
    {
        id : 5,
        icon : GiPlantSeed,
        value : 500000,
        sym : '+',
        title : 'Trees Planted',
        text : 'Contributing to environmental restoration'
    },
    {
        id : 6,
        icon : FaGlobeAfrica,
        value : 15,
        title : 'Countries',
        text : 'African nations where we operate'
    },
];

export const Teams = [
    {
        id : 1,
        image : teamBg2,
        name : 'Dr Ebenezer Obomsi',
        role : 'Founder & CEO',
        text : 'Educational Leaderwith 15+ years in international development.PhD in development studies from Oxford University',
        linkedin_url : 'https://www.goggle.com',
        mail_url : 'ebeneseroboms@gmail.com',
    },
    {
        id : 2,
        image : teamBg1,
        name : 'Sarah Williams',
        role : 'Director of Healthcare',
        text : 'Medical doctor specializing in public health and rural healthcare delivery.Former WHO consultant',
        linkedin_url : 'https://www.goggle.com',
        mail_url : 'sarahwilliams@gmail.com',
    },
    {
        id : 3,
        image : teamBg3,
        name : 'Dr Aliko Maurice',
        role : 'Director of Education',
        text : 'Former teacher and education policy expert with expertise in curriculum development and teacher training',
        linkedin_url : 'https://www.goggle.com',
        mail_url : 'mauricealiks@gmail.com',
    },
    {
        id : 4,
        image : teamBg4,
        name : 'Fatima Danlama',
        role : 'Women Empowerment Lead',
        text : 'Social entrepreneur and womens rights advocate with extensive experience in microfinance and skills training',
        linkedin_url : 'http://www.goggle.com',
        mail_url : 'danlamafatima@gmail.com'

    },
    {
        id : 5,
        image : teamBg5,
        name : 'Harlean Jones',
        role : 'Environmental Programs Director',
        text : 'Environmental scientist focused on sustainable development and climate change adaptation in African countries',
        linkedin_url : 'http://www.goggle.com',
        mail_url : 'hearleean@gmail.com'
    },
    {
        id : 6,
        image : teamBg6,
        name : 'Evelyn Richards',
        role : 'Operations Manager',
        text : 'Operations expert with background in logistics and program management across multiple african countries',
        linkedin_url : 'http://www.goggle.com',
        mail_url : 'richardevelyn@gmail.com'
    }

]
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
];

export const aboutValue = [
    {
        id : 1,
        title : 'Compassion',
        icon : FaHandsHelping,
        style : 'bg-blue-100 text-blue-600',
        text : 'We approach every community with empathy, understanding, and genuine care for their unique needs and challenges',
    },
    {
        id : 2,
        title : 'Sustainability',
        icon : GiPlantSeed,
        style : 'bg-yellow-100 text-yellow-400',
        text : 'Our prgrams are designed to create long-term impact that continues  to benefits communities for generations'
    },
    {
        id : 3,
        title : 'Community-Led',
        icon : FaPeopleCarry,
        style : 'bg-green-100 text-green-600',
        text : 'We belive the best solutions come from within communities themselves, and we support local leadership'
    },
    {
        id : 4,
        title : 'Innovation',
        icon : FaLightbulb,
        style : 'bg-purple-100 text-purple-600',
        text : 'We embrace creative solutions and cutting-edge approaches to address complex development challenges'
    },

]