import Logo from '../../public/logo.svg'
import Image from 'next/image' 
import styles from '../styles/Home.module.css'




const Navbar = () => {
    const img = {
        width:'50%'
    }
    const link = {
        textDecoration:'none'
    }
    return (
        <div className={styles.nav_main}>
            <div style={img}>
                <a href="https://zenithchain.co" target="_blank" rel="noopener">                  
                    <Image  src={Logo} alt=''/>   
                </a>
               
            </div>
            <div className={styles.applyButton}>
                <a href="https://forms.gle/QyS8EA8WC3P5Pj6r7" style={link} target="_blank" rel="noopener">Apply</a>
            </div>          
        </div>
    )
}
export default Navbar