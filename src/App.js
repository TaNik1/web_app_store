import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <div className="App">
        {tg.initDataUnsafe.user.username}
    </div>
  );
}

export default App;
