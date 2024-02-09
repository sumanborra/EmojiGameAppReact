// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, onChangeEmojis} = props
  const {emojiName, emojiUrl, id} = emojisList
  const onChangeemoji = () => {
    onChangeEmojis(id)
  }
  return (
    
      <li className="list-item">
        <button type="button" className="buttn-image" onClick={onChangeemoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
        </button>
      </li>
    
  )
}
export default EmojiCard
