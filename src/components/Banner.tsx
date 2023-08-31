import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src= {'/img/vaccine banner.jpg'}
            alt={'cover'}
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className= {'text-4xl font-medium'}>Booking for Vaccine</h1>
                <h3 className= {'text-xl font-serif'}>For your health</h3>
            </div>
        </div>
    );
}