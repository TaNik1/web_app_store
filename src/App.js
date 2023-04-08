import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <div className="App">
      <text>{tg.initDataUnsafe.user.username}</text>
    </div>
  );
}

export default App;
