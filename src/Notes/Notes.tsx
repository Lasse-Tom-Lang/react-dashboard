import Note from "./Note"

const Notes = () => {

  const notes = [
    {title: "Note 1", noteID: "1", previewText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"},
    {title: "Note 2", noteID: "2", previewText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"},
    {title: "Note 3", noteID: "3", previewText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"}
  ]

  return (
    <main>
      <h1>Notes</h1>
      <div id="noteGrid">
        {
          notes.map((note) => {
            return (<Note title={note.title} noteID={note.noteID} previewText={note.previewText}/>)
          })
        }
      </div>
    </main>
  )
}

export default Notes