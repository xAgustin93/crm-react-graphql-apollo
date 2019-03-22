import React, { Component, Fragment } from 'react'

class Producto extends Component {

    render() {

        const { producto } = this.props;
        // console.log(producto);

        // console.log(this.props);

        
        return (
            <Fragment>
                <tr>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio} €</td>
                    <td>{producto.stock} Uds.</td>
                    <td>
                        <input 
                            type="number" 
                            className="form-control"
                            onChange={e => this.props.actualizarCantidad(e.target.value, this.props.index)} />
                    </td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-danger font-weight-bold"
                            onClick={e => this.props.eliminarProducto(producto.id)} >
                                &times; Eliminar
                        </button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

export default Producto;