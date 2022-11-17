import Link from 'next/link'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-cache' })
    .then(res => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params

  const post = await fetchPost(id)

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link href='/posts/[id]/comments' as={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </div>
  )
}
