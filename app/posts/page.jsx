import styles from './Posts.module.css'

import { ListOfPosts } from './ListOfPost'

export default function PostsPage () {
  return (
    <>
      <div className={styles.listOfPosts}>
        <h1>Esta es la página con los posts</h1>
        <ListOfPosts />
      </div>
    </>
  )
}
