'useClient'
import React from "react"

export default function Input({name='', onChange}) {
  return (
  <input
    onChange={onChange}
    name={name}
    type='text'
    className={" bg-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"}
  />
  )
}