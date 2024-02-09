/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    emoji: emojisList,
    score: 0,
    topScore: 0,
    previousId: '',
    isWinOrLose: false,
  }
  shuffledEmojisList = () => {
    //const {emojisList} = this.props
    const result = emojisList.sort(() => Math.random() - 0.5)
    // console.log(result)
    return result
  }
  resetScore = () => {
    const {score, topScore} = this.state
    this.setState({score: 0, isWinOrLose: false})
    if (score > topScore) {
      this.setState({topScore: score})
    }
  }
  shuffledEmojisListOfemiji = id => {
    const {previousId, score} = this.state
    console.log(`id:${id}`)
    console.log(`peev:${previousId}`)
    if (previousId !== id) {
      this.setState(prevState => ({
        emoji: this.shuffledEmojisList(),
        score: prevState.score + 1,
        previousId: id,
      }))
    } else {
      this.setState({isWinOrLose: true})
    }
    if (score === 11) {
      this.setState({isWinOrLose: true})
    }
  }

  render() {
    const {emoji, score, topScore, isWinOrLose} = this.state
    const frontPageDisplay = isWinOrLose ? (
      <div className="win-or-loss-container">
        <WinOrLoseCard score={score} resetScore={this.resetScore} />
      </div>
    ) : (
      <ul className="list-container">
        {emoji.map(eachItem => (
          <EmojiCard
            emojisList={eachItem}
            key={eachItem.id}
            onChangeEmojis={this.shuffledEmojisListOfemiji}
          />
        ))}
      </ul>
    )
    console.log(`score${score}`)
    return (
      <div className="background-container">
        <NavBar score={score} topScore={topScore} isWinOrLose={isWinOrLose} />
        {frontPageDisplay}
      </div>
    )
  }
}
export default EmojiGame
