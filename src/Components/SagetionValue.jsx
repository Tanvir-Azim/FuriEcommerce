import React from 'react'
import { useFilterContax } from './FilterContax'

function SagetionValue() {
    const {sagetionVale}=useFilterContax()
  return (
    <div>{sagetionVale}</div>
  )
}

export default SagetionValue