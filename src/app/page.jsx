import Button from "./components/smallComponents/Button";
import Title from "./components/smallComponents/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Title title="Main Page" subtitle="Here is the main page" />
      <div className={styles.aboutAll}>
        <div className={styles.aboutHeader}>
          <div className={styles.header}>
            <h2>Yaniv Romem</h2>
            <h5>Small Summary</h5>
          </div>
          <div className={styles.imgHeader}>
            <img src="./protfolioPic.jpg" alt="Profile Picture" />
          </div>
        </div>
        <p>
          My name is Yaniv Romem, I'm 32 form Tel Aviv. most of my life I tried to pursue my life goal to become a musician. trough out the years I realized that music is my love, but not my proffetion. I dicided to take a change in my life and go back to my old dream to become a web developer. as a kid I used to build websites with photoshop and HTML, back then I didn't know English but it didn't bother me finding the relvnte code I needed for my websites. I do belive that my life expriens will help me get along in any working enviorment
        </p>
        <Button to="#" label="Download my CV" />
      </div>
      <div className={styles.latest}>
        <div>
          <h2>Latest Projects:</h2>
          <h6>Watch My latest Projects</h6>
        </div>
        <div>
          <h3>
            Music Blog Project
          </h3>
          <p>
            the project blabla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iste quisquam expedita atque animi quo molestiae, deleniti praesentium alias officiis sit, repellat pariatur numquam vero tempore perferendis. Doloribus id magni corporis itaque, odio fugit aperiam laboriosam perspiciatis fuga aspernatur sapiente provident quod velit quae? Quaerat cupiditate fuga facere delectus ex facilis nulla officia velit, nobis quo doloremque dolore est qui autem molestiae. Debitis maxime deleniti sunt culpa obcaecati doloribus, quidem excepturi consectetur facere dolores porro, ipsam blanditiis nobis, illum quas autem eaque cum sequi possimus non cupiditate deserunt aperiam? Reiciendis, error doloribus deserunt sed iste, dignissimos exercitationem molestias magni ratione, veniam hic expedita sequi! Odio quis sit cum vel repellendus temporibus amet velit quia! Ipsa id tempore iusto dolorem, debitis officiis. Voluptates sunt cum tempora!
          </p>
        </div>
      </div>
    </div>
  );
}
