import { useState } from 'react'
import './App.css'

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  const [view, setView] = useState<'question' | 'success'>('question')
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    if (inputValue.trim().toUpperCase() === 'YES') {
      setView('success')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value
    const targetWord = 'YES'

    if (currentValue.length <= targetWord.length) {
      setInputValue(targetWord.slice(0, currentValue.length))
    }
  }

  if (view === 'success') {
    return (
      <div className="App">
        <div className="success-content">
          <h2>YAY! 🎉</h2>
          <img
            src={`${BASE_URL}dance.gif`}
            alt="Celebration"
            className="celebration-gif"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="question-content">
        <div className="images-row">
          <img
            src={`${BASE_URL}heart.png`}
            alt="Love Heart"
            className="heart-image"
          />
          <img
            src={`${BASE_URL}bouquet.png`}
            alt="Flowers"
            className="flower-image"
          />
        </div>
        <h1>Will you be my valentine?</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type your answer..."
            className="answer-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
