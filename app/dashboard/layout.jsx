import Navbar from "../components/dashboard-component/navbar/navbar";
import Sidebar from "../components/dashboard-component/sidebar/sidebar";
import styles from '../components/dashboard-component/dashboard.module.css'
import Footer from "../components/dashboard-component/footer/footer";

export default function DashboardLayout({ children }) {
    return ( 
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />    
                {children}
                <Footer />
            </div>
        </div>
    );
  }