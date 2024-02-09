// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isWinOrLose} = props
  const navBarPageDisplay = isWinOrLose ? (
    <div className="nav-bar-container-winorloss">
      <div className="image-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-image"
        />
        <h1 className="para-description">Emoji Game</h1>
      </div>
    </div>
  ) : (
    <div className="nav-bar-container">
      <div className="image-icon-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-image"
        />
        <h1 className="para-description">Emoji Game</h1>
      </div>
      <div className="image-icon-container">
        <p className="para-score">Score: {score}</p>
        <p className="para-top-score">Top Score: {topScore}</p>
      </div>
    </div>
  )
  return (navBarPageDisplay)
}
export default NavBar
