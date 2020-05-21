export interface Experience {
  companyName: string;
  url?: string;
  thumbnail?: string;
  description: string;
  title: string;
  dateStart: Date;
  dateEnd?: Date;
}

export const EXPERIENCE: Array<Experience> = [
  {
    companyName: 'Giflytics',
    url: 'https://www.giflytics.com',
    thumbnail: '/assets/logo_giflytics.png',
    description: `	Led the creation of an analytics platform that measured how well a brand’s GIFs are reaching their
    audiences through messaging applications. Email notifications with Sendgrid helped our clients know what daily
    trends people were searching for. I invented research tools to help marketers understand how they rank against
    competitors' content on Giphy and Tenor. My responsibilities included planning, documenting, and creating the
    project and all of its related technology.`,
    title: 'Co-founder, Lead Developer',
    dateStart: new Date('2019-11-11T00:00:00'),
  },
  {
    companyName: 'Google Development Group New Haven',
    url: 'https://developers.google.com/community/gdg',
    thumbnail: '/assets/logo_gdg.png',
    description: `Assisted in hosting events pertraining to Google related technologies, such as Angular, Flutter,
    Google Cloud Platform, and the yearly Google Dev Fest hosted in New Haven. I assist in workshops to help younger or
    less experienced developers learn about Web Development`,
    title: 'Assistant Organizer',
    dateStart: new Date('2016-06-11T00:00:00'),
  },
  {
    companyName: 'Fitscript',
    url: 'https://glucosezone.com/home',
    thumbnail: '/assets/logo_fitscript.png',
    description: `Responsible for improving the company's web based products. Built a new marketing website with a custom
    Content Management System, allowing non-technical employees to make changes. I also created an internal dashboard
    to help the sales team manage the company’s customers, and provide analytics to drive the marketing team decisions.
    Maintained legacy code and oversaw the migration of new features into customer facing applications.`,
    title: 'Software Engineer',
    dateStart: new Date('2019-02-11T00:00:00'),
    dateEnd: new Date('2019-11-11T00:00:00'),
  },
  {
    companyName: 'Southern Connecticut State University',
    url: 'https://www.southernct.edu/academics/computer-science',
    thumbnail: '/assets/logo_scsu.jpeg',
    description: `Partook in the Computer Science Club and attended lectures related to Mathematics and Computer Science.
    Computer related coursework included Algorithm Analysis, Machine Learning, Software Design, and Artifical Intelligence.
    Mathematics included Linear Algebra, Calculus, and Discrete Mathematics.
    I won two hackathons in 2017 while I was attending classes: HackHolyoke 2017 and CT Tech Challenge 2017.
    I was on the Deans List from Fall 2016 to Fall 2017, and graduated with a GPA of 3.41 and a Minor in Mathematics.`,
    title: 'B.S. Computer Science, Math Minor',
    dateStart: new Date('2016-09-11T00:00:00'),
    dateEnd: new Date('2019-05-11T00:00:00')
  },
  {
    companyName: 'Checkmate Digital',
    url: 'https://www.checkmate.digital',
    thumbnail: '/assets/logo_checkmate.png',
    description: `Frequently learned new technology and programming languages to create solutions for various startup
    companies. Constantly met with the company's clients to gather feedback on their products and provide updates,
    and pass feedback to the rest of the development team.`,
    title: 'Software Engineer',
    dateStart: new Date('2017-10-11T00:00:00'),
    dateEnd: new Date('2019-01-11T00:00:00'),
  },
];
