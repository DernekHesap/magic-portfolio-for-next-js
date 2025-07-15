import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "EYP",
  lastName: "Türkiye",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "National Committee",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Start your {person.firstName} Journey</>,
  description: (
    <>
      If you are a highschool or university student who is interested in world-wide problems and would like to learn more about EYP reach out to us: <br /><br />
      <strong>info@eyp.org.tr</strong>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system/nextjs-starter",
  // },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> <span style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "0.1rem", fontFamily: "Times New Roman, serif" }}> EYP Türkiye Official Webpage</span> <br/><br/> Bridge Between Youth and the World</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/blog",
  },
  subline: (
    <>
      European Youth Parliament (EYP) is a place, where people from all around the Europe
      gets together to find solutions to world problems.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        EYP Türkiye is a non-partisan, non-govermental organisation that is represented by Avrupa Gençlik Parlamentosu Derneği.
        We bring young people of Türkiye together under one roof to be able to discuss current issues such as women rights, global refugee problems,
        environmental crisis, protection of art and culture and many more. Our mision is to be able to reach all around Türkiye to give
        young people an opportunity of becoming a world citizen.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Board Of EYP Türkiye",
    experiences: [
      {
        company: "Current",
        timeframe: "2025 - Present",
        // role: "Senior Design Engineer",
        achievements: [
          <>
            Bilge Çilingir - President
          </>,
          <>
            Deniz Duru Eratak - Vice President
          </>,
          <>
            Batur Alp Akyüz - Secretary General
          </>,
           <>
            Hasan Kadri Özalp - Session & Event Director
          </>,
           <>
            Fırat Tanrıverdi - Human Resoruces Department
          </>,
            <>
            İnanç Turhan Kranda - Finance Director
          </>,
            <>
            İdil Aydın - Public Relations Director*
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/board.jpg",
          //   alt: "Once UI Project",
          //   width: 42,
          //   height: 24,
          // },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Sessions",
  title: "What Have We Done So Far",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "What We Do",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
