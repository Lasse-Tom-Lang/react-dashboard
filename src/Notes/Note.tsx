interface NoteProps {
  title: string
  previewText: string
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
      <button>
        Open note
      </button>
    </div>
  )
}

export default Note