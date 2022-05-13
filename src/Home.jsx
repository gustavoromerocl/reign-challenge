import React from 'react'
import Card from './components/Card'
import Pagination from './components/Pagination'
import RadioButton from './components/RadioButton'

export default function Home() {
  return (
    <div>
      <RadioButton />
      <Card />
      <Pagination />
    </div>
  )
}
