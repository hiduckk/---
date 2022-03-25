
import './App.css';
import {useState} from 'react';

function App() {
  const [result, setResult]=useState('');

  function 숫자입력(e){
    if(e.target.id==='기호'){
      switch(e.target.name){
        case 'clear': setResult('');
        break;
        case 'backspace' : setResult(result.substring(0, result.length-1))
        break;
        case '%' : setResult((result*0.01))
        break;
      }
    }    
    else if(e.target.id==='연산')
      if (e.target.name==='='){
        setResult(eval(result))}
      else {setResult(result + e.target.name)
      }
    else
    {setResult(result + parseInt(e.target.name))}
} 
  function Button(props){
      return <button id={props.id}
                name={props.name}
                onClick={숫자입력}>
                {props.title !=null ? props.title : props.name}</button>
  }
  /*title이 있는아이들만(!=null) title을 표시하고, 나머지는 name~
  backspace나 clear는 계산기에 넣기에 너무 길어서! 삼항연산자 사용*/

  return (
    <div className="App">
      <div><h1>Duck's 계산기</h1></div>
      <div className='content'>
        <input type='text' defaultValue={result} ></input>
        <div className='scrren'>

        </div>
        <div className='keypad'>
          <div className='col1'>
            <Button id='기호' name='clear' title='C'/>
            <Button id='기호' name='backspace' title='←'/>
            <Button id='기호' name='%'/>
            <Button id='연산' name='/'/>
          </div>
          <div className='col2'>
            <Button name='7'/>
            <Button name='8'/>
            <Button name='9'/>
            <Button id='연산' name='*'/>
          </div>
          <div className='col3'>
            <Button name='4'/>
            <Button name='5'/>
            <Button name='6'/>
            <Button id='연산' name='-'/>
          </div>
          <div className='col4'>
            <Button name='1'/>
            <Button name='2'/>
            <Button name='3'/>
            <Button id='연산' name='+'/>
          </div>
          <div className='col5'>
            <Button id='zero' name='0'/>
            <Button name='.'/>
            <Button id='연산' name='='/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
