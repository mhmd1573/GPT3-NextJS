
import logo1 from '../../public/assets/images/dropbox.png';
import logo2 from '../../public/assets/images/atlassian.png';
import logo3 from '../../public/assets/images/google.png';
import logo4 from '../../public/assets/images/slack.png';
import logo5 from '../../public/assets/images/shopify.png';
import Image from 'next/image';
import styles from './Banner.module.css';

export default function Banner() {

return(
<div className={styles['d-flex']}>
    <Image className={styles['logo']} src={logo1} alt="dropbox" />
    <Image className={styles['logo']} src={logo2} alt="atlassian" />
    <Image  className={styles['logo']} src={logo3} alt="google" />
    <Image  className={styles['logo']} src={logo4} alt="slack" />
    <Image  className={styles['logo']} src={logo5} alt="shopify" />
</div>
)

}