import React from 'react'

export const Formulario = () => {

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log("submit pulsado")
  }

  return (
    <div className='row my-3'>
      <form onSubmit={onSubmit} className='bg-secondary col-8 rounded p-4'>

        <div className="form-group my-2">        
          <label htmlFor="name" className='mb-1'>Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name='name'
            placeholder="Ingrese el nombre"               
          />
        </div>

        <div className="form-group my-2">        
          <label htmlFor="description" className='mb-1'>Descripcion</label>
          <input 
            type="text" 
            className="form-control" 
            id="description" 
            name='description'
            placeholder="Ingrese la descripción"               
          />
        </div>
      
        <div className="form-group my-2">        
          <label htmlFor="price" className='mb-1'>Precio</label>
          <input 
            type="number" 
            className="form-control" 
            id="price" 
            name='price'
            placeholder="Ingrese el precio"               
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  )
}
