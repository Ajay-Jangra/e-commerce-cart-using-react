import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { addToCart } = useCart()

    const searchQuery = query.get('q');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
            setProducts(products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <>



            <div className="container">
                <p>Move Down For More Items</p>
                <div className="products my-5" style={{ minHeight: "230px" }}>

                    <div className="grid">
                        {loading ? (
                            
                            <div className="loader" />
                        ) : (

                            products.map((product) => (

                                (product.id > 0 && product.id < 5) ? (
                                    <>
                                        <AnimationOnScroll animateIn="animate__bounceIn" offset={0} initiallyVisible="true">
                                            <Item key={product.id} data={product} addToCart={() =>
                                                addToCart(product)} />
                                        </AnimationOnScroll>
                                    </>
                                ) : (
                                    <AnimationOnScroll animateIn="animate__bounceIn">
                                        <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
                                    </AnimationOnScroll>

                                )
                            ))

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export { Products }