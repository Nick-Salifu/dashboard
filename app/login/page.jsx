import styles from "@/app/components/login-component/login.module.css"

export default function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
        </div>
    )
}