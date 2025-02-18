import styles from './Navet.module.css';

const Navet = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/images/navet.JPG" alt="Project 1" className={styles.performanceImage} />
          <img src="/images/BTS_1.jpeg" alt="Project 1" className={styles.BTSimage} />
          <img src="/images/Prototyp_1.jpeg" alt="Project 1" className={styles.prototyp} />
        </div>
        <h2 className={styles.title}>No Tree is an Island (2023-2025)</h2>
        <p className={styles.detail}>Exhibitions: Navet Festival 2023 | Tekniska Museet 2024 | Stockholm Furniture Fair 2025 | KTH Reactor Hall</p>
        <p className={styles.detail}>Credits: Leo Eltes: visual design | Klara Vedin: research and idea development | Karl Simu: computing and electronics | pictures by Jonas Eltes & Kajol Rafi </p>
        <p className={styles.description}>
        No Tree is an Island is an interactive multimedia installation that invites you to engage with the vital linkages of mycorrhizal networks, the underground fungal systems that connect trees and facilitate communication between them. At the heart of these networks are the older trees, deeply rooted giants that share resources and wisdom, fostering resilience within the forest.

Through remote dialogue and performative interaction, this installation brings these hidden exchanges to life, illuminating the crucial role of connectivity not only in ecosystems but also in human relationships. What can hub trees teach us about our own interdependence? How can we strengthen the bridges between us to create a more resilient society?

By witnessing, interacting with, and embodying the communicative mechanisms of these underground networks, we are invited to reflect on our treatment of the natural world—and each other. After all, as the saying goes, no man is an island.
        </p>
      </div>
    );
  };
  
  export default Navet;