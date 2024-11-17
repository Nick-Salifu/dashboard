import Navbar from "../components/dashboard-component/navbar/navbar";
import Sidebar from "../components/dashboard-component/sidebar/sidebar";

export default function DashboardLayout({ children }) {
    return ( 
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />    
                {children}
            </div>
        </div>
    );
  }