import { useEffect, useState } from 'react';
import './App.css';
import generateColor from './generateNumber';

function App() {

useEffect(() => {
  pickAnswer();
}, []);



 const [correctAnswer, setCorrectAnswer] = useState();
 const [colors, setColors] = useState(generateColor());
 const [isIncorrect, setIsIncorrect] = useState(false);

 const pickAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  setCorrectAnswer(colors[randomNumber]);
 }

 const buttonHandle = ({target}) => {
  const { innerHTML } = target;
  if(innerHTML.toLowerCase() === correctAnswer) {
      setColors(generateColor());
      setIsIncorrect(false);
  } else {
    setIsIncorrect(true);
  }
 }

 useEffect(() => {
  pickAnswer();
}, [colors]);

console.log(correctAnswer);

  return (
    <div className="App">
      <h1 className='title'>Color Guess</h1>
      <div className="boxColor" style={{"backgroundColor": correctAnswer}}/>
      <div className='Buttons'>
      <button onClick={(target) => buttonHandle(target)} className='btn'>{colors[0].toUpperCase()}</button>
      <button onClick={(target) => buttonHandle(target)} className='btn'>{colors[1].toUpperCase()}</button>
      <button onClick={(target) => buttonHandle(target)} className='btn'>{colors[2].toUpperCase()}</button>
      {isIncorrect && <h3 className='warning'>Resposta Errada! Tente novamente</h3>}
      </div>
    </div>
  );
}

export default App;
