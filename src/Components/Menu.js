import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">

          <Color color="green" handleClick={props.vivid}></Color>

          <Color color="orange" handleClick={props.vivid}></Color>

          <Color color="blue" handleClick={props.vivid}></Color>
          
          <Color color="yellow" handleClick={props.vivid}></Color>
      </div>
    );
}

export default Menu;