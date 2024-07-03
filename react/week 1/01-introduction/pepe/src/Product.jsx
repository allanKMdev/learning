import { useParams } from "react-router-dom";

const Product = () =>{
    const {productid} = useParams();

    return(
        <div>Showing product</div>
    )
}

export default Product