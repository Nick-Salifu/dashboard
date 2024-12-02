import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

export default function Rightbar() {
    return (
        <div className={styles.container}>
           <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/astro.jpg" width={120} height={120} alt="astro picture" />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        🔥 Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the amin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam consectetur rem dolorem non adipisci laborum repudiandae corrupti eum ad!</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watched
                    </button>
                </div>   
           </div>

            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                        🚀 Coming soon
                    </span>
                    <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming soon</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam consectetur rem dolorem non adipisci laborum repudiandae corrupti eum ad!</p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>   
            </div>
        </div>
    )
}