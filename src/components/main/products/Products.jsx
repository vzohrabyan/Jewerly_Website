import { useSelector } from 'react-redux';

const Products = () => {
    const {products} = useSelector((state) => state)
    console.log(products);
  return (
    <div className='products'>
        {products.length !== 0 && products.map(({productName, price, image}, id) => {
            return <div className="product" key={id}>
                <img src={image} alt="Earrings Product" />
                <h3>{productName}</h3>
                <p>${price}</p>
            </div>
        })}
    </div>
  )
}

export default Products