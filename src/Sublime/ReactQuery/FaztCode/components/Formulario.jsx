import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { createProduct } from '../api/productsAPI';

export const Formulario = () => {

  const queryClient = useQueryClient(); //recarga y muestra los nuevos

  //Agregar Productos
  const addProductMutation =  useMutation({
    mutationFn: createProduct,
    onSuccess: () => { //Ejecuta una función una vez añadido
      console.log("producto Añadido")
      
      //le indicamos que api debe llamar nuevamente
      queryClient.invalidateQueries('products');

    }
  });

  //onSubmit
  const onSubmit = (e) =>{
    e.preventDefault();

    //Formulario en javascript para obtener los valores
    const formData = new FormData(e.target);
    //console.log(formData) //FormData(3) { name → "", description → "", price → "" }

    //Convertimos a objeto "extraemos los valores"
    const productos = Object.fromEntries(formData);
    //console.log(productos) //FormData(3) { name → "", description → "", price → "" }
    addProductMutation.mutate({
      ...productos,
      inStock: true
    })

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
