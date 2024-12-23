import Pagination from "@/app/components/dashboard-component/pagination/pagination"
import Search from "@/app/components/dashboard-component/search/search"
import styles from "@/app/components/dashboard-component/users/users.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Users() {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/addUser">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif" alt="avatar" width={40} height={40} className={styles.userImage} />
                                Nick Salifu
                            </div>
                        </td>
                        <td>nick@gmail.com</td>
                        <td>06.12.2024</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/users/id">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Pagination />
        </div>
    )
}