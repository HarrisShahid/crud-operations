import React from 'react'
import Product from './Product'


function Category({ctgy}) {
    const cats = ctgy.map((v,i)=>{
        return(
            <li key ={i} style={{padding: '20px', color: 'white', fontSize: '20px'}}>{v}</li>
        )
    })

  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Our Items</h2>
                <div className="row" style={{paddingTop: '40px'}} >
                  <div className="col-4">
                  <h2>Category</h2>
                <ul style={{backgroundColor:'#737373', listStyleType: 'none', textAlign: 'left', cursor: 'pointer'}} >
             {cats}
        </ul>
                  </div>

                  <Product/>
                </div>
    </div>
  )
}

export default Category
