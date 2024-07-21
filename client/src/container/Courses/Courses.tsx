import { Headings, Menu } from "../../components";
import styles from "./Courses.module.css";
import { images } from "../../constants";

const Courses = () => {
  return (
    <div>
      <Menu />
      <Headings
        title="Course 1"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam!"
      />
      <div className="container">
        <div className={styles.cta + " row"}>
          <div className={styles.container}>
            <h3 className={styles.title}>Join Us for Spiritual Growth</h3>
            <p className={styles.text + " pt-2 pb-4"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              voluptates ut consequuntur assumenda quasi cum corporis dicta!
              Molestias iste corrupti quia repellendus sunt dolore odit delectus
              officiis sint debitis quod, praesentium excepturi quae nihil. Ad
              placeat perspiciatis enim molestiae quod, id illo vitae fugiat
              adipisci. Consequuntur, accusamus sapiente ipsam, doloribus
              cupiditate molestiae iure maxime voluptatibus atque aut blanditiis
              illum excepturi in delectus. Illum molestias incidunt cupiditate
              veniam, quas eos alias adipisci architecto numquam velit quibusdam
              ea, nobis quam nulla repellat officia dolor dignissimos saepe
              voluptatem. Voluptate perspiciatis similique eum sint qui saepe
              dolorum aliquam, cum animi illo, voluptatum quibusdam blanditiis.
            </p>
            <img src={images.test1} alt="" />
            <p className={styles.text + " pt-2 pb-4"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quisquam, inventore id, temporibus provident vitae excepturi
              accusantium officiis incidunt, odit fuga corrupti aut animi
              voluptatum iusto voluptatem reiciendis ex nihil maxime dicta rem.
              Libero, necessitatibus similique officiis eum tenetur saepe
              accusamus vero aspernatur provident corrupti beatae fuga maiores
              repudiandae! Iure enim iste molestiae quas asperiores laboriosam
              eius, porro beatae perspiciatis incidunt adipisci totam deleniti
              ratione repellendus omnis. Itaque sit corporis ex vel ad assumenda
              ducimus tempora voluptatibus, ipsam culpa vero, saepe eum
              recusandae architecto, reprehenderit est numquam omnis nam sequi
              labore. Enim itaque veniam iste nihil facere dolores quis, ratione
              aliquid facilis? Fuga modi sed numquam reiciendis facere facilis,
              perferendis dolorem architecto delectus repellendus, beatae
              aliquid enim, cum obcaecati! Error magni a commodi sint quaerat
              dolorem cum nesciunt! Fugiat consequuntur exercitationem culpa sit
              odio, praesentium autem laboriosam hic voluptates ex atque
              doloremque deserunt dolorem veniam assumenda laudantium vitae ab
              ipsam impedit laborum? Delectus illo vitae quos, dolore ea aliquid
              doloremque ducimus est officia atque accusamus, sequi expedita
              quia a optio veritatis fuga eveniet deserunt voluptatem maiores.
              Consequatur eaque molestiae nulla est temporibus voluptatem sed,
              iure reiciendis hic saepe nemo commodi, quis totam perspiciatis
              mollitia quas atque modi, consequuntur fuga! Non, neque.
            </p>
            <img src={images.test2} alt="" />
            <p className={styles.text + " pt-2 pb-4"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              odio doloremque fugit sint mollitia sequi, repudiandae quae maxime
              dolor culpa sit, fuga, magni maiores necessitatibus placeat
              provident. Exercitationem saepe ea consequuntur in laborum facere
              laudantium, repellat unde fugit odio vero blanditiis tenetur
              architecto alias quae explicabo quibusdam vel. Corrupti nostrum
              architecto quasi, reiciendis, praesentium ea labore sapiente
              officia aspernatur quidem debitis laborum dignissimos fugiat. Et
              itaque quos repudiandae magnam beatae. Placeat fugiat nesciunt
              delectus culpa expedita cupiditate tempore rerum quia, possimus
              excepturi explicabo? At accusamus nam quasi, quia ut suscipit ea
              cum facilis cumque. Sit, laudantium, dolores quia quibusdam alias
              at debitis rem quod, laborum optio possimus excepturi est
              accusamus ea id distinctio ab! Ab temporibus eligendi quaerat
              numquam quae reiciendis vitae dolor iusto, quia similique facere
              aliquid? Sequi pariatur vero minus et. A minus unde illum eius
              autem ex dolore sint voluptatibus voluptatem, qui repellat quas
              deleniti nesciunt rem odit tenetur natus odio necessitatibus
              dignissimos dicta incidunt! Reprehenderit et dicta ullam odio
              rerum nihil minima quam voluptatem, quisquam pariatur nostrum
              at earum?
            </p>
          </div>
          <button className="btn-main">Back</button>
        </div>
      </div>
    </div>
  );
};
export default Courses;
