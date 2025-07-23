import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const [mode, setMode] = useState(product.isRentable ? "buy" : "buy");
	const [selectedPeriod, setSelectedPeriod] = useState(product.rentalPeriodOptions?.[0] || "");

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}
		if (mode === "rent" && product.isRentable) {
			if (!selectedPeriod) {
				toast.error("Please select a rental period");
				return;
			}
			addToCart({
				...product,
				isRental: true,
				price: product.rentalPrice,
				rentalPeriod: selectedPeriod,
			});
			toast.success("Rental item added to cart");
		} else {
			addToCart({ ...product, isRental: false });
			toast.success("Product added to cart");
		}
	};

	return (
		<div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
				<img className='object-cover w-full' src={product.image} alt='product image' />
				<div className='absolute inset-0 bg-black bg-opacity-20' />
			</div>

			<div className='mt-4 px-5 pb-5'>
				<h5 className='text-xl font-semibold tracking-tight text-white'>{product.name}</h5>
				<div className='mt-2 mb-5 flex items-center justify-between'>
					<p>
						<span className='text-3xl font-bold text-emerald-400'>
							{mode === "rent" && product.isRentable ? `$${product.rentalPrice} / ${selectedPeriod || "period"}` : `$${product.price}`}
						</span>
					</p>
				</div>
				{product.isRentable && (
					<div className='mb-3 flex gap-2'>
						<button
							onClick={() => setMode("buy")}
							className={`px-3 py-1 rounded ${mode === "buy" ? "bg-emerald-600 text-white" : "bg-gray-700 text-gray-300"}`}
						>
							Buy
						</button>
						<button
							onClick={() => setMode("rent")}
							className={`px-3 py-1 rounded ${mode === "rent" ? "bg-emerald-600 text-white" : "bg-gray-700 text-gray-300"}`}
						>
							Rent
						</button>
						{mode === "rent" && (
							<select
								className='ml-2 bg-gray-700 text-white rounded px-2 py-1'
								value={selectedPeriod}
								onChange={e => setSelectedPeriod(e.target.value)}
							>
								<option value=''>Select period</option>
								{product.rentalPeriodOptions?.map(opt => (
									<option key={opt} value={opt}>{opt}</option>
								))}
							</select>
						)}
					</div>
				)}
				<button
					className='flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} className='mr-2' />
					{mode === "rent" && product.isRentable ? "Add Rental" : "Add to cart"}
				</button>
			</div>
		</div>
	);
};
export default ProductCard;
