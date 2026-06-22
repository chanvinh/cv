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
      <Grid variant="header">
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
        </Flex>
      </Grid>

      <Section title="GENERAL OBJECTIVE">
        <Typography type="level4" padding="5px 20px 0px">
          Frontend Developer with over 3.5 years of experience building scalable web applications using <b>React.js, Next.js, TypeScript</b>, and modern frontend technologies.
        </Typography>
        <Typography type="level4" padding="5px 20px 0px">
          Skilled in component-based architecture, state management, API integration, and unit testing. Passionate about leveraging AI-assisted development tools such as <b>ChatGPT, Cursor AI, GitHub Copilot, and Gemini</b> to improve development efficiency and code quality.
        </Typography>
        <Typography type="level4" padding="5px 20px 0px">
          A proactive team player with strong problem-solving, time management, and communication skills, capable of adapting quickly to new technologies and business requirements.
        </Typography>
      </Section>

      <Section title="EDUCATION">
        <Grid>
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

      <Section title="EXPERIENCES">
        <Grid>
          <Typography type="level3">04/2026 - 07/2026</Typography>
          <Flex>
            <Typography
              type="level3"
              padding="3px 20px 0px 0px"
              decoration="underline"
            >
              ISB Vietnam - IVC
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Financial Information System (Full Stack) (Support Team)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> ASP .NET framework CORE 8, VueJS, SQL Server,
              Quarsar Build, Vitest, Postman, SCSS, Postman, Copilot.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Team size:</b> 5
            </Typography>
            <Spacer height="15px" />
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
                <li>Requirement gathering and understanding.</li>
                <li>Develop and implement the system features.</li>
                <li>Write the QA for the system features.</li>
                <li>
                  Deploy the system features and confirm the documentation with
                  the client to finalize the system as per the client's request.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">04/2026 - 07/2026</Typography>
          <Flex>
            <Typography
              type="level3"
              padding="3px 20px 0px 0px"
              decoration="underline"
            >
              ISB Vietnam - IVC
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Public Health & Care System (Full Stack)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP, Laravel, JQuery, MySQL, Docker, Docker
              Compose, Postman, Cursor AI.
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Team size:</b> 2
            </Typography>
            <Spacer height="15px" />
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Systems:</b>
              <ul>
                <li>Healthcare Management System (PHR/EHR).</li>
                <li>Patient Management System</li>
                <li>Appointment Scheduling System</li>
                <li>Care Coordination System</li>
                <li>Clinical Data Management System</li>
              </ul>
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Responsibilities:</b>
              <ul>
                <li>Develop and implement the system features.</li>
                <li>Write the documentation for the system features.</li>
                <li>Write the QA for the system features.</li>
                <li>
                  Deploy the system features and confirm the documentation with
                  the client to finalize the page as per the client's request.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">01/2026 - 03/2026</Typography>
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
              <b>Team size:</b> 2
            </Typography>
            <Spacer height="15px" />
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
                <li>Develop and implement the system features.</li>
                <li>Write the documentation for the system features.</li>
                <li>Write the unit test for the system features.</li>
                <li>Write the QA for the system features.</li>
                <li>
                  Deploy the system features and confirm the documentation with
                  the client to finalize the page as per the client's request.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">05/2025 - 01/2026</Typography>
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
              <b>Team size:</b> 4
            </Typography>
            <Spacer height="15px" />
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
                  Design components, interfaces, write Jest tests, and write QA.
                </li>
                <li>
                  Deploy the system features and confirm the documentation with
                  the client to finalize the page as per the client's request.
                </li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">
            02/2025 — 05/2025 & 03/2026 — 04/2026
          </Typography>
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
              <b>Team size:</b> 14
            </Typography>
            <Spacer height="15px" />
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
                <li>Write the Detail Design document.</li>
                <li>Write the Unit Test document.</li>
                <li>Implemented clean and robust code following DD.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">01/2025 - 03/2025</Typography>
          <Flex>
            <Typography
              type="level3"
              padding="3px 20px 0px 0px"
              decoration="underline"
            >
              ISB Vietnam - IVC
            </Typography>
            <Typography type="level3" padding="3px 20px 0px 0px">
              Knowledge Management System (Front End)
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Tech stack:</b> PHP, HTML, JavaScript, JQuery, SASS,
              DataTableJs...
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Team size:</b> 2
            </Typography>
            <Spacer height="15px" />
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
                <li>Create admin, login, and management pages.</li>
                <li>
                  Write management functions for login and CRUD operations in
                  the management page.
                </li>
                <li>Upgrade PHP version from 5.0 to 8.0.</li>
              </ul>
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">05/2022 - 12/2024</Typography>
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
              Component, i18n, Jest, ReactJs
            </Typography>
            <Typography type="level4" padding="3px 20px 0px 0px">
              <b>Team size:</b> 14
            </Typography>
            <Spacer height="15px" />
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
                  Implement new features, improve code, and x issues as per
                  client requests.
                </li>
                <li>
                  Support colleagues, identify solutions, and resolve issues
                  arising during the work process.
                </li>
                <li>Develop tools to enhance work e ciency.</li>
                <li>Review code and assist other team members.</li>
                <li>
                  Additionally, con rm features, design documentation, and
                  correct any errors in the documentation for the client.
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
              B1 English Certi cate (HUTECH - Ho Chi Minh City University of
              Technology)
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="SKILLS">
        <Grid>
          <Typography type="level3">Programming Languages:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              JavaScript, TypeScript, HTML5, CSS3
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Frontend Frameworks:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              React.js, Next.js, Vue.js, React Native
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">State Management:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Redux, Redux Toolkit, Zustand, React Query
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Form Libraries:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              React Hook Form, Formik, Yup
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Testing:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Jest, React Testing Library, Vitest, Unit Testing
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Backend / API:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              RESTful API, Axios, Fetch API, JWT Authentication
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Database:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              PostgreSQL, SQL Server, MySQL
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">UI Frameworks:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Bootstrap, Material UI, Tailwind CSS
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">AI & Productivity Tools:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              ChatGPT, Cursor AI, GitHub Copilot, Gemini, Prompt Engineering
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">DevOps & CI/CD:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Docker, Docker Compose, GitLab CI/CD
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Tools:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Postman, Figma
            </Typography>
          </Flex>
        </Grid>
        <Sperator />
        <Grid>
          <Typography type="level3">Source Control:</Typography>
          <Flex>
            <Typography type="level4" padding="3px 20px 0px 0px">
              Git, Gitlab
            </Typography>
          </Flex>
        </Grid>
      </Section>

      <Section title="HOBBIES">
        <Typography type="level4" padding="5px 20px 0px">
          Play sports and participate in activities both inside and outside the
          company.
        </Typography>
      </Section>
    </Container>
  );
}

export default App;
