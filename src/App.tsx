import styles from "./app.module.css";
import Container from "./components/container/container";
import Flex from "./components/flex/flex";
import Grid from "./components/grid/grid";
import ListBox from "./components/listbox/lisbox";
import Section from "./components/section/section";
import Sperator from "./components/sperator/sperator";
import Typography from "./components/typography/typography";

const linkStyle = { textDecoration: "none", color: "#3B82F6" };

const SKILLS: [string, string][] = [
  ["Languages:", "JavaScript, TypeScript, HTML5, CSS3, SQL"],
  ["Frontend:", "React.js, Next.js, Vue.js, Angular, React Native"],
  ["State Management:", "Redux Toolkit, Redux Saga, Zustand, React Query"],
  ["UI & Forms:", "Tailwind CSS, Material UI, Bootstrap, React Hook Form, Formik, Yup, Storybook, Zod, Web Accessibility"],
  ["Frontend Performance & Architecture:", "Core Web Vitals Optimization, Information Architecture, Responsive Web Design, Code Splitting & SSR Optimization"],
  ["Backend:", "C#, PHP, Java, ASP.NET Core, PHP Laravel, Java Spring Boot, RESTful API, JWT Authentication"],
  ["Database:", "PostgreSQL, SQL Server, MySQL, MongoDB"],
  ["Testing:", "Jest, React Testing Library, Vitest, Unit Testing"],
  ["Development Tools:", "Git, GitLab, Docker, Postman, Figma, GitHub Copilot, Cursor AI"],
];

const EXPERIENCE: [string, string][] = [
  ["Core Development:", "Spearheaded the end-to-end design and full-stack development of enterprise web applications, ensuring high performance and intuitive user experiences."],
  ["Technical Execution:", "Engineered secure, scalable backend RESTful APIs and optimized complex database queries, reducing system latency and accelerating data processing times."],
  ["Cross-Project Collaboration:", "Actively supported internal and client-facing projects during downtime, assisting in hot-fixing production issues, code maintenance, and cross-functional alignment."],
  ["AI-Assisted Efficiency:", "Leveraged AI tools (GitHub Copilot, Cursor AI) to streamline service implementation, automate unit test generation, and accelerate feature delivery across product pipelines."],
];

const PROJECTS = [
  {
    name: "Financial Information System",
    period: "06/2026 - Present",
    role: "Full-stack Developer",
    stack: "Vue.js, Quasar, SCSS, Vitest, C#, ASP.NET Core, Pinia, SQL Server, Postman.",
    teamSize: 7,
    items: [
      ["Core PDF & Digital Signature Workflows —", "Spearheaded the end-to-end development of document processing modules, enabling seamless PDF generation, rendering, and secure digital signature integration using Vue.js and Quasar."],
      ["Analyzed business requirements —", "Collaborated directly with stakeholders to translate complex compliance and document workflow rules into production-ready technical architectures."],
      ["Accelerated delivery with AI tooling —", "Leveraged GitHub Copilot for backend service implementation and automated test-case generation, cutting feature delivery time by 20%."],
      ["Ensured system stability & UAT —", "Supported client User Acceptance Testing (UAT) by diagnosing root causes, hot-fixing document processing bugs, and clarifying technical specs."],
    ],
  },
  {
    name: "Pubcare System",
    period: "04/2026 - Present",
    role: "Full-stack Developer",
    stack: "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest. PHP Laravel, Docker, MySQL.",
    teamSize: 5,
    items: [
      ["Engineered end-to-end healthcare workflows —", "Architected patient queuing, online appointment booking, and automated notifications using Next.js, React, and PHP Laravel."],
      ["Optimized APIs & User Experience —", "Refactored frontend state management and streamlined backend RESTful APIs for medical staff, integrating RBAC (Role-Based Access Control) and strict validation."],
      ["Facilitated seamless client delivery —", "Actively led client requirement discussions and resolved critical UAT blockers to maintain high product stability."],
    ],
  },
  {
    name: "University Admission & Registration System",
    period: "05/2025 - 04/2026",
    role: "Front End Developer",
    stack: "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest.",
    teamSize: 10,
    items: [
      ["Architected high-performance web workflows —", "Designed responsive, SEO-friendly admission and registration pipelines using Next.js, TypeScript, and Redux Toolkit to support complex multi-step user journeys and persistent state."],
      ["Optimized form validation and efficiency —", "Engineered highly validated, reusable form UI components using React Hook Form, Yup, and TypeScript, boosting development efficiency by 15% and minimizing form submission errors."],
      ["Ensured application reliability —", "Maintained high code quality and test coverage through Jest unit testing, robust component architecture, and consistent frontend standards."],
    ],
  },
  {
    name: "Hospitality Management System",
    period: "05/2024 - 05/2025",
    role: "Full-stack Developer",
    stack: "Next.js, React.js, Java Spring Boot, PostgreSQL, RESTful APIs, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest.",
    teamSize: 20,
    items: [
      ["End-to-End Architecture & Design:", "Authored Detailed Design (DD) and Unit Test (UT) documentation while architecting end-to-end workflows connecting Next.js frontends with Java Spring Boot backend services."],
      ["Backend APIs & Business Logic:", "Developed secure RESTful APIs using Java Spring Boot to handle complex hospitality workflows, including reservation queuing, table booking, and billing logic."],
      ["Database Optimization:", "Designed and optimized PostgreSQL database structures to ensure strict data consistency and high-speed query execution."],
      ["Frontend Execution & Quality:", "Built responsive web interfaces and reusable form components using Next.js, Redux Toolkit, and React Hook Form, while maintaining test coverage with Jest."],
    ],
  },
  {
    name: "Banking Transaction System",
    period: "05/2022 - 05/2024",
    role: "Front End Developer",
    stack: "Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest.",
    teamSize: 15,
    items: [
      ["Developed mission-critical financial modules —", "Spearheaded the development of core banking workflows including deposit and loan processing using Next.js and TypeScript."],
      ["Managed complex asynchronous data flows —", "Implemented advanced API side effects and state management using Redux Saga to handle secure financial transaction workflows."],
      ["Built scalable design systems —", "Created reusable UI components as part of the internal design system, driving consistency and improving cross-team development efficiency."],
      ["Drove technical leadership & quality —", "Actively participated in code reviews, mentored junior developers on best coding practices, and contributed to internal tooling to optimize frontend performance."],
    ],
  },
];

const CERTIFICATIONS = [
  "Feb 2025 : Certificate B1 ( Axcela )",
  "Dec 2024 : Certificate A2 ( Axcela )",
];

const AWARDS = [
  "Jan 2025 : Project of the Year - University Admission & Registration System",
  "Jan 2024 : Project of the Year - Banking Transaction System",
  "Jan 2023 : Project of the Year - Banking Transaction System",
];

const ADDITIONAL: [string, string][] = [
  ["Languages:", "Adept at reviewing, clarifying, and confirming technical specs and business requirements in English and experience working with Japanese."],
  ["Self-learning & Research:", "Currently conducting in-depth research on Microservices architecture, CI/CD (GitHub Actions) pipelines, and AWS cloud services."],
  ["Soft Skills:", "Problem-solving skills, time management abilities, effective teamwork, and high adaptability to new technologies. Experience working directly with clients and managing teams as a sub-leader."],
];

const BulletList = ({ items }: { items: string[][] }) => (
  <Typography type="level4" padding="3px 20px 0px 0px">
    <ul>
      {items.map(([label, text]) => (
        <li key={label}>
          <b>{label}</b> {text}
        </li>
      ))}
    </ul>
  </Typography>
);

const SimpleList = ({ items }: { items: string[] }) => (
  <>
    {items.map((item, i) => (
      <div key={item}>
        {i > 0 && <Sperator />}
        <Grid>
          <Typography type="level4">{item}</Typography>
        </Grid>
      </div>
    ))}
  </>
);

function App() {
  return (
    <Container>
      <Grid variant="header" row>
        <div className={styles.background}></div>
        <Flex>
          <Typography>Ung Chan Vinh</Typography>
          <Typography type="level2">FULL-STACK SOFTWARE ENGINEER</Typography>
          <ListBox label="Phone:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              0703337127
            </Typography>
          </ListBox>
          <ListBox label="Email:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="mailto:chanvinh41@gmail.com" style={linkStyle}>chanvinh41@gmail.com</a>
            </Typography>
          </ListBox>
          <ListBox label="Portfolio:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://chanvinh.github.io/portfolio/" style={linkStyle}>https://chanvinh.github.io/portfolio/</a>
            </Typography>
          </ListBox>
          <ListBox label="Location:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              Ho Chi Minh City
            </Typography>
          </ListBox>
        </Flex>
      </Grid>

      <Section title="SUMMARY">
        <Typography type="level4" padding="5px 20px 0px">
          Full-Stack Software Engineer with 4+ years shipping production enterprise web applications across banking, healthcare,
          education, and financial information systems. Own features end-to-end — <b>React/Next.js</b> and <b>Vue.js</b> frontends
          through <b>ASP.NET Core</b>, <b>PHP Laravel</b> and <b>Java Spring Boot</b> RESTful APIs on PostgreSQL, SQL Server, and MySQL —
          with clean architecture, strict validation (Yup, Zod), and RBAC integration. Operating across full product delivery
          lifecycles — designing secure backend services, optimizing database query performance, building accessible UI systems,
          and accelerating development velocity using AI tooling (GitHub Copilot, Cursor AI); most recently a financial document
          workflow system, a clinic queue management SaaS, and an enterprise banking transaction platform.
        </Typography>
      </Section>

      <Section title="EDUCATION">
        <Grid row>
          <Typography type="level4">2018 - 04/2022</Typography>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              HUTECH - Ho Chi Minh City University of Technology
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Information Technology
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Bachelor's degree in Information Technology
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="SKILLS">
        {SKILLS.map(([label, value], i) => (
          <div key={label}>
            {i > 0 && <Sperator />}
            <Grid row>
              <Typography type="level3">{label}</Typography>
              <Flex>
                <Typography type="level4" padding="3px 20px 0px 0px">
                  {value}
                </Typography>
              </Flex>
            </Grid>
          </div>
        ))}
      </Section>

      <Section title="WORK EXPERIENCE">
        <Grid row>
          <Typography type="level4">05/2022 - Present</Typography>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px" decoration="underline">
              ISB VIET NAM (IVC)
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Full-Stack Software Engineer
            </Typography>
            <BulletList items={EXPERIENCE} />
          </Flex>
        </Grid>
      </Section>

      <Section title="PROJECTS">
        {PROJECTS.map((p, i) => (
          <div key={p.name}>
            {i > 0 && <Sperator />}
            <Grid row>
              <Typography type="level4">{p.period}</Typography>
              <Flex>
                <Typography type="level3" padding="3px 20px 0px 0px">
                  {p.name}
                </Typography>
                <Typography type="level4" padding="3px 20px 0px 0px">
                  <b>{p.role}</b>
                </Typography>
                <Typography type="level4" padding="3px 20px 0px 0px">
                  <b>Tech Stack:</b> {p.stack}
                </Typography>
                <Typography type="level4" padding="3px 20px 0px 0px">
                  <b>Team size:</b> {p.teamSize}
                </Typography>
                <Typography type="level4" padding="3px 20px 0px 0px">
                  <b>Responsibility:</b>
                </Typography>
                <BulletList items={p.items} />
              </Flex>
            </Grid>
          </div>
        ))}
      </Section>

      <Section title="CERTIFICATIONS">
        <SimpleList items={CERTIFICATIONS} />
      </Section>

      <Section title="HONORS & AWARDS">
        <SimpleList items={AWARDS} />
      </Section>

      <Section title="ADDITIONAL INFORMATION">
        <Typography type="level4" padding="5px 20px 0px">
          {ADDITIONAL.map(([label, text]) => (
            <p key={label}>
              <b>{label}</b> {text}
            </p>
          ))}
        </Typography>
      </Section>
    </Container>
  );
}

export default App;
