import styles from '../styles/Home.module.css'
const Value = () => {
    const value = {
        fontSize:'1.8rem',
        marginLeft:'9rem'
    }
    const first = {
        fontWeight:'bold'
    }
    return (
        <div className={styles.value_main}>
            <p style={value}>WE VALUE</p>
            <div className={styles.value_div}>
                <div className={styles.value_sub}>
                    <p style={first}>ECOSYSTEM-FIRST</p>
                    <p>We always put the health and success of the ecosystem above any individuals interest</p>
                </div>
                <div className={styles.value_sub}>
                    <p style={first}>OPENNESS</p>
                    <p>We operate transparently and consistently share knowledge to build open communities</p>
                </div>
                <div className={styles.value_sub}>
                    <p style={first}>MAKE IT FEEL SIMPLE</p>
                    <p>We strive to make the complex feel simple so the technology is accessible to all.</p>
                </div>
            </div>
            <div className={styles.value_mini}>
                <div className={styles.value_para}>
                    <p style={first}>PRAGMATISM OVER PERFECTION</p>
                    <p>We  find the right solution not the ideal solution and beat dogmatism by openly considering all ideas</p>
                </div>
                <div className={styles.value_para}>
                    <p style={first}>GROW CONSTANTLY</p>
                    <p>We learn, improve and fail productively so the project and community are always becoming more effective</p>
                </div>
            </div>

        </div>
    )
}
export default Value