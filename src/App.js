import React from 'react';
import './App.css';
import Chat from './components/users/ChatUser';
import './components/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import data from './components/users/data';
import img from './components/images/profile.png';
import img_bg from './components/images/whatsapp_bg.jpg';
import img_mic from './components/images/microphone.png';

class App extends React.Component{
  state={
    user_arr:data,
    user_index:0,
    isSelected:false
  }

  handleClick=(event)=>
  {
    this.setState({
      user_index :event.target.value,
      color:true
    });
  }

  render()
  {
    return(
      <div className="pane">

        <div className="leftPane">
          <div style={{backgroundColor: "rgb(8, 83, 8)",color: "white",padding:"0.2px",textAlign: "center"}}>
            <h3>User</h3>
          </div>
          <div id="chatContainer">
            <ul style={{padding:"0px"}} >
            {
              this.state.user_arr.map((ob)=>{
                return(
                  <>
                    <li key={ob.id} value={ob.id} onClick={this.handleClick} style={{backgroundColor:this.state.user_index==ob.id?'rgb(179,179,179)':'white',padding:"0px",display:"flex",listStyleType:'none'}}>
                      <img src={img} alt="user_photo" style={{width:"40px",height:"40px",borderRadius:"100px"}}/>
                      &nbsp;&nbsp;&nbsp;    
                      {ob.name}
                    </li>
                    <hr/>
                  </>
                )
              })
            }
            </ul>
          </div>
        </div>

        <div className="rightPane" style={{backgroundImage: `url(${img_bg})`,backgroundSize:"auto"}}>
          
          <div style={{display:"flex",backgroundColor: "rgb(8, 83, 8)",color: "white",margin: "0px" }}>
            <FontAwesomeIcon icon="arrow-left" size="lg" style={{marginTop:"20px",marginLeft:"20px"}} />
            <img src={img} alt="user_photo" style={{width:"30px",height:"30px",borderRadius:"100px",marginTop:"15px",marginRight:"10px",marginLeft:"20px"}}/>
            <h3>{data[this.state.user_index].name}</h3>
            <FontAwesomeIcon icon="video" size="lg" style={{marginLeft:"110px",marginTop:"20px"}} />
            <FontAwesomeIcon icon="phone" size="lg" style={{marginLeft:"20px",marginTop:"20px"}} />
            <FontAwesomeIcon icon="ellipsis-v" size="lg" style={{marginLeft:"20px",marginTop:"20px"}}/>
          </div>
          
          <div id="chatContainer">
            {/* <div>
              <h2>{Chat[this.state.user_index]}</h2>
            </div> */}
            <div style={{position:"absolute"}}>
              <Chat index={this.state.user_index} />
            </div>
            <div>
              <div style={{position:"relative",left:"10px",top:"570px"}}>
                <input type="text" placeholder="Type a message" disabled/>
                
                <FontAwesomeIcon icon="smile" size="2x" style={{position:"absolute",top:"10px",left:"10px"}} />
                <FontAwesomeIcon icon="undo" size="1x" style={{position:"absolute",top:"10px",left:"210px"}} />
                <FontAwesomeIcon icon="camera" size="2x" style={{position:"absolute",top:"10px",left:"275px"}} />
                <FontAwesomeIcon icon="paperclip" size="2x" style={{position:"absolute",top:"10px",left:"235px"}} />
              
              </div>
              
              <img src={img_mic}  style={{width:"50px",position:"absolute",top:"630px",left:"1064px"}}/>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
