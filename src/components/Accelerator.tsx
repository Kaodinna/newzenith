import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Eclipse from '../../public/Eclipse.png'
import Navbar from './Navbar'
import Relaunch from '../../public/undraw_relaunch_day_902d 1.png'



const Accelerator = () => {

        const accept = {
            fontSize:'1.3rem',
            lineHeight:'1.4'
        }

    return( 
        <div className={styles.accelerator_mega}>
     <div className={styles.accelerator_main}>
            <Navbar/>
            <div className={styles.flex_elelemt}>
                <div className={styles.accelerator_mini}>
                               
                    <div className={styles.program_div}>
                        <div  className={styles.program} >
                            <p className={styles.program_class}>ZENITH VENTURE ACCELERATOR PROGRAM</p>
                        </div>
                        <p style={accept}>Zenith Chain is accepting applications from startups for the  Zenith Chain Venture Accelerator program 2023  cycle.</p>
                        <a href="https://forms.gle/QyS8EA8WC3P5Pj6r7" target="_blank" rel="noopener">
                            <button className={styles.apply_btn}>Apply</button>
                        </a>    
                    
                    </div>
                    <div className={styles.flex_con}>
                        <Image className={styles.relaunch} src={Relaunch} alt=''/>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Accelerator