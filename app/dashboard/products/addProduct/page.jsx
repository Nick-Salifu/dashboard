import styles from "@/app/components/dashboard-component/products/addProduct/addProduct.module.css"

export default function AddProductPage() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="category" id="category">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" />
                <input type="number" placeholder="stock" name="stock" />
                <input type="number" placeholder="color" name="color" />
                <input type="number" placeholder="size" name="size" />
                <textarea name="desc" id="desc" placeholder="description" rows={16}>
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}