import React from 'react'

const Totalizers = (totalizers: any) => {
  const { id, name, value } = totalizers.total;
  console.log("Estos som:", id, name, value)

  return (
    <div>
      <p>Tenemos x items</p>
      <p>Total: x</p>
    </div>
  )
}

export default Totalizers;