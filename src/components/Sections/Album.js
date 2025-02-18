import styles from './VisualWork.module.css';

const Album = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Solnedgång över Blecktornsparken (2024)</h2>
        <p className={styles.description}>
        Solnedgång över Blecktornsparken (Sunset over Blecktornsparken) is a sonic depiction of a day in Blecktornsparken, a small urban park in Södermalm, Stockholm’s most densely populated district. As the city expands, green spaces are gradually eroded, making way for new developments. This album reflects on that transformation—on how the persistent hum of urban life seeps into what was once meant to be a sanctuary for both people and wildlife.

Noise, sound, and silence shape our experience of a place. The park, once a refuge, is slowly worn down by an ever-rising tide of sound—construction, traffic, human activity—blurring the boundaries between the natural and the urban. Silence becomes a rarity, replaced by a constant auditory pressure that alters the very character of the space. How does a place change when the sounds of nature are drowned out? What happens when quiet retreats, leaving only echoes of a city that never stops?
        </p>
      </div>
    );
  };
  
  export default Album;