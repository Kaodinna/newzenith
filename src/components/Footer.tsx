import Logo from '../../public/logo.svg'
import Image from 'next/image'
import Facebook from '../../public/facebook.png'
import Twitter from '../../public/twitter.png'
import LinkedIn from '../../public/linkedIn.png'
import SocialIcon1 from '../../public/SocialIcon.png'
import SocailIcon2 from '../../public/SocialIcon2.png'
import Telegram from '../../public/telegram.png'
import {SiMedium} from 'react-icons/si' 
import styles from '../styles/Home.module.css'

const Footer = () => {
  
    const image = {
        margin:'0.4rem',
      
    }
    const medium = {
        color:'white',
        fontSize:'0.8rem'
    }
    const numeral_span = {
        display:'inline-block',
        padding:'5px 9px ',
        backgroundColor:'rgba(85,85,85,0.5)',
        borderRadius:'50%'
      }
    const face = {
        width:'0.5rem',
        height:'0.7rem'
    }
    const twit = {
        width:'0.6rem',
        height:'0.8rem'
    }
    const link = {
        width:'0.9rem',
        height:'0.6rem'
    }
    const tele = {
        width:'0.9rem',
        height:'0.6rem'
    }
  
    return (
        <div className={styles.miniMain}>
            <div className={styles.border}></div>
            <div>
            <div className={styles.miniDiv}>
                <a  href="https://zenithchain.co" target="_blank">
                    <Image className={styles.footer_logo} src={Logo} alt=""/>
                </a>
                <div className={styles.vertical}></div>
                <p className={styles.copyright}>
                    Copyright 2020-2023 Zenith Chain (UAB) Ltd Reg No. 305865705. All rights reserved
                </p>
                <div className={styles.miniSub}>
                    <div style={image}>
                        <a href="https://www.facebook.com/zenithchain" target="_blank" rel="noopener noreferrer">
                            <span style={numeral_span}><Image src={Facebook} style={face} alt=""/></span>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://twitter.com/zenithchain_co" target="_blank" rel="noopener">
                            <span style={numeral_span}><Image src={Twitter}  style={twit} alt=""/></span>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://www.linkedin.com/company/zenith-chain" target="_blank" rel="noopener">
                            <span style={numeral_span}><Image src={LinkedIn} style={link} alt=""/></span>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://www.reddit.com/r/zenithchain_co">
                            <span style={numeral_span}><Image src={SocialIcon1} alt=""/></span>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="">
                            <span style={numeral_span}><Image src={SocailIcon2} alt=""/></span>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://t.me/zenithchainenglish" target="_blank" rel="noopener">
                            <span style={numeral_span}><Image src={Telegram}  style={tele} alt=""/></span>
                        </a>
                    </div>
                    
                    <div style={image}>
                        <a href="https://blog.zenithchain.co">
                            <span style={numeral_span}><SiMedium style={medium}/></span>
                        </a>
                    </div>                                              
                </div>
            </div>
            </div>
        </div>
    )
}
export default Footer 