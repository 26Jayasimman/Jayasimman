import React, { useState } from "react";
import Button from "./components/Button/Button";
import FormInput from "./components/FormInput/FormInput";
import DataTable from "./components/DataTable/DataTable";
import Modal from "./components/React-Modal/React-Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
  ];

  const data = [
    { name: "User1", email: "user1@email.com" },
    { name: "User2", email: "user2@email.com" },
    { name: "User3", email: "user3@email.com" },
    { name: "User4", email: "user4@email.com" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reusable Components Demo</h1>

      <Button text="Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add User"
        footer={
          <>
            <Button text="Cancel" onClick={() => setModalOpen(false)} />
            <Button
              text="Submit"
              onClick={() => alert(`Name: ${name}, Email: ${email}`)}
            />
          </>
        }
      >
        <FormInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <FormInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Modal>

      <h2 style={{ marginTop: "30px" }}>User Table</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
