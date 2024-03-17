import logo from './logo.svg';
import './App.css';

function App() {
  const array = [
    {name :'Rafiul' ,age :23 , gender : 'Male'},
    {name :'Sayma' ,age :15 , gender : 'Female'},
    {name :'Noyon' ,age :14 , gender : 'Female'},
    {name :'Liza' ,age :14 , gender : 'Female'},
    {name :'Ajmira' ,age :22 , gender : 'Female'},
    {name :'Mohona' ,age :15 , gender : 'Female'},
    {name :'Forget' ,age :14 , gender : 'Female'}
  ]
  return (
    <div className="App">
      {
        array.map(person => <Component name={person.name} age={person.age} gender={person.gender}></Component>)
      }
    </div>
  );
}
function Component (props){
  return (
    <div className='style'>
      <h1>Name : {props.name} </h1>
      <h3>Age : {props.age} </h3>
      <h4>Gender : {props.gender}</h4>
    </div>
  )
}

export default App;
