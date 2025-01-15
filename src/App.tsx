import "./App.css";
import DialogProvider from "./component/DialogProvider.tsx";
import MyContent from "./component/MyContent.tsx";

function App() {
  return (
    <DialogProvider>
      <MyContent>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "purple" }}>Welcome to My Custom Dialog</h2>
          <p style={{ fontSize: "18px", color: "gray" }}>
          Custom user-defined content
          </p>
          <button
            style={{
              padding: "10px 20px",
              background: "lightblue",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            A Custom Button
          </button>
        </div>
      </MyContent>
    </DialogProvider>
  );
}
export default App;
