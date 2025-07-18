const githubBase = 'https://github.com/abhibadak/portfolio/tree/main/';

const projectsData = [
  // PYTHON
  {
    title: 'Send an Email with Python',
    description: 'Use Python to successfully send an email.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'mail.py',
  },
  {
    title: 'Send a Text Message with Python',
    description: 'Send a text message using Python.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'sms.py',
  },
  {
    title: 'Make a Phone Call with Python',
    description: 'Use Python to make a phone call.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'twilio_call_app.py',
  },
  {
    title: 'Post a Message on LinkedIn with Python',
    description: 'Use Python to create and post a message on LinkedIn.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'linkedin.py',
  },
  {
    title: 'Post a Message on Twitter (X) with Python',
    description: 'Post a message on Twitter (X) using Python.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'twitter.py',
  },
  {
    title: 'Send a WhatsApp Message with Python',
    description: 'Use Python to send a WhatsApp message.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'whatsapp.py',
  },
  {
    title: 'Menu-driven Python Project Dashboard',
    description: 'A menu-driven Python project that combines all Python tasks into a single program.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'dashboard.py',
  },
  {
    title: 'Post on Instagram with Python',
    description: 'Use Python to post on Instagram.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'instagram.py',
  },
  {
    title: 'Post on Facebook with Python',
    description: 'Use Python to post on Facebook.',
    category: 'Python',
    type: 'project',
    github: githubBase + 'facebook.py',
  },

  // LINUX
  {
    title: 'Blog: Companies Using Linux',
    description: 'Blog post on companies using Linux and their benefits.',
    category: 'Linux',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linux-opensource-techinnovation-activity-7349260025409802240-7Plz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
  {
    title: 'Blog: GUI Programs in Linux & Their Commands',
    description: 'GUI programs in Linux and the commands working behind them.',
    category: 'Linux',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linux-opensource-vimaldagasir-activity-7349697788743462913-3WoF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
  {
    title: 'Blog: Change Logo/Icon of Any Program in Linux',
    description: 'Changing the logo or icon of any program in Linux.',
    category: 'Linux',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linux-opensource-vimaldagasir-activity-7349486386023936002-_ebJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
  {
    title: 'Blog: Enhance Terminal & GUI Experiences in Linux',
    description: 'Methods to enhance terminal and GUI experiences in Linux.',
    category: 'Linux',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linux-vimaldagasir-linuxworld-activity-7349784634324389890-rbT_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
  {
    title: 'Send Email, WhatsApp, Tweet, SMS via Linux Terminal',
    description: 'Sending an email, WhatsApp message, tweet, and SMS through the Linux terminal.',
    category: 'Linux',
    type: 'project',
    github: githubBase + 'ubuntu-systemd',
  },
  {
    title: 'Blog: Ctrl+C and Ctrl+Z Interrupt Signals in Linux',
    description: 'Command working behind the Ctrl+C and Ctrl+Z interrupt signals.',
    category: 'Linux',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linux-processcontrol-ctrlc-activity-7349369796745932800-Bdjr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },

  // DOCKER
  {
    title: 'Case Study: Why Companies Use Docker',
    description: 'Case study of why Docker is used by different companies and the benefits.',
    category: 'Docker',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_docker-devops-linuxworld-activity-7349501486533390338-vdqn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
  {
    title: 'Run Software in Docker',
    description: 'Running a tool in Docker.',
    category: 'Docker',
    type: 'project',
    github: githubBase + 'run software in doc',
  },
  {
    title: 'Apache Webserver in Docker',
    description: 'Set up and configure the Apache webserver in Docker.',
    category: 'Docker',
    type: 'project',
    github: githubBase + 'apache-docker2',
  },
  {
    title: 'Run systemctl in Docker Container',
    description: 'Way to run the systemctl command inside a Docker container.',
    category: 'Docker',
    type: 'project',
    github: githubBase + 'ubuntu-systemd',
  },
  {
    title: 'Docker-in-Docker (DIND) Setup',
    description: 'Setting up Docker inside Docker (DIND).',
    category: 'Docker',
    type: 'blog',
    linkedin: 'https://www.linkedin.com/posts/abhishek-badak-73899228a_linuxworld-docker-systemd-activity-7350193542834671616-Lb3d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZEtpwBTfFT_srSGnojRyxL45A1Cq_9HGU',
  },
];

export default projectsData; 