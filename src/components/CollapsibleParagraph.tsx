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
      alignItems: 'center',
      fontSize:'1.3rem'
    },
    collapsible_paragraph_content:{
      marginLeft: '2.4rem',
      marginBottom:'1rem',
      fontSize:'0.8rem',
      lineHeight:'1.8'
    },
    general_div:{
      borderBottom: '1px solid #333',
      width: '50%'
    } ,
  
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
const titler = {
  fontSize:'1.1rem',
  marginLeft:'0.8rem',
  fontWeight:'bolder'
}
  return (
    <div style={styles.general_div}>
      <div style={styles.collapsible_paragraph_header} onClick={toggleOpen}>
        <span>{isOpen ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span>
        <h2 style={titler}>{title}</h2>        
      </div>
      {isOpen && <p style={styles.collapsible_paragraph_content}>{content}</p>}
    </div>
  );
};

export default CollapsibleParagraph;
