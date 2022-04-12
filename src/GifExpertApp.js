import React, { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
   
    const [categorias, setCategorias] = useState(['']);
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategorias={setCategorias}/>
           
                   
            <ol> { 
                    categorias.map( category => (
                       <GifGrid 
                        key={category}
                        category={category}/>                       
                    ))
                }
            </ol>
        </>    
    )
      
};