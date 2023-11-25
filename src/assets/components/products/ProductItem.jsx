/* eslint-disable react/prop-types */
const ProductItem = (props) => {
	return <article>
        <img src={props.image}/>
        <h3>{props.product}</h3>
        <p>{props.price}</p>
        <button type='button'>BUY NOW</button>
    </article>;
};

export default ProductItem;
