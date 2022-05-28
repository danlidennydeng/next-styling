import styles from '../styles/About.module.scss'

function About() {
  return (
  <>
    <button className='btn btn-primary'>Primary</button>
    <button className='btn btn-success'>Sucess</button>
    <div className={styles.highlightscss}>
      About Page
    </div>
  </>
  
  )
}

export default About