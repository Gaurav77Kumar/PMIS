// data.js

export const dummyUser = {
  id: '1',
  name: '',
  email: '',
  skills: [],
  sector: '',
  location: '',
  resumeUploaded: false,
};

export const internships = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'Delhi',
    duration: '3 months',
    stipend: '1,200/month',
    description: 'Work on cutting-edge web applications using React and TypeScript.',
    requirements: ['React', 'JavaScript', 'CSS', 'Git']
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'DataWorks',
    location: 'Pune',
    duration: '6 months',
    stipend: '1,500/month',
    description: 'Analyze large datasets and build machine learning models.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics']
  },
  {
    id: '3',
    title: 'Product Management Intern',
    company: 'InnovateLab',
    location: 'Gurugram',
    duration: '4 months',
    stipend: '1,000/month',
    description: 'Support product strategy and work with cross-functional teams.',
    requirements: ['Communication', 'Analysis', 'Project Management']
  },
  {
    id: '4',
    title: 'Mobile App Developer Intern',
    company: 'AppVenture',
    location: 'Bengaluru',
    duration: '3 months',
    stipend: '1,300/month',
    description: 'Develop mobile applications for iOS and Android platforms.',
    requirements: ['React Native', 'JavaScript', 'Mobile Development']
  },
  {
    id: '5',
    title: 'UX Design Intern',
    company: 'DesignStudio',
    location: 'Hyderabad',
    duration: '5 months',
    stipend: '900/month',
    description: 'Create user-centered designs and improve user experiences.',
    requirements: ['Figma', 'User Research', 'Prototyping', 'Design Thinking']
  }
];

export const dummyApplications = [
  {
    id: '1',
    internshipId: '1',
    internshipTitle: 'Frontend Developer Intern',
    company: 'TechCorp',
    dateApplied: '2024-01-15',
    status: 'Under Review'
  },
  {
    id: '2',
    internshipId: '3',
    internshipTitle: 'Product Management Intern',
    company: 'InnovateLab',
    dateApplied: '2024-01-12',
    status: 'Applied'
  }
];

export const skillOptions = [
  'JavaScript', 'Python', 'React', 'Node.js', 'Java', 'C++', 'SQL',
  'Machine Learning', 'Data Analysis', 'UI/UX Design', 'Project Management',
  'Git', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Vue.js',
  'Angular', 'Flutter', 'React Native', 'Figma', 'Adobe Creative Suite'
];

export const sectorOptions = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Marketing',
  'Design',
  'Data Science',
  'Consulting',
  'Startup',
  'Non-profit'
];
