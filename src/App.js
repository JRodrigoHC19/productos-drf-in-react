import React, { Component } from "react";
import { Container } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        productos: [],
        recuperado: false,
      }
  }

  componentWillMount() {

    fetch('http://localhost:8000/productos/')
      .then( (response) => {
          return response.json()
      })
      .then( (prod) => {
          this.setState({ 
            productos: prod,
            recuperado: true,
          })
      })
  }
  
  mostrarTabla(){
    return (
      <Container maxWidth="sm" style={{marginTop:30}}>
        <TableContainer component={Paper} maxWidth="sm">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Precio</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.state.productos.map( prod => {
                return (
                  <TableRow key={prod.id}>
                    <TableCell>{prod.id}</TableCell>
                    <TableCell>{prod.descripcion}</TableCell>
                    <TableCell>{prod.precio}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }

  render(){
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      setInterval(() => {}, 2000);
      return ( <div>Recuperando Datos...</div> )

  }
}

export default App;
