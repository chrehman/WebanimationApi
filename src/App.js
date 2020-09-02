import React from 'react';
import useWebAnimations, { bounce,backInDown } from "@wellyshen/use-web-animations";


function App() {
  const { ref,playState } = useWebAnimations({ ...bounce,...backInDown });
  const { ref1 } = useWebAnimations({ ...backInDown });
  
  // const play=()=>{
  //   getAnimation.play();
  // }
  // const pause=()=>{
  //   getAnimation.play();
  // }
  // const finish=()=>{
  //   getAnimation.play();
  // }
   return (
    <div>

      <div className="App" ref={ref}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
      palystate:{playState}
      <div  ref={ref1}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>
    </div>

  );
}

export default App;
