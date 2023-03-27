import CollapsibleParagraph from "./CollapsibleParagraph";
import styles from '../styles/Home.module.css'
import FadeInSection from '../components/FadeIn';






const FAQ = () => {
    const faq = {
        fontSize:'2rem',
        fontFamily: 'Poppins, sans-serif' ,
      
    }
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
      <div className={styles.faq}>
          
        <div className={styles.value_main}>
            <p style={value}>OUR VALUES</p>
            <FadeInSection>
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
            </FadeInSection>
            <FadeInSection>
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
            </FadeInSection>

        </div>
        <div className={styles.faq_div}>
        <h3 style={faq}>FAQ</h3>
        <CollapsibleParagraph
          title="What if I have secured funds from angels or other funding programs?"
          content="We do consider this a limitation."
        />
        <CollapsibleParagraph
          title="If I have participated in another accelerator, can I still join?"
          content="Yes, you can join."
        />
        <CollapsibleParagraph
          title=" I need to incorporate it before applying?"
          content="We do not necessarily need incorporation to consider participants. However, we consider it a significant step. Founders are encouraged to have legal documents as early as possible to avoid later complications. "
        />
        <CollapsibleParagraph
          title="How do you choose which startups to fund?"
          content="We consider the uniqueness of the products, the solution and its anticipated social impacts, the team, product-market fit, stage of development."
        />
        <CollapsibleParagraph
          title="Does Zenith Ventures invest in every company in the accelerator?"
          content="Yes, all accelerator participants are qualified for the funding. "
        />
        <CollapsibleParagraph
          title="How much do you invest?"
          content="250,000."
        />
        <CollapsibleParagraph
          title="Do I pay tuition or application fees for the accelerator?"
          content="No, Zenith Ventures Accelerator Program is free of charge."
        />
      
        <CollapsibleParagraph
          title="What is the time commitment?"
          content="A minimum of 3 hours weekly."
        />
        <CollapsibleParagraph
          title="What stage should my product be before applying?"
          content="We expect our founders to have a high degree of clarity, product-market-fit tests, and products at the building stage, albeit early(MVP and beyond). We do not consider ideas. "
        />
        <CollapsibleParagraph
        
          title="When is the application deadline?"
          content={
            <div>
               <p>Program Duration: 6 weeks.</p>
              <p>Application commencement: 28th March 2023.</p>
              <p>Application deadline: 18th April 2023.</p>
              <p>Curriculum commencement: 25th April 2023.</p>
              <p>Curriculum ending: 6th May 2023.</p>
              <p>Demo Date: 13th June 2023.</p>
              <p>Program ends: 15th June 2023.</p>             
            </div>
          }
        />
        <CollapsibleParagraph
          title="When will I know my results?"
          content="Due to the high volume of applicants you can expect to recieve your feedback within 21 days."
        />
        <CollapsibleParagraph
          title="When is the time for the interview?"
          content="Qualifying participants will be notified."
        />
        <CollapsibleParagraph
          title="Do you only Fund Blockchain Based products?"
          content="Yes, we do, We are only focusing on those building on the blockchain."
        />
        <CollapsibleParagraph
          title="I was denied. Can we apply during subsequent cohorts' intake?"
          content="Yes, you are encouraged to apply for subsequent Zenith Ventures Accelerators cohorts with a better application and improved traction."
        />
      
         
      </div>  
      </div>
    );
  };
  
  export default FAQ;