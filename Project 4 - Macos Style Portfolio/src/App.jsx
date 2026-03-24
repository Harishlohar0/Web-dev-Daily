import React from 'react'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import "./app.scss"

import Github from './Components/Windows/Github'
import Note from './Components/Windows/Note'
import Resume from './Components/Windows/Resume'
import Spotify from './Components/Windows/Spotify'
import Cli from './Components/Windows/Cli'

import { WindowProvider, useWindow } from './Components/Context/WindowContext'

/* 👇 Context use yahin hoga */
const AppContent = () => {
  const { windowState } = useWindow()

  return (
    <>
      <Nav />

      {windowState.github && <Github />}
      {windowState.notes && <Note />}
      {windowState.resume && <Resume />}
      {windowState.spotify && <Spotify />}
      {windowState.cli && <Cli />}

      <Dock />
    </>
  )
}

const App = () => {
  return (
    <WindowProvider>
      <main>
        <AppContent />
      </main>
    </WindowProvider>
  )
}

export default App
