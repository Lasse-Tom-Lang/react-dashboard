import { useParams } from 'react-router-dom'

const NoteView = () => {

  const { noteID } = useParams()

  return (
    <main>
      {noteID}
    </main>
  )
}

export default NoteView