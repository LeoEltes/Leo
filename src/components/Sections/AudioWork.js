import React, { useState } from 'react';
import styles from '../FrontPage/FrontPage.module.css'; // Import styles
import format from './VisualWork.module.css';

const AudioWork = () => {
  const [tooltip, setTooltip] = useState({ show: false, content: null, position: { top: 0, left: 0 } });
  const handleMouseOver = (event, content) => {
    const rect = event.target.getBoundingClientRect();
    const spacing = 10; // Space between tooltip and image

    let topPosition = rect.bottom + window.scrollY + spacing; // Below the element
    let leftPosition = rect.left + window.scrollX; // Align with the left of the element

    // Adjust to prevent overflow beyond the viewport width
    if (leftPosition + 260 > window.innerWidth) { // Assuming tooltip width is 260px
      leftPosition = window.innerWidth - 260 - spacing;
    }

    setTooltip({
      show: true,
      content,
      position: { top: topPosition, left: leftPosition }
    });
  };


  const handleMouseOut = () => {
    setTooltip({ show: false, content: null, position: { top: 0, left: 0 } });
  };
  return (
    <div>
      <h2 className={format.title} style={{ marginBottom: '20px' }}>Production work</h2>
      <section className={styles.frontPageLinks}>
        {[
          {
            href: "https://tidal.com/browse/album/273796890?u",
            src: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6a/34/76/6a347648-4e8a-34d7-2a63-d6308f9be969/artwork.jpg/592x592bb.webp",
            title: "Stars & The Darkness They Hail From",
            artist: "Alarmet",
            genre: "Jazz",
            description: "Recorded, Produced, Mixed",
            format: "Album",
            year: 2023
          },
          {
            href: "https://tidal.com/browse/album/273796890?u",
            src: "https://assets.audiomack.com/ezimosai/11480611-198673622930.jpg?width=600",
            title: "Östra Skogen",
            artist: "Osai and all their Friends",
            genre: "Hip Hop",
            description: "Mastered",
            format: "Album",
            year: 2024
          },
          {
            href: "https://tidal.com/browse/album/379103798/u",
            src: "https://resources.tidal.com/images/c592119b/de7c/48a2/abb3/42cc4ee3e0b8/640x640.jpg",
            title: "Until You Keel Over",
            artist: "KEEL OV3R",
            genre: "Rock",
            description: "Mixed",
            format: "EP",
            year: 2024
          },
          /*{
            href: "https://tidal.com/browse/album/350788914/u",
            src: "https://resources.tidal.com/images/ef40636e/b0ed/4a9b/8ce2/8a2a1b2479b9/640x640.jpg",
            title: "Programmusik på elektroniska: Blecktornsparken",
            artist: "Leo Eltes",
            genre: "Electronic",
            description: "Composed, Produced, Mixed",
            format: "EP",
            year: 2024
          }, */
          {
            href: "https://tidal.com/browse/album/316050389/u",
            src: "https://resources.tidal.com/images/9a5bff62/5fe1/4519/a560/5bdeb7f2c566/640x640.jpg",
            title: "stamps",
            artist: "tiny field",
            genre: "Folk",
            description: "Mastered",
            format: "Single",
            year: 2023
          },
          {
            href: "https://open.spotify.com/album/5R1uvxA5UDDUkSUUjhL3tV?highlight=spotify:track:5tMsBdJxlAnZQXY0kHQcYR",
            src: "https://i.scdn.co/image/ab67616d00001e02d2e132765227c564f112cfc1",
            title: "Förlängd Speltid",
            artist: "3 rum och kök",
            genre: "Jazz",
            description: "Recorded, Produced, Mixed",
            format: "Album",
            year: 2023
          },
          {
            href: "https://tidal.com/browse/album/371836566/u",
            src: "https://resources.tidal.com/images/a90609d9/671c/43ed/b654/b438705dd9e0/640x640.jpg",
            title: "Andas",
            artist: "Linn Westling",
            genre: "Pop",
            description: "Mastered",
            format: "Single",
            year: 2024
          }
        ].map((item, index) => (
          <a key={index} href={item.href}
            onMouseOver={(e) => handleMouseOver(e, item)}
            onMouseOut={handleMouseOut}>
            <img src={item.src} alt={`Artwork ${index + 1}`} />
          </a>
        ))}
      </section>
      {/*
      {tooltip.show && (
        <div
          className={styles.tooltip}
          style={{
            top: tooltip.position.top,
            left: tooltip.position.left,
          }}
        >
          <p><strong>{tooltip.content.title} - {tooltip.content.artist}</strong></p>
          <p> {tooltip.content.genre}</p>
          <p> {tooltip.content.description}</p>
          <p> {tooltip.content.format}</p>
          <p> {tooltip.content.year}</p>
        </div>
      )} */}
    </div>
  );
};

export default AudioWork;


