import styles from "@/app/components/dashboard-component/products/singleProductPage/singleProductPage.module.css"
import Image from "next/image"

export default function SingleProductPage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/user.jfif" alt="avatar image" fill />
                </div>
                Computer
            </div>
            <div className={styles.formContainer}>
               <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Computer" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$100.5" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="55" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="blue" />
                    <label>Size</label>
                    <input type="number" name="size" placeholder="45" />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows={10} placeholder="description"></textarea>
                    <button>Update</button>
               </form>
            </div>
        </div>
    )
}