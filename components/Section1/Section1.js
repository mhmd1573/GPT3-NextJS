
import styles from './Section1.module.css'
import { Container } from 'react-bootstrap'
import Card from '../common/Card/Card'
export default function Section1() {
    return (
    
        <>
        <div className={styles['container-section']}>

            <div className={styles['parent1']}>
                <div className={styles['child1']}>
                    <h2>What is GPT-3</h2>
                    </div>
                <div className={styles['child2']}>
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
            </div>

            <Container>
                <h1 className={styles['section-breaker']}>The possibilities are beyond your imagination</h1>
            </Container>
            
            
            <div className={styles['d-flex']}>
                <Card title="ChatBots" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b " />
                <Card title="KnowledgeBase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                <Card title="Education"  text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            </div>
            
            
            </div>






            </>
        )
}