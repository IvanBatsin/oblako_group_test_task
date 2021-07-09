import React from 'react';
import './styles/main.scss';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Editbar } from './components/editbar/Editbar';

export const App: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const openCloseModal = (): void => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Header openCloseModal={openCloseModal}/>
      <Main/>
      <Editbar show={showModal} closeModal={openCloseModal}/>
    </>
  )
}