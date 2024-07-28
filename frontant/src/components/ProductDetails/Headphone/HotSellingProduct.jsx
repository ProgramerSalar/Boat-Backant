
// import Data from "../../../assets/data/product.json"
import { PiGreaterThan } from 'react-icons/pi'
import { useProductContext } from '../../../context/productContext'
import Loader from '../../Loader'
import HotSellingProductCard from './HotSellingProductCard'



const HotSellingProduct = () => {

    const { isLoading, featureProducts} = useProductContext()
    // console.log("feature-products", featureProducts)

    if(isLoading){
        return <Loader/>

    }






    return (
        <div className="product-main-section">

            <div className="icon-and-heading-tag" >
                <h1>Hot-Selling Gadgets</h1>
                <a href="/hot-selling-product-collection" className="icon">View all <PiGreaterThan /></a>
            </div>

            <p className="upper-product-border"></p>






            <div className="main-container">

                {
                    featureProducts.map((i) => (

                        <HotSellingProductCard key={i.id} {...i} />


                    ))

                }


            </div>
        </div>
    )
}

export default HotSellingProduct