import '../main/About.css';
import jose from '../../media/jose-profile.jpeg';
import kisub from '../../media/Me.png';
import jalamang from '../../media/jj-profile1.jpeg';
import projectPic from '../../media/project-pic.jpg';
import teamPic from '../../media/team-pic.jpg';
import linkedInLogo from '../../media/linkedIn.png';
import twitterLogo from '../../media/twttier.png';
import githubLogo from '../../media/github.jpeg';
import arrowIcon from '../../media/arrow.png';

const About = ({ currBGColor }) => {
  return (
    <main
      style={{
        backgroundColor: currBGColor,
        color: currBGColor === 'RGB(24, 24, 24)' ? 'white' : 'initial',
      }}
    >
      <div className="about-container">
        <img className="project-pic" src={projectPic} />
        <article className="project-description">
          <h1>About our project</h1>
          <p>
            We believe learning should start wherever you are. Our mission is to
            give people around the world access to education that they seek.
            This project was produced with functional components and react
            hooks. The purpose of it is to create a clone of youtube with a few
            additional features we decided to add in order to create a better
            user experience.
          </p>
        </article>

        <img className="team-pic" src={teamPic} />
        <article className="team-description">
          <h1>Who we are</h1>
          <p>
            Our team is composed of people with unique talents. The three
            co-founders Jose, Ki Sub and Jalamang became friends during their
            time at the prestigious Pursuit Fellowship where they received their
            training to become a Full-Stack Web developer. JKJ has now become a
            company with +30 employees from all around the world including
            Spain, Mexico, Island, and their home USA.
          </p>
        </article>
      </div>

      <article className="team-list">
        <h1>Meet our team</h1>
        <div className="about-jose-profile">
          <a
            href="https://github.com/JoseBorbon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jose} alt="jose's profile" />
            <h4>Jose Borbon, Team Lead</h4>
            <p>Cloud Master at IBM</p>
            <a
              href="https://www.linkedin.com/in/joseborbon/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInLogo} className="logos" />
            </a>
            <a
              href="https://twitter.com/JoinPursuit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterLogo} className="logos-resize" />
            </a>

            <a
              href="https://github.com/JoseBorbon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} className="logos-resize" />
            </a>
          </a>
          <div className="jose-learn-about-page">
            <p>Learn More About Jose</p>
            <img className="arrow-icon" src={arrowIcon} />
          </div>
        </div>
        {/* <article className="about-jose-bio">
          <p>
            Former Facebook IT Employee who seeks new challenges. I am a Full
            Stack Software Engineer that specializes in the MERN stack. On the
            side I'm pursuing an IBM Full Stack Cloud Developer Certification
            and I'm a volunteer co-organizer for NYC Coders. My extracurricular
            activities include running marathons, traveling, watching anime,
            playing video games and building computers.
          </p>
        </article> */}

        <div className="about-ki-sub-profile">
          <a
            href="https://github.com/kisublee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={kisub} alt="kisub's profile" />
            <h4>Ki Sub Lee, Good employee</h4>
            <p>Full-Stack Web Developer at Twitter</p>
            <a
              href="https://www.linkedin.com/in/ki-sub-can-do-it/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInLogo} className="logos" />{' '}
            </a>
            <a
              href="https://twitter.com/JoinPursuit"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterLogo} className="logos-resize" />
            </a>

            <a
              href="https://github.com/kisublee"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} className="logos-resize" />
            </a>
          </a>
          <div className="kisub-learn-about-page">
            <p>Learn More About Ki Sub</p>
            <img className="arrow-icon" src={arrowIcon} />
          </div>
        </div>
        {/* <article className="about-ki-sub-bio">
          <p>
            Full Stack Web developer with a background in studio art. I have a
            great interest in building visually beautiful and engaging apps. I
            am currently working to understand how tech can help more people
            learn about stories that often remain untold and preserve those
            stories for the future generations to come, starting right here in
            the USA. During my spare time, I like to run, paint, or play soccer.
          </p>
        </article> */}
        <div className="about-jalamang-profile">
          <a
            href="https://github.com/Jalamang"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jalamang} alt="jalamang's profile" />
            <h4>Jalamang Janka, Good employee</h4>
            <p>Full-Stack Web Developer at Amazon</p>

            <a
              href="https://www.linkedin.com/in/jalamang/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInLogo} className="logos" />{' '}
            </a>
            <a
              href="https://twitter.com/jalaminy"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterLogo} className="logos-resize" />
            </a>

            <a
              href="https://github.com/Jalamang"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} className="logos-resize" />
            </a>
          </a>
          <div className="jalamang-learn-about-page">
            <p>Learn More About Jalamang</p>
            <img className="arrow-icon" src={arrowIcon} />
          </div>
        </div>
        {/* <article className="about-jalamang-bio">
          <p>
            Self-motivated, results-driven, and passionate about technology,
            constantly learning and self-educating in today's ever-changing IT
            field in order to meet the demands of the employer. I completed a
            bachelor's degree in Computer Information Systems with fundamental
            knowledge in Java, Python, CSS, JavaScript, and SQL/Oracle Database.
          </p>
          </article> */}
      </article>
    </main>
  );
};

export default About;
