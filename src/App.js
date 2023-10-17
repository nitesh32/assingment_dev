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

  function handleOnChange(event){
      setSelectedImage(event.target.files[0]);
  }
  function handleChangeUp(event){
    setupperText(event.target.value);
  }
  function handleChangeLow(event){
    setlowerText(event.target.value);
  }
  return (
    <div className="App">
      <div id="main">
        <h1>Display</h1>
        <div id="child_img">
          {real?<img src={URL.createObjectURL(real)} alt="not found"></img>:<img src={nophoto} alt="not found"></img>}
          
        </div>
        <strong id="upper">{upperText?upperText:"Text Here"}</strong>
        <strong id="lower">{lowerText?lowerText:"Text Here"}</strong>
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
            <div id="text_size">qklregfjvnb</div>
            <div id="text_col">dfghjkkjhgf</div>
        </div>

      </div>
    </div>
  );
}

export default App;
