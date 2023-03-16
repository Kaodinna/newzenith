import styles from '../styles/Home.module.css'
const Value = () => {
    const value = {
        fontSize:'1.8rem',
        marginLeft:'10rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'bold'
    }
    const first = {
       margin:'0',
        fontFamily: 'Poppins, sans-serif',
        fontSize:'1rem'
    }
    const para ={
        fontSize:'0.8rem',
        paddingBottom:'3rem'
    }

    return (
        <div className={styles.value_main}>
            <p style={value}>WE VALUE</p>
            <div className={styles.value_div}>
                <div className={styles.value_sub}>
                    <p style={first}>ECOSYSTEM-FIRST</p>
                    <p style={para}>We always put the health and success of the ecosystem above any individuals interest</p>
                </div>
                <div className={styles.value_sub}>
                    <p style={first}>OPENNESS</p>
                    <p style={para}>We operate transparently and consistently share knowledge to build open communities</p>
                </div>
                <div className={styles.value_sub}>
                    <p style={first}>MAKE IT FEEL SIMPLE</p>
                    <p style={para}>We strive to make the complex feel simple so the technology is accessible to all.</p>
                </div>
            </div>
            <div className={styles.value_mini}>
                <div className={styles.value_para}>
                    <p style={first}>PRAGMATISM OVER PERFECTION</p>
                    <p style={para}>We  find the right solution not the ideal solution and beat dogmatism by openly considering all ideas</p>
                </div>
                <div className={styles.value_para}>
                    <p style={first}>GROW CONSTANTLY</p>
                    <p style={para}>We learn, improve and fail productively so the project and community are always becoming more effective</p>
                </div>
            </div>

        </div>
    )
}
export default Value