import React from "react";
const tg = window.Telegram.WebApp;
function App() {
  return (
    <div className="App">
        {tg.initDataUnsafe.user.username}
    </div>
  );
}

export default App;
