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
          <h3>{comment.name}</h3>
          <small>{comment.email}</small>
          <p>{comment.body}</p>
        </div>
      )}
    </section>
  )
}
