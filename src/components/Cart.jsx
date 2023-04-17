import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Cart = () => {
    return (
        <>
            <div className=' bg-slate-700 rounded-full p-2'>
                <ShoppingCartIcon width={15} className=' cursor-pointer hover:opacity-75' />
            </div>
        </>
    );
}

export default Cart;