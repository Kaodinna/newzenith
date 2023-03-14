import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Eclipse from '../../public/Eclipse.png'
import Navbar from './Navbar'
import Relaunch from '../../public/undraw_relaunch_day_902d 1.png'



const Accelerator = () => {

        const program = {
            fontSize:'2.5rem'
        }
      
        const shine = {
            zIndex:'999',
            
        }
        const accept = {
            fontSize:'1.2rem'
        }

    return( 
     <div className={styles.accelerator_main}>
            <Navbar/>
            <Image src={Eclipse} style={shine} alt=''/>
            <div className={styles.accelerator_mini}>
                <div className={styles.program_div}>
                    <div  className={styles.program} >
                        <p style={program}>ZENITH VENTURE ACCELERATOR PROGRAM</p>
                    </div>
                    <p style={accept}>Zenith Chain is accepting applications from startups for the  Zenith Chain Venture Accelerator program 2023  cycle. It will take place from March–April 2023.</p>
                    <a href="https://forms.gle/QyS8EA8WC3P5Pj6r7" target="_blank" rel="noopener">
                        <button className={styles.apply_btn}>Apply</button>
                    </a>    
                
                </div>
                <div>
                    <Image className={styles.img} src={Relaunch} alt=''/>
                </div>
            </div>

        </div>
    )
}

export default Accelerator