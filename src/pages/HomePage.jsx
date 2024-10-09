import Post from "../components/Post";
import styles from "./HomePage.module.css";
const HomePage = ({posts}) => {
    console.log(posts);
    return (
        <>
            <h2 className={styles.title}>Home</h2>
            <div className={styles.posts}>
                {posts.map((post, i) => (
                    <div className={styles.post} key={i}>
                        <Post post={post} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage;