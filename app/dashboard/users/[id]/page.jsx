import styles from "@/app/components/dashboard-component/users/singleUserPage/singleUserPage.module.css"
import Image from "next/image"

export default function SingleUserPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/user.jfif" alt="avatar image" fill />
                </div>
                Nick Salifu
            </div>
            <div className={styles.formContainer}>
               <form className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Nick" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Nick@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="********" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="+12345678" />
                    <label>Address</label>
                    <textarea name="address" id="address" placeholder="Abuja Nigeria"></textarea>
                    <label>Is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
               </form>
            </div>
        </div>
    )
}