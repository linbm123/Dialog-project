import { useState } from "react";
import CustomDialog from "./component/CustomDialog.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="App">
      <section>
        <div id="sectionContent" aria-hidden={isOpen}>
          <button onClick={() => setIsOpen(true)}>Open Dialog</button>
        </div>
      </section>

      <CustomDialog
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        style={{
          width: "400px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
        backdropStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div>
          <div>
            <h2 style={{ color: "purple" }}>Welcome to My Custom Dialog</h2>
            <p style={{ fontSize: "18px", color: "gray" }}>
              Custom user-defined content
            </p>
            <button
              style={{
                padding: "10px 20px",
                background: "lightblue",
                marginBottom: "20px",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              A Custom Button
            </button>
          </div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </CustomDialog>
    </main>
  );
}
export default App;
