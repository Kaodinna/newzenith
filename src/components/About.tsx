import Global from '../../public/global.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const About = () => {
   
    const about = {
        fontSize:'1.8rem'
    }
    const scale = {
        fontSize:'1.2rem'
    }
    return (
        <div className={styles.about_main}>
            <div className={styles.about_div}>
                <p style={about}>ABOUT US</p>
                <p style={scale}>Zenith Chain is a scalable layer 2 Hybrid EVM blockchain ecosystem driving economic empowerment and environmental sustainability, leveraging our Proof-of-Authority consensus algorithm.
                </p>
                <p style={scale}>
                    Zenith Chain is the fastest-growing blockchain ecosystem out of Africa, ushering in the next generation of enterprise solutions in agriculture, healthcare, Blockchain-Based IoT Solutions, Fintech / Decentralized applications and public /private data architecture across emerging markets.
                </p> 
            </div>
            <Image className={styles.globe} src={Global} alt=''/>
        </div>
    )
}
export default About 