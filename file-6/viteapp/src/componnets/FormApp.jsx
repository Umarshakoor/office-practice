import { useState } from "react";

const FormApp = () => {
  // Initial state for the main form and the list of form entries
  const [form, setForm] = useState({
    text: "",
    password: "",
    textarea: "",
    phone: "",
  });
  const [formEntries, setFormEntries] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add form entry to the state
  const addFormEntry = () => {
    setFormEntries([...formEntries, { ...form, id: Date.now() }]);
    setForm({ text: "", password: "", textarea: "", phone: "" }); // Reset the form
  };

  // Remove form entry from the state
  const removeFormEntry = (id) => {
    setFormEntries(formEntries.filter((entry) => entry.id !== id));
  };
  console.log(form, formEntries);
  return (
    <div>
      <div>
        <h3>Form</h3>
        <input
          type="text"
          name="text"
          value={form.text}
          onChange={handleInputChange}
          placeholder="Text"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <textarea
          name="textarea"
          value={form.textarea}
          onChange={handleInputChange}
          placeholder="Textarea"
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <button onClick={addFormEntry}>Add Form Entry</button>
      </div>

      <div>
        <h3>Form Entries</h3>
        {formEntries.map((entry) => (
          <div
            key={entry.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <p>Text: {entry.text}</p>
            <p>Password: {entry.password}</p>
            <p>Textarea: {entry.textarea}</p>
            <p>Phone: {entry.phone}</p>
            <button onClick={() => removeFormEntry(entry.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormApp;
