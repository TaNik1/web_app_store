import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <div className="App">
      <input type={"text"} size={40}/>
      <input type={"submit"} value={"Отправть"}/>
    </div>
  );
}

export default App;
