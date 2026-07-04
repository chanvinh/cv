import "./App.css";
import Container from "./components/container/container";
import Flex from "./components/flex/flex";
import Grid from "./components/grid/grid";
import ListBox from "./components/listbox/lisbox";
import Section from "./components/section/section";
import Sperator from "./components/sperator/sperator";
import Typography from "./components/typography/typography";

function App() {
  return (
    <Container>
      <Grid variant="header" row>
        <div className="background"></div>
        <Flex>
          <Typography>Ung Chan Vinh</Typography>
          <Typography type="level2">FRONTEND DEVELOPER</Typography>
          <ListBox label="Phone:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              0703337127
            </Typography>
          </ListBox>
          <ListBox label="Email:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="mailto:chanvinh41@gmail.com" style={{ textDecoration: 'none', color: '#3B82F6' }}>chanvinh41@gmail.com</a>
            </Typography>
          </ListBox>
          <ListBox label="LinkedIn:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://www.linkedin.com/in/ch%E1%BA%A5n-vinh-26b930215/" style={{ textDecoration: 'none', color: '#3B82F6' }}>Chấn Vinh</a>
            </Typography>
          </ListBox>
          <ListBox label="Portfolio:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://chanvinh.github.io/portfolio/" style={{ textDecoration: 'none', color: '#3B82F6' }}>Portfolio</a>
            </Typography>
          </ListBox>
        </Flex>
      </Grid>

      <Section title="GENERAL OBJECTIVE">
        <Typography type="level4" padding="5px 20px 0px">
          Frontend Developer with over 3.5 years of experience building scalable web applications using <b>React.js, Next.js, React Native, TypeScript</b>, and modern frontend technologies.
        </Typography>
        <Typography type="level4" padding="5px 20px 0px">
          Skilled in component-based architecture, state management, API integration, and unit testing. Passionate about leveraging AI-assisted development tools such as <b>ChatGPT, Cursor AI, GitHub Copilot, and Gemini</b> to improve development efficiency and code quality.
        </Typography>
        <Typography type="level4" padding="5px 20px 0px">
          A proactive team player with strong problem-solving, time management, and communication skills, capable of adapting quickly to new technologies and business requirements.
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
              Information Technology (IT)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Bachelor's degree
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="SKILLS">
        <Grid row>
          <Typography type="level3">Programming Languages:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              JavaScript, TypeScript, HTML5, CSS3
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Frontend Frameworks:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              React.js, Next.js, Vue.js, React Native
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">UI Frameworks:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Bootstrap, Material UI, Tailwind CSS
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">State Management:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Redux, Redux Toolkit, Zustand, React Query
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Form Libraries:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              React Hook Form, Formik, Yup
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Testing:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Jest, React Testing Library, Vitest, Unit Testing
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Backend / API:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              RESTful API, Axios, Fetch API, JWT Authentication
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Database:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              PostgreSQL, SQL Server, MySQL
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">AI & Productivity Tools:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              ChatGPT, Cursor AI, GitHub Copilot, Gemini, Prompt Engineering
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Tools:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Postman, Figma
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Source Control:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Git, Gitlab
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="EXPERIENCES">
        <Grid>
          <Flex>
            <Typography
              type="level3"
              padding="3px 20px 0px 0px"
              decoration="underline"
            >
              ISB Vietnam - IVC
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Financial Information System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Productivity Tools:</b> GitHub Copilot (Used for boilerplate code generation and Vitest unit testing scaffolding).
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Developed and optimized core modules including Inspection Scheduling and Digital Signature, ensuring seamless cross-platform user experience using Vue.js and Quasar.</li>
                <li>Designed scalable SQL Server database schemas and optimized complex stored procedures, improving query response times for heavy checklist reports.</li>
                <li>Leveraged GitHub Copilot to accelerate backend service development and test-case generation, reducing feature delivery time by 20% while maintaining high code quality.</li>
                <li>Collaborated directly with clients to analyze business requirements, translating them into robust technical solutions and ensuring successful User Acceptance Testing (UAT).</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Smart Medical Officer System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Google Apps Script (GAS), JQuery, A5:SQL
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Productivity Tools:</b> Cursor AI (Used for legacy code refactoring and rapid prototyping).
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Built dynamic management dashboards and analytical reporting features using Google Apps Script and jQuery, providing stakeholders with real-time insights into doctor activities.</li>
                <li>Utilized Cursor AI to accelerate the refactoring of legacy jQuery scripts and automate Unit Test documentation, cutting down QA validation cycles.</li>
                <li>Partnered directly with stakeholders to clarify ambiguous requirements, leading to a significant improvement in system usability and user adoption.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              University Admission & Registration System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Next.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Architected responsive, SEO-friendly web pages using Next.js and TypeScript, delivering a seamless experience for high-traffic online exam registrations.</li>
                <li>Streamlined global state management by implementing Redux Toolkit to handle complex, multi-step admission workflows and persistent user data across sessions.</li>
                <li>Engineered dynamic, highly-validated forms using React Hook Form and Yup, reducing form submission errors and improving client-side data integrity.</li>
                <li>Established a reusable UI component library that boosted development efficiency by 15% for subsequent modules.</li>
                <li>Maintained code reliability by achieving high test coverage with Jest unit tests.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Hotel Management System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Angular, HTML, CSS, PostgreSQL, Java Spring Batch, VB.Net.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Developed core hotel operation modules (room bookings and account management) using Angular, adhering strictly to complex enterprise business logic.</li>
                <li>Delivered pixel-perfect user interfaces based on detailed design documents, ensuring cross-browser compatibility and application stability.</li>
                <li>Proactively resolved critical defects identified during QA and production phases, minimizing system downtime during peak booking seasons.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Knowledge Management System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP, JavaScript, JQuery, SASS, DataTableJs, MySQL
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Successfully modernized the legacy application by migrating the codebase from PHP 5 to PHP 8, ensuring 100% backward compatibility while enhancing overall system security.</li>
                <li>Optimized legacy SQL queries and data rendering tables (DataTableJs), reducing page load times for administrative dashboards.</li>
                <li>Implemented secure authentication and comprehensive CRUD operations for high-privilege administrator modules.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Core Banking System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> TypeScript, Next.js, React.js, Redux Saga, Styled Components, i18n, Jest.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Key Achievements:</b>
              <ul>
                <li>Developed and maintained mission-critical enterprise banking modules (deposits, loans) using Next.js and TypeScript, meeting strict performance and security standards.</li>
                <li>Managed complex asynchronous data flows and API side-effects efficiently using Redux Saga, ensuring real-time data consistency for financial transactions.</li>
                <li>Contributed to the internal design system by building scalable, reusable UI components, improving front-end delivery velocity across the wider team.</li>
                <li>Drove continuous improvement by participating in code reviews, mentoring junior members, and building internal tools to optimize development workflows.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="CERTIFICATION">
        <Grid>
          <Typography type="level3">2022:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              B1 English Certificate (HUTECH - Ho Chi Minh City University of
              Technology)
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="HOBBIES">
        <Typography type="level4" padding="5px 20px 0px">
          Continuous learning, Building personal projects, Exploring AI-assisted software development, Sports.
        </Typography>
      </Section>
    </Container>
  );
}

export default App;
