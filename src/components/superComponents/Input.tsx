
import React, { useState } from "react"

export const Input = ({type,placeholder,setInput}:{type:string,placeholder:string,setInput?:any}) => {
    const handleSearchBar = (e:any) =>{
        setInput("kljhh")
    }
  return (
    <div>
        <input type={`${type}`} className="base_input" placeholder={`${placeholder}`} onChange={handleSearchBar}/>
    </div>
  )
}
