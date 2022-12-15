import Note from "./Note"

const Notes = () => {
  return (
    <main>
      <h1>Notes</h1>
      <div id="noteGrid">
        <Note title="Test note" previewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"/>
        <Note title="Test note" previewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"/>
        <Note title="Test note" previewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"/>
      </div>
    </main>
  )
}

export default Notes