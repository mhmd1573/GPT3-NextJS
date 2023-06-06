import { Button } from 'react-bootstrap'
import styles from './MainBtn.module.css'

export default function MainBtn({ value }) {
    return (
        <div>
            <Button className={styles['main-btn']}>{value}</Button>{' '}
        </div>
    )
}

