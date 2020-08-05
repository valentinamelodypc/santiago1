import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sergio</th>
      <td>Morquera</td>
      <td>Sedamomo123@gmail.com</td>
      <td>3104144655</td>
    </tr>
    <tr>
      <th scope="row">Juan</th>
      <td>Montoya</td>
      <td>Juanmanuel16montoya@gmail.com</td>
      <td>3103987178</td>
    </tr>
    <tr>
      <th scope="row">Valentina</th>
      <td>Peña</td>
      <td>valentinamelodycorredor@gmail.com</td>
      <td>3003295894</td>
    </tr>
  </tbody>
</table>
      </header>
    </div>
  );
}

export default App;
