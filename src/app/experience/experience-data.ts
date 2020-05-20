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
    url: 'https://www.checkmate.digital',
    thumbnail: '/assets/logo_giflytics.png',
    description: `	Led the creation of an analytics platform that measured how well a brand’s GIFs are reaching their
    audiences through messaging applications. Email notifications with Sendgrid helped our clients know what daily
    trends people were searching for. I invented research tools to help marketers understand how they rank against
    competitors' content on Giphy and Tenor. My responsibilities included planning, documenting, and creating the
    project and all of its related technology.`,
    title: 'Software Engineer',
    dateStart: new Date('2019-11-1T00:00:00'),
    dateEnd: new Date('2019-11-1T00:00:00'),
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
    dateStart: new Date('2019-11-1T00:00:00'),
    dateEnd: new Date('2019-11-1T00:00:00'),
  },
  {
    companyName: 'Checkmate Digital',
    url: null,
    thumbnail: '/assets/logo_checkmate.png',
    description: `Frequently learned new technology and programming languages to create solutions for various startup
    companies. Constantly met with the company's clients to gather feedback on their products and provide updates,
    and pass feedback to the rest of the development team.`,
    title: 'Software Engineer',
    dateStart: new Date('2019-11-1T00:00:00'),
    dateEnd: new Date('2019-11-1T00:00:00'),
  }
];
