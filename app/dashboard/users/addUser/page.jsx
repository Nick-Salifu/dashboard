import styles from "@/app/components/dashboard-component/users/addUser/addUser.module.css"

export default function AddUserPage() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>IsAdmin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>IsActive?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" placeholder="address" rows={16}>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}