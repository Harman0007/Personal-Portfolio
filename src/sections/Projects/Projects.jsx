
import styles from './ProjectsStyles.module.css';
import passgen from '../../assets/passgen.jpeg';
import todo1 from '../../assets/todo1.png';
import order from '../../assets/order.png';
import ProjectCard from '../../common/ProjectCard';
import quiz from '../../assets/quiz.png';
import poke from '../../assets/poke.jpeg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={quiz}
          link="https://66a270d32db6476168810aab--effortless-monstera-0446ca.netlify.app/"
          h3="Quiz App"
          p="I built an app using React, HTML, CSS, JavaScript, and the sleek Tailwind CSS framework. Whether you’re 
testing your knowledge, preparing for exams, or just having fun, QuizzyWeb has you covered. Create custom 
quizzes, challenge friends, and track your progress—all wrapped in a user-friendly interface"
        />
        <ProjectCard
          src={passgen}
          link="https://nimble-shortbread-752ac9.netlify.app/"
          h3="Password Generator"
          p=" I developed a robust password generator using HTML, CSS, JavaScript, React.js, Tailwind, and Vite. This 
application allows users to customize their passwords by selecting whether to include numbers and characters. 
Users can also adjust the desired password length and easily copy the generated password with a single click. 
The project combines modern front-end technologies to deliver a seamless and user-friendly experience."
        />
        <ProjectCard
          src={todo1}
          link="https://to-do-website-sandy.vercel.app/"
          h3="To-Do"
          p=" I developed a To-Do List application using JavaScript and CSS, showcasing my proficiency in frontend web 
development. This project demonstrates my ability to create responsive and intuitive user interfaces while 
implementing key functionalities such as task management and dynamic updates."
        />
        <ProjectCard
          src={order}
          link="https://ordermate-ac8stpfx6-guddu11bhaiya-gmailcoms-projects.vercel.app/"
          h3="Order App"
          p=" I built an landing page using Next.js, HTML, CSS, and the magic of JavaScript. Our virtual kitchen serves up 
delectable dishes without brick-and-mortar boundaries. With a dash of Tailwind CSS for style and a sprinkle of 
shadow effects (because every dish needs a little drama), we’re redefining food delivery. Explore our menu, 
savor the convenience, and let your taste buds soar!
"
        />
        <ProjectCard
          src={poke}
          link="https://66a487659788dcbf191962da--ubiquitous-chebakia-d6fece.netlify.app/"
          h3="Pokemon Cards"
          p="Our magical app summons Pokémon cards—each adorned with a captivating image and its mystical name. Whether you’re a seasoned Trainer or a curious newbie, dive into our card collection. And guess what? We’ve sprinkled stardust on a search bar—type a Pokémon’s name, hit enter, and watch the cards materialize. Ready to catch 'em digitally? Let’s go! "
        />
      </div>
    </section>
  );
}

export default Projects;