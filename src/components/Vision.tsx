import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Bitcoin from '../../public/Bitcoin-1.png'
import Litecoin from '../../public/LiteCoin-1.png'
import Search from '../../public/searching-with-telescope-3025710-2526908.png'
import Startup from '../../public/startup-3025714-2526912.png'
import Sphere from '../../public/sphere.png'
import Global from '../../public/Frame 48098004fedfv.png'



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
const ask = {
    fontSize:'2.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight:'bold'
}
const equity = {
    fontSize:'1.2rem'
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
                                Zenith Chain is the fastest-growing blockchain ecosystem out of Africa, ushering in the next generation of enterprise solutions in agriculture, healthcare, Blockchain-Based IoT Solutions, Fintech / Decentralized applications and public /private data architecture across emerging markets.
                            </p> 
                        </div>
                        <div className={styles.about_div2}>
                            <Image className={styles.globe} src={Global} alt=''/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.active_vision}>
                    <Image className={styles.bitcoin} src={Bitcoin} alt=''/>
                
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
                        <Image  className={styles.litecoin} src={Litecoin} alt=''/>
                
                        <div className={styles.source_div}>
                        <p style={active}>ACTIVELY SOURCING</p>
                        <p style={para}>From groundbreaking technology to products useful to the Web3 and Blockchain community now, we source the best projects building across focal areas advancing the United Nations Sustainable goals. </p>
                        <p style={para}>  We welcome dApp builders with innovative projects to join us in creating solutions that will drive economic growth.</p>
                        <p style={para}>Zenith Chain is dedicated to onboarding and supporting developers and partners to scale their projects. Some examples of focal industries include:</p> 
                    
                        </div>
                        <div className={styles.source_mini}>
                        <p className={styles.data}>Data Architecture for Private and Government Enterprises</p>
                        <div className={styles.fin}>
                            <p>Fintech and Decentralized Applications</p>
                            <p>Blockchain-Based IoT Solutions</p>
                        </div>
                        <div className={styles.health}>
                            <p>Healthcare</p>
                            <p>Mining</p>
                            <p>Agriculture</p>
                        </div>
                        </div>
                        <div className={styles.benefit_main}>
                        <div className={styles.div}>
                        <p style={benefit}>Benefits</p>
                        <p style={tech}>Tech supports up to  $250,000 is broken down as follows;</p>
                        </div>
                        
                        <div className={styles.benefits_div}>
                       
                            <div className={styles.benefits_mini}>
                           
                                <div style={number}>
                                    <div style={numeral}><span style={numeral_span}>1</span></div>
                                    <p>Introduction to Microsoft  - Access up to $150,000 worth of Azure credit</p>
                                </div>
                                <div style={numbers}>
                                    <p style={numeral}><span style={numeral_span}>2</span></p>
                                    <p>A one-year subscription to Office 365 with up to 10 seats</p>
                                </div>
                                <div style={number}>
                                    <p style={numeral}><span style={numeral_span}>3</span></p>
                                    <p>A one-year subscription to GitHub Enterprise worth $16,000</p>
                                </div>
                             
                            </div>
                        
                           
                            <div className={styles.benefits_mini}>
                          
                                <div style={number}>
                                    <p style={numeral}><span style={numeral_span}>4</span></p>
                                    <p>3-month subscription to LinkedIn premium plan + Ads credit of up to $1,000</p>
                                </div>
                                <div style={numbers}>
                                    <p style={numeral}><span style={numeral_span}>5</span></p>
                                    <p>Introduction to AWS to access $10,000  worth of AWS credit.</p>
                                </div>
                                <div style={number}>
                                    <p style={numeral}><span style={numeral_span}>6</span></p>
                                    <p>Subscription plans up to  $5,000 of MongoDB </p>
                                </div>
                              
                            </div>
                           
                           
                            <div className={styles.benefits_minier}>  
                           
                                <div style={last}>
                                    <p style={numeral}><span style={numeral_span}>7</span></p>
                                    <p>Access to Quick nodes</p>
                                </div>                                   
                                <div style={margin}>
                                    <ul >
                                        <li style={unlist}>Personalised Mentorship – Personalised mentorship for all participants and their business needs.</li>
                                        <li style={unlist}>Investor relations/readiness: We would serve as your funding and investors brokers and would make direct introductions to potential VCs and funds managers on behalf of the accelerating project(s)</li>
                                        <li style={unlist}>Direct access to over 3600 investor databases.</li>
                                        <li style={unlist}>Opportunity to generate networks and connections with key players and institutions in the venture capital industry through Zenith Chain Ventures, in addition to potentially accessing the financing that the risk capital area delivers to startups with a focus on industries that have competitive advantages.</li>
                                    </ul>
                                </div>
                                 
                            </div>
                            
                        </div>
    
                

                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Vision