import ProductItem from "./ProductItem";
import { v4 as uuidv4 } from "uuid";

const ProductList = () => {
	const products = [
		{
			image: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
			product: "Cocooil",
			price: "$ 30",
		},
		{
			image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			product: "Kamera",
			price: "$ 60",
		},
		{
			image: "https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
			product: "Maui Moisture",
			price: "$ 20",
		},
	];

	return (
		<section className="section__products">
			<h2>Unsere Produkte</h2>
			<div>
				{products.map((product) => (
					<ProductItem
						key={uuidv4()}
						image={product.image}
						product={product.product}
						price={product.price}
					/>
				))}
			</div>
		</section>
	);
};

// const ProductList = () => {
// 	return (
// 		<section className="section__products">
//             <h2>Unsere Produkte</h2>
// 			<div>
//                 <ProductItem image={"https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"}
//                 product={'cocooil'}
//                 price={'$ 30'}
//                 />

//                 <ProductItem image={"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
//                 product={'Kamera'}
//                 price={'$ 60'}
//                 />

//                 <ProductItem image={"https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg"}
//                 product={'Maui Moisture'}
//                 price={'$ 20'}
//                 />
//             </div>
// 		</section>
// 	);
// };

export default ProductList;
