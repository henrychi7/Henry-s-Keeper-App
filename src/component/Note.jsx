function Note({ note, onDelete }) {
  const { title, content, id, summary } = note;
  function Delete() {
    onDelete(id);
  }
  return (
    <article className="note-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{summary}</p>
      <button
        className="note-delete"
        type="button"
        aria-label={`Delete ${note.title || "untitled note"}`}
        onClick={Delete}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </article>
  );
}
export default Note;
