import './App.css';
import DialogProvider from "./component/DialogProvider.tsx";
import MyContent from "./component/MyContent.tsx";


function App() {
    return (
        <DialogProvider>
            <MyContent title={'dialog project'} />
        </DialogProvider>
    );
}

export default App;