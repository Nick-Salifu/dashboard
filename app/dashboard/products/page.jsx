import Pagination from "@/app/components/dashboard-component/pagination/pagination";
import Search from "@/app/components/dashboard-component/search/search";
import Link from "next/link";
import styles from "@/app/components/dashboard-component/products/products.module.css"
import Image from "next/image";

export default function Products(){
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/user.jfif" alt="avatar" width={40} height={40} className={styles.productImage} />
                                Nick Salifu
                            </div>
                        </td>
                        <td>Descriptions</td>
                        <td>$989</td>
                        <td>06.12.2024</td>
                        <td>45</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
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