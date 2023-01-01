import { Link } from "react-router-dom"

interface NoteProps {
  title: string
  previewText: string
  noteID: string
}

const Note:React.FC<NoteProps> = (props) => {
  return (
    <div>
      <h2>
        {props.title}
      </h2>
      <p>
        {props.previewText}
      </p>
      <Link to={"/notes/" + props.noteID}>
        Open note
      </Link>
    </div>
  )
}

export default Note