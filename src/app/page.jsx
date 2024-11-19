import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Title title="Main Page" subtitle="Here is the main page" />
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
