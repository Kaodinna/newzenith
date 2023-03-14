import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Bitcoin from '../../public/Bitcoin-1.png'
import Litecoin from '../../public/LiteCoin-1.png'
import Search from '../../public/searching-with-telescope-3025710-2526908.png'
import Startup from '../../public/startup-3025714-2526912.png'
import Sphere from '../../public/sphere.png'
const Vision = () => {
    const vision = {
        fontSize:'1.5rem'
    }
 
   
    
    return ( 
        <div className={styles.vision_main_div}>
             <Image className={styles.bitcoin} src={Bitcoin} alt=''/>
             
             <Image className={styles.sphere} src={Sphere} alt=''/>
             
            <div className={styles.vision_main}>
               
                <div className={styles.vision_div}>
                    
                    <Image className={styles.search} src={Search} alt=''/>
                
                    <p style={vision}>OUR VISION</p>
                    
                    <p>We strongly believe that every generation has a shot at changing the world.</p>
                    
                    <p>
                        We believe Blockchain technology is the unparalleled disruptive force that can power ours. The greatest innovations grow in a network that shares the vision behind it.
                    </p>                
                    <p>
                      Investing in the Blockchain community means investing in the future of our world. This is what Zenith Chain Venture stands for.
                    </p>
                   
                </div>
                <div className={styles.mission_div}>
                <Image className={styles.search} src={Startup} alt=''/>
                    <p style={vision}>OUR MISSION</p>
                    <p>To unleash the Blockchains potential, it is our mission to go beyond bringing the brains, visionaries and enthusiasts in the space together. </p>
                    <p>
                         We provide blockchain-specialized resources for building viable businesses based on industry- and infrastructure-changing products and services and full stack support across a vast array of tools and investor readiness and funding resources.
                    </p>
                </div>
            </div>
            <Image  className={styles.litecoin} src={Litecoin} alt=''/>
        </div>
    )
}
export default Vision