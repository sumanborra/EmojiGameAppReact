// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, resetScore} = props
  const playAgain = () => {
    resetScore()
  }
  const winOrLosePageDisplay =
    score < 11 ? (
      <div className="container-lose">
        <div className="lose-card-text-container">
          <h1 className="lose-heading">You Lose</h1>
          <p className="para-lose-score">Score</p>
          <p className="scoreed-para-description">{score}/12</p>
          <button className="buttn" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="image-lose-card"
        />
      </div>
    ) : (
      <div className="container-lose">
        <div className="lose-card-text-container">
          <h1 className="lose-heading">You Won</h1>
          <p className="para-lose-score">Best Score</p>
          <p className="scoreed-para-description">{score}/12</p>
          <button className="buttn" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="image-lose-card"
        />
      </div>
    )
  return winOrLosePageDisplay
}
export default WinOrLoseCard
