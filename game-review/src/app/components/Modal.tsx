"use client"
import { useState } from "react";
import Modal from "react-modal";

export default function NewsModal() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal}>
        <button onClick={() => setShowModal(false)}>Close Modal </button>
        <h1> This is NewsModal </h1>
      </Modal>
    </>
  );
}
