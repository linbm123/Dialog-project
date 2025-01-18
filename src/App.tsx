import { useState } from "react";
import CustomDialog from "./component/CustomDialog.tsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="App">
      <section>
        <div id="sectionContent" aria-hidden={isOpen}>
          <button
            className="open-dialog-button"
            onClick={() => setIsOpen(true)}
          >
            Open Dialog
          </button>
        </div>
        <div>
          <input type="text" placeholder="Type here..." />
        </div>
      </section>

      <CustomDialog
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        className="custom-dialog"
        backdropClassName="custom-backdrop"
      >
        <div>
          <h2>Welcome to My Custom Dialog</h2>
          <p>Custom user-defined content</p>
          <button>A Custom Button</button>
          <div>
            <button
              className="close-dialog-button"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </CustomDialog>
    </main>
  );
}

export default App;
