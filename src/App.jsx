
import DrugSearch from './DrugSearch'
import './App.css'

const App = () => {
  return (
    <div>
      <DrugSearch 
        lowStockColor="red"
        mediumStockColor="yellow"
        highStockColor="green"
      />
    </div>
  );
};

export default App
