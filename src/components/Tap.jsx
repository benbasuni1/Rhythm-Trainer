import React from 'react';
import ReactDOM from 'react-dom';
import KeyHandler, {KEYPRESS} from 'react-key-handler';


function Tap(props) {
    // return <button type="button" onKeyDown={props.tapFn}>Tap</button>;
    return <div> Tap Space Bar
        <KeyHandler keyEventName={KEYPRESS} keyValue=" " onKeyHandle={props.tapFn} />
         </div>
  }

  export default Tap;