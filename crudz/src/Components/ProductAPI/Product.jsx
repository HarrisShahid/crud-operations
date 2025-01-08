import React from 'react'

function Product(pros) {

  const productss = pros.map((v,i)=>{
    return(
      <div className="card" style={{width: '18rem'}}>
      <img src='https://rivaj-uk.com/cdn/shop/files/Classy-Lipstick_01_texture.jpg?v=1735901214' className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{pros.title}</h5>
          <p className="card-text">Paragraph</p>
        </div>
    </div>
    )
})

  return (
    <div>
      <h2>Products</h2>
      {productss}
    </div>
  )
}

export default Product
