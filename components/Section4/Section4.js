import styles from './Section4.module.css';
import { Container } from 'react-bootstrap';
import Card2 from '../common/Card2/Card2';

import top1 from '../../public/assets/images/top1.png'
import top2 from '../../public/assets/images/top2.png'
import top3 from '../../public/assets/images/top3.png'
import top4 from '../../public/assets/images/top4.png'
import top5 from '../../public/assets/images/top5.png'


export default function Section4() {
    return (
        <>
        <Container>
            <div className={styles['section4__container']}>
                <h1>A Lot is Happening, We are Blogging about itt</h1>



                <div className={styles['gpt3__blog-container']}>
      <div className= {styles['gpt3__blog-container_groupA']} >
        <Card2 imgUrl={top1} text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className={styles['gpt3__blog-container_groupB']}>
        <Card2 imgUrl={top2}  date="Sep 26, 2021"  text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card2 imgUrl={top3} date="Sep 26, 2021"  text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card2  imgUrl={top4} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card2  imgUrl={top5} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>


                </div>
        </Container>

        </>
        
        )
}