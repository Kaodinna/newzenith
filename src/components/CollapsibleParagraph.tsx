import { useState } from "react";
import {HiOutlineChevronDown,HiOutlineChevronUp} from 'react-icons/hi'
import styles from '../styles/Home.module.css'

interface Props {
  title: string;
  content: any;
}

const CollapsibleParagraph: React.FC<Props> = ({ title, content }) => {
  const styles = {
  
    collapsible_paragraph_header:{
      display: 'flex',
      alignItems: 'center'
    },
    collapsible_paragraph_content:{
      marginLeft: '1rem'
    } 
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
const titler = {
  fontSize:'1.2rem'
}
  return (
    <div>
      <div style={styles.collapsible_paragraph_header} onClick={toggleOpen}>
        <span>{isOpen ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span>
        <h2 style={titler}>{title}</h2>        
      </div>
      {isOpen && <p style={styles.collapsible_paragraph_content}>{content}</p>}
    </div>
  );
};

export default CollapsibleParagraph;
