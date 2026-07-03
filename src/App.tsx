import "./App.css";
import Container from "./components/container/container";
import Flex from "./components/flex/flex";
import Grid from "./components/grid/grid";
import ListBox from "./components/listbox/lisbox";
import Section from "./components/section/section";
import Spacer from "./components/spacer/spacer";
import Sperator from "./components/sperator/sperator";
import Typography from "./components/typography/typography";

function App() {
  return (
    <Container>
      <Grid variant="header" row>
        <div className="background"></div>
        <Flex>
          <Typography>Ung Chan Vinh</Typography>
          <Typography type="level2">Software Developer</Typography>
          <ListBox label="Phone:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              0703337127
            </Typography>
          </ListBox>
          <ListBox label="Email:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              chanvinh41@gmail.com
            </Typography>
          </ListBox>
          <ListBox label="Address:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              74 Tan Hung Street, District 5, Ho Chi Minh City
            </Typography>
          </ListBox>
          <ListBox label="LinkedIn:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://www.linkedin.com/in/ch%E1%BA%A5n-vinh-26b930215/">https://www.linkedin.com/in/ch%E1%BA%A5n-vinh-26b930215/</a>
            </Typography>
          </ListBox>
          <ListBox label="Portfolio:" margin="8px 0px">
            <Typography type="level4" padding="3px 20px 0px 0px">
              <a href="https://chanvinh.github.io/portfolio/">https://chanvinh.github.io/portfolio/</a>
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
          <Typography type="level3">DevOps & CI/CD:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Docker, Docker Compose, GitLab CI/CD
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
              <b>Tech stack:</b> ASP.NET Core 8, VueJS, SQL Server,
              Quasar Build, Vitest, Postman, SCSS, Postman, Copilot.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>Inspection Scheduling</li>
                <li>Inspection Checklist Management</li>
                <li>Photo & Document Upload</li>
                <li>Digital Signature</li>
                <li>Defect Reporting</li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>Developed frontend features using Vue.js and backend services with ASP.NET Core 8.</li>
                <li>Implemented inspection scheduling, checklist management, document upload, and digital signature functionalities.</li>
                <li>Designed and maintained SQL Server database structures and queries.</li>
                <li>
                  Participated in requirement analysis and translated business requirements into technical solutions.
                </li>
                <li>
                  Deployed application updates and supported user acceptance testing.
                </li>
                <li>
                  Worked closely with clients to review documentation and finalize delivered functionalities.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
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
              Smart Medical Officer System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Google Apps Script(GAS), A5:SQL, JQuery, Cursor
              AI.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>Manage and monitor doctor information activities.</li>
                <li>Analyze and report doctor information data.</li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>Developed management dashboards and reporting features using Google Apps Script and jQuery.</li>
                <li>Implemented business logic for monitoring and analyzing medical activity data.</li>
                <li>Created technical documentation and Unit Test documentation for implemented features.</li>
                <li>Performed feature testing and QA validation before deployment.</li>
                <li>
                  Supported deployment activities and confirmed completed features with clients.
                </li>
                <li>
                  Worked directly with stakeholders to clarify requirements and improve system usability.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
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
              University Admission & Registration System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> NextJs, Typescript, React Hook Form, Redux
              Toolkit, i18n, Jest.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>Search and gather information about universities.</li>
                <li>Register for the exam online.</li>
                <li>Download and print the exam admission ticket.</li>
                <li>
                  Check the exam results and receive the admission notification.
                </li>
                <li>Complete the enrollment procedures.</li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>
                  Developed responsive web applications using Next.js and TypeScript.
                </li>
                <li>
                  Built dynamic forms using React Hook Form with comprehensive client-side validation.
                </li>
                <li>
                  Managed application state using Redux Toolkit.
                </li>
                <li>
                  Integrated RESTful APIs and implemented multilingual support using i18n.
                </li>
                <li>
                  Designed reusable components to improve consistency and development efficiency.
                </li>
                <li>
                  Wrote Jest unit tests to ensure code quality and maintainability.
                </li>
                <li>
                  Participated in feature deployment and validated completed functionalities with clients.
                </li>
                <li>
                  Collaborated with designers, backend developers, and QA engineers to deliver project milestones.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
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
              Hotel Management System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> Angular, CSS, HTML, PostgreSQL, Excel, VB.Net,
              Java spring batch.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>
                  Manage hotel operations such as accounts, room bookings, and
                  room management.
                </li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>Developed hotel management modules using Angular based on business requirements.</li>
                <li>Implemented user interfaces following detailed design documents.</li>
                <li>Prepared Detail Design and Unit Test documentation for assigned features.</li>
                <li>Maintained and enhanced existing functionalities while ensuring application stability.</li>
                <li>Fixed defects identified during testing and production support.</li>
                <li>Collaborated with developers, QA engineers, and business analysts throughout the project lifecycle.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
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
              Knowledge Management System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP, HTML, JavaScript, JQuery, SASS,
              DataTableJs...
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>Manage admin activities such as account management.</li>
                <li>CRUD operations.</li>
                <li>Track progress.</li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>Developed administration modules using PHP, JavaScript, jQuery, and HTML.</li>
                <li>
                  Implemented authentication, user management, and CRUD functionalities for administrators.
                </li>
                <li>Enhanced existing features and maintained legacy source code.</li>
                <li>Upgraded the application from PHP 5 to PHP 8 while ensuring backward compatibility.</li>
                <li>Optimized SQL queries and improved application performance.</li>
                <li>Worked closely with team members to analyze requirements and deliver requested features.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
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
              Core Banking System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> TypeScript, Next.js, Redux Saga, Styled
              Components, i18n, Jest, ReactJs
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>
                  Manage banking activities such as accounts, deposits, and
                  loans.
                </li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>
                  Developed and maintained enterprise banking modules using React.js, Next.js, and TypeScript.
                </li>
                <li>
                  Built reusable and scalable UI components following the project's design system.
                </li>
                <li>Integrated RESTful APIs and handled asynchronous data using Redux Saga.</li>
                <li>Implemented new features and enhanced existing functionalities based on business requirements.</li>
                <li>
                  Wrote comprehensive Jest unit tests to ensure application reliability and maintainability.
                </li>
                <li>
                  Participated in code reviews and shared technical knowledge with team members.
                </li>
                <li>
                  Investigated and resolved production issues while optimizing application performance.
                </li>
                <li>
                  Developed internal tools to improve development efficiency and team productivity.
                </li>
                <li>
                  Collaborated closely with backend developers, QA engineers, and business analysts throughout the development lifecycle.
                </li>
                <li>
                  Reviewed design documents and validated implemented features before client delivery.
                </li>
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
