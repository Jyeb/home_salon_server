import React, { useState } from 'react'
import axios from 'axios'
const CreateDeal = () => {
  const [deal, setDeal] = useState({
    name: '',
    price: '',
    services: []
  })

  const { name, price, services } = deal

  const onChange = e =>
    setDeal({ ...deal, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    const newDeal = {
      name,
      price,
      services
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'aspplication/json'
        }
      }
      const body = JSON.stringify(newDeal)
      const res = await axios.deal()
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <div>
      <form onSubmit={e => onsubmit(e)}>
        <label>
          Deal:
          <input
            type='text'
            placeholder='Deal Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type='text'
            placeholder='Price'
            name='price'
            value={price}
            onChange={e => onChange(e)}
            required
          />
        </label>
        <label>
          Services:
          <input
            type='text'
            placeholder='Services'
            name='services'
            value={services}
            onChange={e => onChange(e)}
            required
          />
        </label>
      </form>
    </div>
  )
}

export default CreateDeal
