import { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", gap: "15px" };

const AuthForm = ({ cbOnSubmit, submitContent }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="Input email... "
          onChange={handleChange}
        />
      </label>
      <label>
        <h3>Password</h3>
        <input
          type="text"
          name="password"
          value={form.password}
          placeholder="Input password..."
          onChange={handleChange}
        />
      </label>

      <button style={{ width: "100px" }} type="submit">
        {submitContent}
      </button>
    </form>
  );
};

export default AuthForm;
