import styles from './Section3.module.css'
import { Container,Button } from 'react-bootstrap'
import {AiOutlineAppstore} from 'react-icons/ai'

export default function Section3()   {
    return (    

        <>
        <Container>
        <div className={styles['container-section']}>
            
            <div className={styles['child1']} >
            <Button className={styles['btn-img']}>
                <AiOutlineAppstore className={styles['icon']}/>
                My Apps
                </Button>{' '}

                </div>
            <div className={styles['child2']} >
                <p>Request Early Access to Get Started</p>
                <h1>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                  <h5>Request Early Access to Get Started</h5>  
                </div>
        </div>
        </Container>

        
        </>
    )
}