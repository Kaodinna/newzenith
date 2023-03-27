import Logo from '../../public/logo.svg'
import Image from 'next/image'
import Facebook from '../../public/Button (9).svg'
import Twitter from '../../public/Button (10).svg'
import LinkedIn from '../../public/Button (11).svg'
import SocialIcon1 from '../../public/Button (12).svg'
import SocailIcon2 from '../../public/Button (14).svg'
import Telegram from '../../public/Button (15).svg'
import Medium from '../../public/Button (16).svg'
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
        padding:'8px 9px ',
        backgroundColor:'rgba(85,85,85,0.5)',
        borderRadius:'50%'
      }
    const face = {
        width:'0.5rem',
        height:'0.7rem'
    }
    const twit = {
        width:'0.8rem',
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
  const right = {
    width:'30%'
  }
  const loo = {
    width:'50%',
    marginLeft:'5rem'
  }
    return (
        <div className={styles.miniMain}>
            <div className={styles.mini_auto}>
            <div className={styles.border}></div>
            <div>
            <div className={styles.miniDiv}>
                <div className={styles.footer_logo}>
                <a  href="https://zenithchain.co" target="_blank">
                    <Image  src={Logo} alt=""/>
                </a>
                </div>
                <div className={styles.vertical}></div>
                <div style={right}>
                <p className={styles.copyright}>
                    Copyright 2020-2023 Zenith Chain (UAB) Ltd Reg No. 305865705. All rights reserved
                </p>
                </div>
                <div style={loo}>
                <div className={styles.miniSub}>
                    <div style={image}>
                        <a href="https://www.facebook.com/zenithchain" target="_blank" rel="noopener noreferrer">
                           <Image src={Facebook} alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://twitter.com/zenithchain_co" target="_blank" rel="noopener">
                            <Image src={Twitter}  alt=""/>
                        </a>
                    </div>
                    <div style={image}>
                        <a href="https://www.linkedin.com/company/zenith-chain" target="_blank" rel="noopener">
                            <Image src={LinkedIn}  alt=""/>
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
                         <Image src={Telegram}  alt=""/>
                        </a>
                    </div>
                    
                    <div style={image}>
                        <a href="https://blog.zenithchain.co">
                          <Image src={Medium} alt=''/>
                        </a>
                    </div>                                              
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Footer 