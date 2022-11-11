import {useState} from 'react'
import { BaseColaboradores } from "../BaseColaboradores";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ListaColaboradores = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    const [listaSinFiltrar, setListaSinFiltrar] = useState(BaseColaboradores)
    const guardaNombre = (e) => setNombre(e.target.value)
    const guardaCorreo = (e) => setCorreo(e.target.value)
    const nombreNuevo   = document.querySelector('#nombreNuevo')
    const filtro   = document.querySelector('#filtro')
    const grabar = (e) => {
        const lista = [...listaSinFiltrar, {id: Math.random(), nombre: nombre, correo: correo}]
        setListaColaboradores(lista)
        setListaSinFiltrar(lista)
        setNombre('')
        setCorreo('')
        filtro.value = ''
        nombreNuevo.focus()
    }
    const buscar = (e) => {
        setListaColaboradores(listaSinFiltrar.filter(colaborador => colaborador.nombre.toLowerCase().includes((e.target.value).toLowerCase())))
        if (e.target.value === '') setListaColaboradores(listaSinFiltrar)
    }
    return(
        <Container className='mt-5'>
            <div className='bloque'>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <h6 color='red'>Buscador de colaboradores</h6>
                        </Navbar.Brand> 
                        <Form>
                            <Form.Control size='sm' id="filtro" type='text' placeholder='Busca un colaborador' onChange={buscar}/>
                        </Form> 
                    </Container>
                </Navbar>
            </div>
            <div className='bloque'>
                <Form.Group className="mb-1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control size='sm' id="nombreNuevo" type='text' value={nombre} placeholder='Ingrese el nombre del colaborador' onChange={guardaNombre}/>
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control size='sm' id="correoNuevo" type='text' value={correo} placeholder='Ingrese correo del colaborador' onChange={guardaCorreo}/>
                </Form.Group>
                <Button className='mt-3' onClick={grabar}>Agregar colaborador</Button>
            </div>
            <div className='bloque'>
                <hr></hr>
                <h2>Listado de colaboradores</h2>
                <ul>
                    {listaColaboradores.map((colaborador) => (<li key = {colaborador.id}> {colaborador.nombre} - {colaborador.correo}</li>))}
                </ul>        
            </div>
        </Container>
    )
}

export default ListaColaboradores;