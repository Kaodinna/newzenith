import Logo from '../../public/logo.svg'
import Image from 'next/image' 
import styles from '../styles/Home.module.css'




const Navbar = () => {
   
    const link = {
        textDecoration:'none'
    }
    const svg = {
        height:'6rem',
        width:'6rem'
    }
    return (
        <div>
            <div className={styles.nav_main}>
                <div></div>
                <div className={styles.imgDiv}>
                    <a href="https://zenithchain.co" target="_blank" rel="noopener">                  
                        <Image style={svg} src={Logo} alt=''/>   
                    </a>
                
                </div>
                <div className={styles.applyButton}>
                    <a href="https://forms.gle/QyS8EA8WC3P5Pj6r7" style={link} target="_blank" rel="noopener">Apply</a>
                </div>          
            </div>
        </div>
    )
}
export default Navbar