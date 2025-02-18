import styles from './VisualWork.module.css';

const VisualWork = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/images/performance.jpeg" alt="Project 1" className={styles.performanceImage} />
          <img src="/images/visual2.jpeg" alt="Project 1" className={styles.visualImage} />
          <img src="/images/profile.jpeg" alt="Project 1" className={styles.profileImage} />
        </div>
        
        <h2 className={styles.title}>Reflections on the Archipelago (2024-2025)</h2>
        <p className={styles.detail}>Johannes Carlsson & Simon Sahlén on percussion | Leo Eltes on visual</p>
        <p className={styles.description}>
          Reflections on the Archipelago was a multimedia performance that explored the fusion of live-manipulated visual arts with contemporary percussion music. Featuring three composed percussion pieces and one improvisational work, the performance was part of Classicalive 2025.

          The visuals were created from self-recorded video material capturing various coastal settings along the Swedish West Coast. These images were then manipulated, edited, and distorted in real time, responding to and interacting with the music. The piece explored the dynamic relationship between sound and image—how each element could either lead or follow. What happens when music is shaped by visuals? How do visuals transform when guided by sound? This interplay formed an ever-evolving dialogue, blurring the boundaries between the auditory and the visual.
        </p>
      </div>
    );
};

export default VisualWork;
