import { useState } from "react";
export default function Greeting() {
  const [firstName, setFirstName] = useState("Harry");
  const [lastName, setLastName] = useState("Smith");

  const handleFirstNameChnage = (e) => setFirstName(e.target.value);
  const handleLastNameChnage = (e) => setLastName(e.target.value);

  return (
    <>
      <input value={firstName} onChange={handleFirstNameChnage} />
      <br />
      <input value={lastName} onChange={handleLastNameChnage} />

      <p>
        Hello {firstName} {lastName}
      </p>
    </>
  );
}
