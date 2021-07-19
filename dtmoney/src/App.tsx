import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { GlobalStyles } from "./styles/global";

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const handleTransactionModalOpen = () => {
    setIsTransactionModalOpen(true);
  };

  const handleTransactionModalClose = () => {
    setIsTransactionModalOpen(false);
  };

  return (
    <>
      <Header />
      <Dashboard />
      <Modal
        isOpen={isTransactionModalOpen}
        onClose={handleTransactionModalClose}
      >
        <h1>Welcome to our modal!</h1>
      </Modal>
      <GlobalStyles />
    </>
  );
}
