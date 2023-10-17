import './App.css';
import white from "./assets/images/white.png";
import black from "./assets/images/black.png";
import blue from "./assets/images/blue.png";
import yellow from "./assets/images/yellow.png";
import nophoto from "./assets/images/nophoto.png";
import { useState } from 'react';


function App() {
  const[a,seta]=useState(white);
  const [selectedImage, setSelectedImage] = useState(null);
  const [real,setreal]=useState(null);
  const [upperText,setupperText] = useState("Text Here");
  const [lowerText,setlowerText] = useState("Text Here");
  const [textcol,settextcol] =useState("white");
  const [textsize,settextsize] =useState("50");

  function handleOnChange(event){
      setSelectedImage(event.target.files[0]);
  }
  function handleChangeUp(event){
    setupperText(event.target.value);
  }
  function handleChangeLow(event){
    setlowerText(event.target.value);
  }

  function handleCol(event){
    const al_butt =document.getElementsByClassName("buttons");
    const len =al_butt.length;
    for(var i=0;i<len;i++){
      if(al_butt[i].id===event.target.name){
        document.getElementsByClassName("buttons")[i].checked=true;
      }
      else{
        document.getElementsByClassName("buttons")[i].checked=false;
      }
    }
    settextcol(event.target.name);
  }

  function handleSize(event){
      console.log(event.target.value)
      settextsize(event.target.value);
  }



  return (
    <div className="App">
      <div id="main">
        <h1>Display</h1>
        <div id="child_img">
          {real?<img src={URL.createObjectURL(real)} alt="not found"></img>:<img src={nophoto} alt="not found"></img>}
          
        </div>
        <strong id="upper"  style={{ color: textcol,fontSize:textsize+"%",}}>{upperText?upperText:"Text Here"}</strong>
        <strong id="lower" style={{ color: textcol,fontSize:textsize+"%",}}>{lowerText?lowerText:"Text Here"}</strong>
        <img src={a} alt="not found">
        </img>
      </div>
      <div id="settings">
        <h1>Settings</h1>
        <div id="colors">
        <h3>Change T-shirt color</h3>
        <div id="colors_img">
          <img src={white} alt="not found" onClick={()=>( seta(white))}/>
          <img src={black} alt="not found" onClick={()=>( seta(black))}/>
          <img src={blue} alt="not found" onClick={()=>( seta(blue))} />
          <img src={yellow} alt="not found" onClick={()=>( seta(yellow))}/>
        </div>
        </div>
        <div className="Lin">
        </div>
        <div id="choose_file">
        <h3>Change Image</h3>
        <div id="center_img">
          <input type="file" id="img" name="img" accept="image/*" onChange={handleOnChange}></input>
          <button type='submit' onClick={()=>(setreal(selectedImage))}>Update now</button>
        </div>
        </div>
        <div className="Lin">
        </div>
        <div id="enter_text">
          <h3>Write Text</h3>
          <p>Upper Text</p>
          <input type="text" placeholder='Upper text' id="text_up" onChange={handleChangeUp}></input>
          <div className="Lin_s">
        </div>
          <p>lower Text</p>
          <input type="text" placeholder='Lower text' id="text_low" onChange={handleChangeLow}></input>
          <div className="Lin_s">
        </div>

        </div>
        <div id="text_setting">
            <div id="text_size">
              <p>Text Size</p>
              <input type='range' onChange={handleSize}></input>
            </div>
            <div id="text_col">
            <div className='radio_buttons'>
            <p>Text Color</p>
            </div>
            <div className='radio_buttons'>
            <input type="checkbox" name="white" id="white" className='buttons' onClick={handleCol}></input>
            <label htmlFor="white">White</label>
            </div>
            <div className='radio_buttons'>
            <input type="checkbox" name="black" id="black" className='buttons' onClick={handleCol}></input>
            <label htmlFor="black">Black</label>
            </div>
            <div className='radio_buttons'>
            <input type="checkbox" name="blue" id="blue" className='buttons' onClick={handleCol}></input>
            <label htmlFor="blue">Blue</label>
            </div>
            <div className='radio_buttons'>
            <input type="checkbox" name="yellow" id="yellow" className='buttons' onClick={handleCol}></input>
            <label htmlFor="yellow">Yellow</label>
            </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
