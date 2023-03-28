import React from 'react'
import './Chanel.css'
import PropTypes from 'prop-types'

const idleBackground = <div className="idle-background"></div>

function Chanel ({ gameName }) {
  let gameImage

  if (gameName) {
    gameImage = require(`/assets/images/${gameName}`)
  }

  return (
    <div className="channel-container">
      {gameImage !== undefined ? <img src={gameImage} alt="game-image" className="channel-img"/> : idleBackground}
    </div>
  )
}

Chanel.propTypes = {
  gameName: PropTypes.string
}

export default Chanel
