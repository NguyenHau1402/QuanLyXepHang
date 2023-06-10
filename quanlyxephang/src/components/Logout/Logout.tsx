import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const LogoutModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    setModalIsOpen(false);
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <h2>Xác nhận Logout</h2>
      <p>Bạn có chắc chắn muốn logout?</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={closeModal}>Hủy</button>
    </Modal>
  );
};

export default LogoutModal;
function setIsLoggedIn(arg0: boolean) {
    throw new Error('Function not implemented.');
}

