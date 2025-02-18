// Blog.js
import React from 'react';
import styles from './Blog.module.css';
import P5Component from '../P5Components/P5Component.js';
import Script2 from '../../Scripts/Script2'; // Import Script2

const Blog = () => {
  return (
    <div className={styles.blog}>
      <article className={styles.post}>
        <h3 className={styles.date}>february 16, 2024</h3>
        <p>
          Detta är min första text i denna blog som är tänkt att bli en del av min hemsida.
          Syftet med bloggen är ännu oklart men jag har tänkt att det skall bli någon form utav dagbok med 
          reflektioner och tankar om det jag stöter på under min praktik. Kanske att det finns någon 
          sökande själ där ute som kan vara behjälpt av mina tankar, om inte annat kanske jag själv är det.
        </p>
        <p>
          Hemsidan är ännu inte publicerad utan är fortfarande under uppbyggnad, vilket innebär
          att denna text är skriven rakt in i min IDE. Just den 16 februari 2024 skapade jag själva 
          "blogfunktionen" i min vid tillfället privata hemisa. Jag har även förhoppningen om att den här 
          hemsidan kan vara en del av mitt masterarbete på musikhögskolan.
        </p>
        {/* Add more paragraphs, links, and media as needed */}
      </article>
      {/* Add more articles for additional posts */}
      <article className={styles.post}>
        <h3 className={styles.date}>January 15, 2024</h3>
        <p>
          Your blog content goes here. You can start writing your thoughts.
          You can easily add links like <a href="https://example.com">this</a> or embed media.
        </p>
        {/* Add more paragraphs, links, and media as needed */}
      </article>
      <P5Component script={Script2} />
    </div>
  );
};

export default Blog;
