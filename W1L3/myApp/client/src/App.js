import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Base from './components/Base';
import Nav from './components/Nav';

function App() {

  const obj ={
    name:"bobb",
    age:80
  }

  return (
    <div className="App">
      <Base name = {"Parent Page"}>
        
        <Nav/>
        
        <HelloWorld name={obj.name} age={obj.age} />
        <HelloWorld name={"Phil"} age={34} />
        <HelloWorld name={"Bill"} age={67} />
        <HelloWorld name={"Mike"} age={23} />
        <HelloWorld name={"Matt"} age={95} />
      </Base>
    </div>
  );
}

export default App;
