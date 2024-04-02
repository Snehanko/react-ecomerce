import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from "../store/cartSlice"

function Products() {
    const [newProducts, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchingProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (err) {
                alert("Failure to Fetch data")
            }
        }

        fetchingProducts()
    }, [])


    const addToCart = (product) => {
        dispatch((addProducts(product)))
    }

    return (
        <div>
            {
                isLoading ? <h1>Loading Data</h1> :
                    newProducts ? (
                        <div className="bg-gray-500">
                            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                <h2 className="sr-only">Products</h2>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {
                                        newProducts.map(product => <a href="#" className="group" key={product.id}>
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img src={product.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75" />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                                onClick={() => addToCart(product)}
                                            >
                                                Add to Cart
                                            </button>
                                        </a>)
                                    }
                                </div>
                            </div>
                        </div>
                    ) : <h1>No data Available</h1>
            }
        </div >
    )
}

export default Products
