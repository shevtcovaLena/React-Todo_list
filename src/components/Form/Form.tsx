import React, {useContext} from 'react'
import { IPropsForm } from '../../types/type'
import { ContextAll } from '../../context/context'

export default function Form( ) {
    const { inputs, formHandler, submitHandler } : IPropsForm = useContext(ContextAll)
  return (
   <form onSubmit={submitHandler}>
    <input onChange={formHandler} type="text" name="title" placeholder="title" value={inputs.title} />
    <button type="submit">Add</button>
   </form>
  )
}
