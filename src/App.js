import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Modal,ModalBody,ModalHeader,ModalFooter,Input,Button} from 'reactstrap';




const url = 'http://127.0.0.1:8000/api/reservas'

class App extends React.Component {

  state={
    data:[],
    modalInsertar: false,
    form:{
      id: '',
      nombres: '',
      apellido: '',
      edad: '',
      sexo: '',
      identificacion: '',
      direccion: '',
      telefono: '',
      email: '',
      ubicacion: '',
      pelicula: '',
    }
  }

  peticionGet=() => {
    axios.get(url).then(response => {
      this.setState({data:response.data})
    }).catch(error => {
      console.log(error.message)
    })
  }


  peticionPost=async() => {
    delete this.state.form.id
    await axios.post(url,this.state.form).then(response => {
        this.modalInsertar()
        this.peticionGet()
    }).catch(error => {
      console.log(error.message)
    })
  }

  peticionPut=() => {
    axios.put(url+this.state.form.id,this.state.form).then(response => {
      this.modalInsertar()
      this.peticionGet()

    })
  }

  modalInsertar=() => {
    this.setState({modalInsertar:!this.state.modalInsertar})
  }
  seleccionarReservar=(reservas) =>{
    
    this.setState({
      tipoModal: 'actualizar',
      form:{
        id: reservas.id,
        nombres:  reservas.nombre,
        apellido: reservas.apellido,
        edad: reservas.edad,
        sexo: reservas.sexo,
        identificacion: reservas.identificacion,
        direccion: reservas.direccion,
        telefono: reservas.telefono,
        email: reservas.email,
        ubicacion: reservas.ubicacion,
        pelicula: reservas.pelicula,
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  

  componentDidMount() {
    this.peticionGet()
  }
  
  render(){
      const {form}=this.state
    return (  
      <>
        <div className="App mt-5">
          <button className="btn btn-success ms-3" onClick={this.modalInsertar}>agregar reserva</button>
          <table className="table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombres</td>
                <td>Apellido</td>
                <td>Edad</td>
                <td>Sexo</td>
                <td>Identificacion</td>
                <td>Direccion</td>
                <td>Telefono</td>
                <td>Email</td>
                <td>ubicacion</td>
                <td>Pelicula</td>
                <td>Accion</td>
                
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(reservas=>{
                return (
                  <tr>
                    <td>{reservas.id}</td>
                    <td>{reservas.nombres}</td>
                    <td>{reservas.apellido}</td>
                    <td>{reservas.edad}</td>
                    <td>{reservas.sexo}</td>
                    <td>{reservas.identificacion}</td>
                    <td>{reservas.direccion}</td>
                    <td>{reservas.telefono}</td>
                    <td>{reservas.email}</td>
                    <td>{reservas.ubicacion}</td>
                    <td>{reservas.pelicula}</td>
                    <td>
                        <button class="btn btn-primary"><FontAwesomeIcon icon={faEdit}/></button>
                        {" "}
                        <button class="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar tu Reserva</h3></div>
          </ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id"  readOnly onChange={this.handleChange} value={ form?form.id:this.state.data.length+1}/>
              <br/>
              <label htmlFor="nombres">Nombre</label>
              <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange}  value={form?form.nombre:form.nombre}/>
              <br/>
              <label htmlFor="nombres">Apellido</label>
              <input className="form-control" type="text" name="apellido" id="apellido" onChange={this.handleChange} value={form?form.apellido:form.apellido}/>
              <br/>
              <label htmlFor="nombres">Edad</label>
              <input className="form-control" type="text" name="edad" id="edad" onChange={this.handleChange} value={form?form.edad:form.edad}/>
              <br/>
              <label htmlFor="nombres">Sexo</label>
              <input className="form-control" type="text" name="sexo" id="sexo" onChange={this.handleChange} value={form?form.sexo:form.sexo}/>
              <br/>
              <label htmlFor="nombres">Identificacion</label>
              <input className="form-control" type="text" name="identificacion" id="identificacion" onChange={this.handleChange} value={form?form.identificacion:form.identificacion}/>
              <br/>
              <label htmlFor="nombres">Direccion</label>
              <input className="form-control" type="text" name="direccion" id="direccion"  onChange={this.handleChange} value={form?form.direccion:form.direccion}/>
              <br/>
              <label htmlFor="nombres">Telefono</label>
              <input className="form-control" type="text" name="telefono" id="telefono"  onChange={this.handleChange} value={form?form.telefono:form.telefono}/>
              <br/>
              <label htmlFor="nombres">Email</label>
              <input className="form-control" type="text" name="email" id="email"  onChange={this.handleChange} value={form?form.email:form.email}/>
              <br/>
              <label htmlFor="nombres">Ubicacion</label>
              <input className="form-control" type="text" name="ubicacion" id="ubicacion"  onChange={this.handleChange} value={form?form.ubicacion:form.Ubicacion}/>
              <br/>
              <Input type="select" name="pelicula" className="form-contro"onChange={this.handleChange} value={form?form.pelicula:form.pelicula}>
              <option>Marry Men</option>
                <option>Moonfall</option>
                <option>Uncharted fuera del Mapa</option>
                <option>Muerte en el Nilo</option>
                <option>Pasajero 666</option>
                <option>Spider Man No Way House</option>
                <option>Corazon de Fuego</option>
                <option>Sing 2</option>
                <option>Desastre en el Vuelo 57</option>
                <option>Encanto</option>
              </Input>
            </div>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal=='insetar'}
            <Button
              color="primary"
              onClick={() => this.peticionPost()}
            >
              Insertar
            </Button>
           
            <Button
              className="btn btn-danger"
              onClick={() => this.modalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );

  };
 
}

export default App;
