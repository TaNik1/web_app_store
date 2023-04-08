import React from "react";
const tg = window.Telegram.WebApp;
function App() {
  return (
    <div className="App">
        {tg.initData}
    </div>
  );
}

export default App;
