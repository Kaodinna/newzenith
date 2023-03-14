import styles from '../styles/Home.module.css'
const Benefits = () => {
    const benefit = {
        fontSize:'2rem'
    }
  
    const number = {
        display:'flex',
    }
    const last = {
        display:'flex'
    }
    const numeral = {
       marginRight:'1rem',
       marginTop:'1rem'
    }
    const margin = {
        paddingLeft:'2.5rem'
    }
    const ask = {
        fontSize:'2.5rem'
    }
    const equity = {
        fontSize:'1.2rem'
    }
  
    return ( 
        <div className={styles.benefit_main}>
            <div className={styles.div}>
            <p style={benefit}>Benefits</p>
            <p>Tech supports up to  $250,000 is broken down as follows;</p>
            </div>
            
            <div className={styles.benefits_div}>
                <div className={styles.benefits_mini}>
                    <div style={number}>
                        <div style={numeral}>1</div>
                        <p>Introduction to Microsoft  - Access up to $150,000 worth of Azure credit</p>
                    </div>
                    <div style={number}>
                        <p style={numeral}>2</p>
                        <p>A one-year subscription to Office 365 with up to 10 seats</p>
                    </div>
                    <div style={number}>
                        <p style={numeral}>3</p>
                        <p>A one-year subscription to GitHub Enterprise worth $16,000</p>
                    </div>
                </div>
                <div className={styles.benefits_mini}>
                    <div style={number}>
                        <p style={numeral}>4</p>
                        <p>3-month subscription to LinkedIn premium plan + Ads credit of up to $1,000</p>
                    </div>
                    <div style={number}>
                        <p style={numeral}>5</p>
                        <p>Introduction to AWS to access $10,000  worth of AWS credit.</p>
                    </div>
                    <div style={number}>
                        <p style={numeral}>6</p>
                        <p>Subscription plans up to  $5,000 of MongoDB </p>
                    </div>
                </div>
                <div className={styles.benefits_minier}>  
                    <div style={last}>
                        <p style={numeral}>7</p>
                        <p>Access to Quick nodes</p>
                    </div>                                   
                    <div style={margin}>
                        <p>Personalised Mentorship – Personalised mentorship for all participants and their business needs.</p>
                        <p> Investor relations/readiness: We would serve as your funding and investors brokers and would make direct introductions to potential VCs and funds managers on behalf of the accelerating project(s)</p>
                        <p> Direct access to over 3600 investor databases. </p>
                        <p>                       
                         Opportunity to generate networks and connections with key players and institutions in the venture capital industry through Zenith Chain Ventures, in addition to potentially accessing the financing that the risk capital area delivers to startups with a focus on industries that have competitive advantages.
                        </p>  
                    </div>
                           
                </div>
            </div>
            <div className={styles.mini}>
                <p style={ask}>OUR ASK</p>
                <p style={equity}>2.5% equity in the business (Early stage + No vesting required )</p> 
            </div>
          

        </div>
    )
}
export default Benefits