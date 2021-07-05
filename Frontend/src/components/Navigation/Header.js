import { useEffect, useState } from "react";
import useWritingState from "./useWritingState";
import styles from "./Header.js";
import classNames from "classnames";
import styled from "styled-components"

const tabs = [
  {
    title: "Wavehunter",
    
  
  },
  {
    title: "See you on the next wave",
 
  },
];
function Summary({ className }) {
  const [tabIndex, setTabIndex] = useState(0);
  const tab = tabs[tabIndex];

  const [title, setTitle] = useWritingState(tab.title);
 

  const fullTitleVisible = title === tab.title;


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newTabIndex = (tabIndex + 1) % tabs.length;
      const tab = tabs[newTabIndex];
      setTabIndex(newTabIndex);
      setTitle(tab.title);
    }, 15000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [tabIndex]);

  return (
    <section className={classNames(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>
      
 
    </section>
  );
}

export default Summary;