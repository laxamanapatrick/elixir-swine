import { BasicToast, ConfirmationToast } from "../utils/Toast";

function App() {
  return (
    <div className="App">
      <button onClick={() => ConfirmationToast().then((a) => {
        if (a.isConfirmed) {
          BasicToast()
        }
      })}>Hi</button>
    </div>
  );
}

export default App;
