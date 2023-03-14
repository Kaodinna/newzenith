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
        color:'white'
    }
    
    return (
        <div className={styles.miniMain}>
            <div className={styles.border}></div>
            <div className={styles.miniDiv}>
                <a  href="https://zenithchain.co" target="_blank">
                    <Image className={styles.footer_logo} src={Logo} alt=""/>
                </a>
               
                <p>
                    Copyright 2020-2023 Zenith Chain (UAB) Ltd Reg No. 305865705. All rights reserved
                </p>
                <div className={styles.miniSub}>
                    <div style={image}>
                        <a href="https://www.facebook.com/zenithchain" target="_blank" rel="noopener noreferrer">
                            <Image src={Facebook} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://twitter.com/zenithchain_co" target="_blank" rel="noopener">
                            <Image src={Twitter} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://www.linkedin.com/company/zenith-chain" target="_blank" rel="noopener">
                            <Image src={LinkedIn} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://www.reddit.com/r/zenithchain_co">
                            <Image src={SocialIcon1} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="">
                            <Image src={SocailIcon2} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://t.me/zenithchainenglish" target="_blank" rel="noopener">
                            <Image src={Telegram} alt=""/>
                        </a>
                    </div>
                    
                    <div style={image}>
                        <a href="https://blog.zenithchain.co">
                            <SiMedium style={medium}/>
                        </a>
                    </div>                                              
                </div>

            </div>
        </div>
    )
}
export default Footer 