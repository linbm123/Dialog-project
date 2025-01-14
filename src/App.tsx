import './App.css';
import DialogProvider from "./component/DialogProvider.tsx";
import MyContent from "./component/MyContent.tsx";


function App() {
    return (
        <DialogProvider>
            <MyContent/>
        </DialogProvider>
    );
}

export default App;