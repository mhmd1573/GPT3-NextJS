import styles from './Banner2.module.css';
import { Container } from 'react-bootstrap';

export default function Banner2() {
    return (
        <>
        <Container>
            <div className={styles.banner2}>
                    <div className={styles.child1}>
                    <p>Request Early Access to Get Started</p>
                    <h3>Register today & start exploring the endless possiblities.</h3>

                    </div>
                    <div className={styles.child2}>
                        <button className={styles.btn}>Get Started</button>
                        </div>
                </div>
        </Container>

        </>   
        )

    }