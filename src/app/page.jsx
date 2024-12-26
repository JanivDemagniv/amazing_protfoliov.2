import Technolgy from "./components/Technolgy";
import Title from "./components/Title";
import styles from "./page.module.css";
import skills from "./data/skills";
import Timeline from "./components/Timeline";
import projects from "./data/projects";
import ImageSlider from "./components/ImageSlider";
import games from "./data/games";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className={styles.main}>
      <Title
        title="Yaniv Romem"
        subtitle="FullStack Developer"
        src='./protfolioPic.jpg'
        alt='ProfilePic'
      />
      <Technolgy skills={skills} />
      <br />
      <About />
      <br />
      <Title
        title='Game Center'
        subtitle='Here are some games I have created'
        src='./gamecenter.jpg'
        alt='gameCenter'
      />
      <ImageSlider slides={games} />
      <Title
        title='My Projects'
        subtitle='My Proggress as a Developer'
        src='./projects.jpg'
        alt='projects'
      />
      <Timeline events={projects} />
      <br />
      <Title
        title='Contact Me'
        subtitle='Send me mail :)'
        src='./sendmail.jpeg'
        alt='send mail'
      />
      <ContactForm />
    </div>
  );
}
