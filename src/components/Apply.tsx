import styles from '../styles/Home.module.css'
const Apply = () => {
   
    const apply = {
        fontSize:'1.8rem'
    }
    const who = {
        fontSize:'1.1rem'
    }
   
    return (
        <div className={styles.apply_main}>
            <div className={styles.apply_mini}>
                <div className={styles.sub}>
                    <p style={apply}>WHO CAN APPLY</p>
                    <p style={who}>Business Validation: High growth potential projects that already have commercial validation (demonstrable traction in users, sales and/or profitability) or technology (TRL 7 or higher).</p>
                    <p style={who}>Ability to implement the solution: Companies must demonstrate and ensure they have the capacity to implement their solution.</p>
                    <p style={who}>                       
                        Availability and dedication: The team selected to start a pilot process, must demonstrate the availability and dedication needed in your project, so at least one person must be dedicated to this venture full-time.
                        Enthusiastic teams: Project teams will need to be shaped by motivated, enthusiastic and agile people to ensure results in the short term.
                    </p>
                </div>
                <div className={styles.button}>
                    <a href="https://forms.gle/QyS8EA8WC3P5Pj6r7"  target="_blank" rel="noopener">
                        <button className={styles.apply_btn1}>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Apply