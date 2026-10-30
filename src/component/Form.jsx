import { useState } from "react";

function Form({ onsubmit }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !content || !summary)
      alert("complete all parameters to add new note");
    const postData = {
      title: title,
      id: Date.now(),
      content: content,
      summary: summary,
    };
    onsubmit(postData);
    setContent("");
    setTitle("");
    setSummary("");
  }

  return (
    <form className="note-form">
      <input
        className="form-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="form-input"
        type="text"
        placeholder=" Write your summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <textarea
        className="form-textarea"
        name="content"
        placeholder="Write your note..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <button type="button" className="form-button" onClick={handleSubmit}>
        Add note
      </button>
    </form>
  );
}

export default Form;
