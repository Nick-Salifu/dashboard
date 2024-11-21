import Card from "../components/dashboard-component/card/card";
import Chart from "../components/dashboard-component/chart/chart";
import styles from "../components/dashboard-component/dashboard.module.css"
import Rightbar from "../components/dashboard-component/rightbar/rightbar";
import Transaction from "../components/dashboard-component/transaction/transaction";

export default function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )
}