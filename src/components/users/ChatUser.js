import React from 'react';
import data from './data';

class ChatUser extends React.Component
{
    render()
    {
        return(
            <div>
            {
              data[this.props.index].chats.map((message,index)=>{
                return(
                  <div key={index}>
                    <p className="example" style={{padding:"15px",width:"70px",marginLeft:index%2===0?'30px':'270px', backgroundColor:index%2===0?'#2C5F2D':'#97BC62FF', borderRadius:"10px",color:"white"}}>{message}</p>
                  </div>
                )
              })
            }
            </div>
        )
    }
}
export default ChatUser;