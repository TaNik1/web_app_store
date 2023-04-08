import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])

    const OnClick =  () => {
        fetch(`https://api.telegram.org/bot5936180733:AAGjA1lGT2kktrghMMjodGfg1YNSPN2PLVA/sendMessage?chat_id=${tg.initDataUnsafe.user.id}&text=${document.getElementById("test").value}`)
    }
  return (
    <div className="App">
      <div className="Test"></div>
    </div>
  );
}

export default App;
