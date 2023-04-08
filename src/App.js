import React, {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  return (
    <div className="App">
      <div className="Test">Помогите</div>
    </div>
  );
}

export default App;
