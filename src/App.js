import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])

    const OnClick =  () => {
        tg.sendData(document.getElementById("test").value)
    }
  return (
    <div className="App">
      <input type={"text"} size={40} id={"test"}/>
      <input type={"submit"} value={"Отправть"} onClick={OnClick}/>
    </div>
  );
}

export default App;
