
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(){
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Gracias por confiar en Nosotros'}/>
        </div>
    )
}

export default App;