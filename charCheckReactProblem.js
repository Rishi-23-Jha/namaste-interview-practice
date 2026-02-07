import { useState } from 'react';


function CharacterCount() {
  const [text, setText] = useState('');
  const [maxLength, setMaxLength] = useState(50);
  const characterCount = text.length;

  const limit = Math.floor(0.9 * maxLength);
  const overLimit = characterCount > maxLength;
  const warning = characterCount >= limit


  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input type="number" min="0" max="1000" data-testid="maxlength"
              onChange={(e) => setMaxLength(e.target.value)}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          onChange={(e) => setText(e.target.value)}

        ></textarea>

        <div className="char-info" data-testid='char-info'>{/*For Example 5/50 */}
          {characterCount} / {maxLength}
        </div>

        <div className="warnings">
          {/* Show Warning if it reaches to 90 */}
          {warning && !overLimit && (<p className="warning-text" data-testid="warning-text">
            You are close to the limit!

          </p>)}

          {/* Show  Overlimit message if limit is exceeded*/}
          {overLimit && (<p className="error-message" data-testid="error-text">
            {`Limit exceeded by ${characterCount - maxLength} characters`}
          </p>)}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;


