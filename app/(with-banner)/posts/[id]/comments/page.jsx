import Image from 'next/image'
import { groteskFont } from '../../../../fonts'

const fetchComments = (id) => {
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-cache' })
    .then(res => res.json())
}

export default async function CommentsPage ({ params }) {
  const { id } = params

  const comments = await fetchComments(id)
  return (
    <section className={groteskFont.className} style={{ backgroundColor: '#444', padding: '10px', borderRadius: '15px', fontSize: '14px', marginTop: '5px' }}>
      {comments.map(comment =>
        <div key={comment.id}>
          <Image style={{ borderRadius: '50%' }} src={`https://i.pravatar.cc/150?u=${comment.email}`} width={50} height={50} alt='uwu' />
          <small>{comment.email}</small>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      )}
    </section>
  )
}
