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
          <Typography type="level2">FULL STACK DEVELOPER (React.js | Next.js | TypeScript |
            ASP.NET Core | Laravel)</Typography>
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
              <a href="https://www.linkedin.com/in/ung-chan-vinh-26b930215/" style={{ textDecoration: 'none', color: '#3B82F6' }}>Chấn Vinh</a>
            </Typography>
          </ListBox>
          <ListBox label="Portfolio:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://chanvinh.github.io/portfolio/" style={{ textDecoration: 'none', color: '#3B82F6' }}>Portfolio</a>
            </Typography>
          </ListBox>
        </Flex>
      </Grid>

      <Section title="PROFESSIONAL SUMMARY">
        <Typography type="level4" padding="5px 20px 0px">
          Full Stack Developer with 4+ years of experience building enterprise web applications, with strong expertise in frontend
          development using <b>React.js, Next.js, TypeScript</b>, and <b>JavaScript</b>. Experienced in developing scalable UI architectures, state
          management, API integration, automated testing, and backend services using ASP.NET Core and PHP Laravel. Worked across
          banking, education, healthcare, financial information, and business management systems, collaborating with cross-functional
          teams and clients to deliver production-ready solutions.
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
          <Typography type="level3">Languages:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              JavaScript, TypeScript, HTML5, CSS3, SQL
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Frontend:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              React.js, Next.js, Vue.js, Angular, React Native
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">State Management:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Redux Toolkit, Redux Saga, Zustand, React Query
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">UI & Forms:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Tailwind CSS, Material UI, Bootstrap, React Hook Form,
              Formik, Yup
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Backend:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              ASP.NET Core, PHP Laravel, RESTful API, JWT Authentication
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
          <Typography type="level3">Testing:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Jest, React Testing Library, Vitest, Unit Testing
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid row>
          <Typography type="level3">Development Tools:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Git, GitLab, Docker, Postman, Figma, GitHub Copilot, Cursor AI
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="WORK EXPERIENCE">
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
              Banking Transaction System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>May 2022 – September 2024 | Team Size: 15</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> TypeScript, Next.js, React.js, Redux Saga, Styled Components, i18n, Jest.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li>Developed and maintained mission-critical banking modules, including deposit and loan
                  workflows, using Next.js, React.js, and TypeScript.
                </li>
                <li>Implemented complex asynchronous data flows and API side effects using Redux Saga
                  to support financial transaction workflows.
                </li>
                <li>Built reusable and scalable UI components as part of the internal design system,
                  improving consistency and development efficiency across the team.
                </li>
                <li> Participated in code reviews and mentored junior developers to improve code quality
                  and development practices.
                </li>
                <li> Contributed to internal development tools and workflow improvements to increase
                  frontend development efficiency.
                </li>
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
              <b>March 2025 – January 2026 | Team Size: 10</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Next.js, React.js, TypeScript, React Hook Form, Redux Toolkit, i18n, Jest.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li> Architected responsive and SEO-friendly admission and registration workflows using
                  Next.js, TypeScript, and Redux Toolkit, supporting complex multi-step processes and
                  persistent user state.
                </li>
                <li>Built reusable, highly validated form and UI components using React Hook Form, Yup,
                  and TypeScript, improving development efficiency by 15% across subsequent modules
                  while reducing form submission errors.
                </li>
                <li>Maintained application reliability through Jest unit testing, reusable component
                  architecture, and consistent frontend development practices.
                </li>
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
              <b>December 2024 – February 2025; February 2026 – April 2026 | Team Size: 10</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Angular, HTML, CSS, PostgreSQL, Java Spring Batch, VB.Net.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li>DDeveloped core hotel operation modules, including room booking and account
                  management, using Angular.
                </li>
                <li> Implemented responsive and pixel-perfect interfaces based on design specifications
                  while resolving critical QA and production defects.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>

        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Financial Information System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>April 2026 – July 2026 | Team Size: 6</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> ASP.NET Core 8, VueJS, SQL Server, Quasar Build, Vitest, Postman, SCSS.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Productivity Tools:</b> GitHub Copilot (Used for boilerplate code generation and Vitest unit testing scaffolding).
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li>Developed and optimized core modules including Inspection Scheduling and Digital
                  Signature using Vue.js and Quasar.
                </li>
                <li>Collaborated directly with clients to analyze business requirements and translate them
                  into technical solutions.
                </li>
                <li>Supported User Acceptance Testing (UAT) by resolving functional issues and clarifying
                  technical requirements.
                </li>
                <li>Contributed to backend service development and automated test-case generation using
                  GitHub Copilot, reducing feature delivery time by 20%.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>

        <Sperator />
        <Grid>
          <Flex>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Pubcare System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>April 2026 – July 2026 | Team Size: 5</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP Laravel, JavaScript, jQuery, Docker, MySQL
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li>Developed full-stack modules for patient queuing, appointment booking, and automated
                  notifications.
                </li>
                <li>Optimized frontend workflows and backend REST APIs for medical staff while
                  implementing input validation and role-based access control.
                </li>
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
              <b>October 2024 – November 2024 | Team Size: 3</b>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP, JavaScript, JQuery, SASS, DataTableJs, MySQL
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <ul>
                <li> Modernized a legacy application from PHP 5 to PHP 8 while maintaining existing
                  business functionality and improving application security.
                </li>
                <li>Optimized legacy SQL queries and data rendering tables (DataTableJs), reducing page
                  load times for administrative dashboards.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
      </Section>
    </Container >
  );
}

export default App;
