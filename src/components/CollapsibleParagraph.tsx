import { useState } from "react";
import {HiOutlineChevronDown,HiOutlineChevronUp} from 'react-icons/hi'
import styles from '../styles/Home.module.css'

interface Props {
  title: string;
  content: any;
}
const collapsible_paragraph_header = {
  display: 'flex',
  alignItems: 'center',
  fontSize:'1.3rem'
}
const collapsible_paragraph_content= {
  marginLeft: '2.4rem',
  marginBottom:'1rem',
  fontSize:'0.8rem',
  lineHeight:'1.8'
}

const CollapsibleParagraph: React.FC<Props> = ({ title, content }) => {
 

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
    <div className={styles.general_div}>
      <div style={collapsible_paragraph_header} onClick={toggleOpen}>
        <span>{isOpen ? <HiOutlineChevronUp/> : <HiOutlineChevronDown/>}</span>
        <h2 style={titler}>{title}</h2>        
      </div>
      {isOpen && <p style={collapsible_paragraph_content}>{content}</p>}
    </div>
  );
};

export default CollapsibleParagraph;
