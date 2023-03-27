import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Bitcoin from '../../public/Bitcoin-1.png'
import Litecoin from '../../public/LiteCoin-1.png'
import Search from '../../public/searching-with-telescope-3025710-2526908.png'
import Startup from '../../public/startup-3025714-2526912.png'
import Sphere from '../../public/sphere.png'
import Global from '../../public/Frame 48098004fedfv.png'
import Dot from '../../public/Ellipse 113.png'



const Vision = () => {
    const active = {
        fontSize:'1.8rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold'
    }
   
   
    const para = {
        fontSize:'0.8rem',
        lineHeight:'1.6'
    }
    const vision = {
        fontSize:'1.5rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold',
        
    }
 const paragraph = {
    fontSize:'0.8rem',
    lineHeight:'1.6'
 }
 const about = {
    fontSize:'1.8rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight:'bold'
}
const scale = {
    fontSize:'1.3rem'
}
const benefit = {
    fontSize:'2rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight:'bold'
}

const number = {
    display:'flex',
    fontSize:'0.7rem',
    alignItems:'center',
   
}
const numbers = {
    display:'flex',
    fontSize:'0.7rem',
    alignItems:'center',
    margin:'2.5rem 0'
   
}
const last = {
    display:'flex',
    alignItems:'center'
}
const numeral = {
   marginRight:'1rem',
   
   
}
const margin = {
    paddingLeft:'2rem'
}
const numeral_span = {
display:'inline-block',
padding:'10px 15px ',
backgroundColor:'rgba(85,85,85,0.5)',
borderRadius:'50%'
}
const tech = {
fontSize:'0.9rem',
fontWeight:'bold'
}
const unlist = {
    margin:'1rem 0',
    lineHeight:'1.5',
    fontSize:'0.8rem'
}


const bullet = {
    marginRight:'1rem'
}
const span2 = {
    display:'flex',
    alignItems:'center'
  }



  
    
    return ( 
        <div className={styles.vision_main_div}>
            <div>
                <div className={styles.about_main}>
                    <div className={styles.about_para}>
                        <div className={styles.about_div}>
                            <p style={about}>ABOUT US</p>
                            <p style={scale}>Zenith Chain is a scalable layer 2 Hybrid EVM blockchain ecosystem driving economic empowerment and environmental sustainability, leveraging our Proof-of-Authority consensus algorithm.
                            </p>
                            <p style={scale}>
                                Zenith Chain is the fastest-growing blockchain ecosystem, ushering in the next generation of enterprise solutions in agriculture, healthcare, Blockchain-Based IoT Solutions, Fintech / Decentralized applications and public /private data architecture across emerging markets.
                            </p> 
                        </div>
                        <div className={styles.about_div2}>
                            <Image className={styles.globe} src={Global} alt=''/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.active_vision}>
                    <div className={styles.bitcoin}> <Image  src={Bitcoin} alt=''/></div>
                   
                
                    <Image className={styles.sphere} src={Sphere} alt=''/>
                        <div className={styles.vision_main}>
                
                    <div className={styles.vision_div}>
                        
                    
                        <Image className={styles.search} src={Search} alt=''/>
                    
                        <p style={vision}>OUR VISION</p>
                        <div style={paragraph}>
                            <p>We strongly believe that every generation has a shot at changing the world.</p>
                            
                            <p>
                                We believe Blockchain technology is the unparalleled disruptive force that can power ours. The greatest innovations grow in a network that shares the vision behind it.
                            </p>                
                            <p>
                             Investing in the Blockchain community means investing in the future of our world. This is what Zenith Chain Venture stands for.
                            </p>
                        </div>
                    
                    </div>
                    <div className={styles.mission_div}>
                        <Image className={styles.search} src={Startup} alt=''/>
                        <div style={paragraph}>
                            <p style={vision}>OUR MISSION</p>
                            <p>To unleash the Blockchains potential, it is our mission to go beyond bringing the brains, visionaries and enthusiasts in the space together. </p>
                            <p>
                                We provide blockchain-specialized resources for building viable businesses based on industry- and infrastructure-changing products and services and full stack support across a vast array of tools and investor readiness and funding resources.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.liteDiv}>
                        <div className={styles.litecoin}>
                             <Image   src={Litecoin} alt=''/>
                        </div>
                        
                
                        <div className={styles.source_div}>
                        <p style={active}>ACTIVELY SOURCING</p>
                        <p style={para}>From groundbreaking technology to products useful to the Web3 and Blockchain community now, we source the best projects building across focal areas advancing the United Nations Sustainable goals. </p>
                        <p style={para}>  We welcome dApp builders with innovative projects to join us in creating solutions that will drive economic growth.</p>
                        <p style={para}>Zenith Chain is dedicated to onboarding and supporting developers and partners to scale their projects. Some examples of focal industries include:</p> 
                    
                        </div>
                        <div className={styles.source_mini}>
                            <div className={styles.spany}>
                                <Image src={Dot} style={bullet} alt=''/>
                                <h3>  Data Architecture for Private and Government Enterprises</h3>
                            </div>
                        
                        <div className={styles.fin}>
                            <div className={styles.spana}>
                                <Image src={Dot}  style={bullet} alt=''/>
                                <h3 >Fintech and Decentralized Applications</h3>
                            </div>
                           <div className={styles.spana}>
                                <Image src={Dot}  style={bullet} alt=''/>
                                <h3>Blockchain-Based IoT Solutions </h3>
                           </div>
                            
                        </div>
                        <div className={styles.health}>
                            <div style={span2}>
                                <Image src={Dot}  style={bullet} alt=''/>
                                <h3 >Healthcare</h3>
                            </div>
                            <div style={span2}>
                                <Image src={Dot}  style={bullet} alt=''/>
                                <h3 >Mining</h3>
                            </div>
                           <div style={span2}>
                                <Image src={Dot}  style={bullet} alt=''/>
                                <h3 >Agriculture</h3>
                           </div>                            
                        </div>
                        </div>
                       
    
                

                    
                </div>
            </div>
        </div> 
    )
}
export default Vision