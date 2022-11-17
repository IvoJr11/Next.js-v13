import Link from 'next/link'
import LikeButton from './LikeButton'
import styles from './Posts.module.css'

const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-cache' })
    .then(res => res.json())
}
export async function ListOfPosts () {
  const posts = await fetchPost()

  return posts.slice(0, 5).map(post =>
    <div key={post.id} className={styles.post}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </div>
  )
}
