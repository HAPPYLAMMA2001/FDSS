
import styles, { layout } from "../style";
import Button from "./Button";
import headerimg from "../fdssresources/headerimg.png";

const CardDeal = () => (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About FDSS
       
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        FAST Data Science Society (FDSS) is the country’s first student-run Data
        Science Society. It is a society that seeks to advance data science
        education and practices in Pakistan. As the first of its kind in the
        country, FDSS provides a platform for collaboration and
        knowledge-sharing among students, professionals, and researchers in the
        field of data science. The society conducts various events, workshops,
        and training sessions to teach data science skills and tools to its
        members and the wider community.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
      <img src={headerimg} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
