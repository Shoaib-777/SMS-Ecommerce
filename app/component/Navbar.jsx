'use client';
import '../globals.css';
import { BiUser } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import AddToCart from './AddToCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const CartItemslength = useSelector((state) => state.counter.items);
    const WishlistLength = useSelector((state) => state.counter.itemsw);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState(false);
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [appear, setAppear] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (query) {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [query, products]);

    return (
        <>
                <div className="border border-gray-200 w-full h-[60px] px-4 py-2 mb-3 relative ">
                    <nav className="flex justify-between ">
                        <div className="flex px-4">
                            <Link href={'/'}><h4 className="text-3xl font-serif font-extrabold text-black ml-2 cursor-pointer">Brand Logo</h4></Link>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div>
                                <ul className=" flex justify-center items-center gap-6 text-xl font-semibold ">
                                    <Link href={'/'}><li className="px-4 py-1 text-black relative hovers-link cursor-pointer">Home</li></Link>
                                    <Link href={'/about'}><li className="px-4 py-1  text-black relative hovers-link  cursor-pointer">About Us</li></Link>
                                    <Link href={'/contact'}><li className="px-4 py-1  text-black relative hovers-link  cursor-pointer">Contact Us</li></Link>
                                </ul>
                            </div>
                            <div>
                                <Link href={'/login'}><button className="text-xl border-[2px] border-black text-white px-4 py-1 font-bold rounded-xl bg-black hover:bg-white hover:text-black  ">Login</button></Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center  md:hidden'>
                            {menu ? (
                                <IoCloseSharp className='w-10 h-10 cursor-pointer' onClick={() => setMenu(!menu)} />
                            ) : (
                                <IoMenu className='w-10 h-10 cursor-pointer' onClick={() => setMenu(!menu)} />
                            )}
                        </div>
                    </nav>
                </div>
                <div className={`${menu ? 'block' : 'hidden'}  w-full h-[100%] mt-1 bg-slate-50 absolute z-10 px-4 pt-[6rem]`}>
                    <div className='px-4 py-2 '>
                        <ul className='flex flex-col justify-center items-center gap-6 font-semibold'>
                            <Link href={'/'}><li onClick={() => setMenu(false)} className='px-4 py-1 font-bold text-3xl text-black relative hovers-link'>Home</li></Link>
                            <Link href={'/about'}><li onClick={() => setMenu(false)} className='px-4 py-1 font-bold text-3xl text-black relative hovers-link'>About Us</li></Link>
                            <Link href={'/contact'}><li onClick={() => setMenu(false)} className='px-4 py-1 font-bold text-3xl text-black relative hovers-link'>Contact Us</li></Link>
                            <Link href={'/login'}><li onClick={() => setMenu(false)} className='px-4 py-1 font-bold text-3xl text-black relative hovers-link'>Login</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center relative w-full px-4 mb-2 border border-gray-200 py-1'>
                    <div className='relative w-full mx-2 md:mx-6 border border-gray-200'>
                        <input 
                            type="text" 
                            placeholder='Search Products...' 
                            name="" 
                            id="" 
                            className='w-full px-4 py-2 outline-none' 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)}
                            onClick={() => setAppear(true)} 
                        />
                        <button ><FaSearch fill='gray' className='absolute top-2 right-1 w-6 h-6' /></button>
                    </div>
                    <div className='absolute -bottom-14 left-9 h-full w-[calc(100%-50px)] z-20 '>
                        {filteredProducts.length > 0 && (
                            <ul className={` ${appear ? 'block' : 'hidden'} w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-20`}>
                                {filteredProducts.map(product => (
                                    <Link key={product.id} href={`/singleproduct/${product.id}`}>
                                        <li key={product.id} className="p-2 border-b hover:bg-gray-100 ">
                                            <h3 onClick={() => setAppear(false)} className="text-sm font-semibold overflow-hidden tracking-tighter text-nowrap">{product.title}</h3>
                                            <p className="text-sm text-gray-600 hidden">{product.description}</p>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex left-0 py-2 px-4 gap-4 md:gap-6'>
                        <div className='relative'>
                            <Link href={'/profile'}><BiUser fill='black' className=' w-8 h-8 cursor-pointer' /></Link>
                            <div className='absolute bg-red-600 rounded-full top-0 right-0 w-4 h-4 text-[10px] grid place-items-center translate-x-1 -translate-y-1'>
                                <span className='font-bold'>0</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <Link href={'/wishlist'}><FaRegHeart fill='black' className=' w-8 h-8 cursor-pointer' /></Link>
                            <div className={`absolute ${WishlistLength.length > 0 ? 'bg-red-600' : 'bg-none'} rounded-full top-0 right-0 w-4 h-4 text-[10px] grid place-items-center translate-x-1 -translate-y-1`}>
                                <span className='font-bold'>{WishlistLength.length > 0 ? WishlistLength.length : ''}</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <BsCart fill='black' className=' w-8 h-8 cursor-pointer' onClick={() => setCart(!cart)} />
                            <div className={`absolute ${CartItemslength.length > 0 ? 'bg-red-600' : 'bg-none'} rounded-full top-0 right-0 w-4 h-4 text-[10px] grid place-items-center translate-x-1 -translate-y-1`}>
                                <span className='font-bold'>{CartItemslength.length > 0 ? CartItemslength.length : ''}</span>
                            </div>
                        </div>
                        <div className={`${cart ? 'block' : 'hidden'} absolute w-full bg-gray-50 z-10 left-0 top-0 `}>
                            <IoCloseSharp className='w-10 h-10 cursor-pointer absolute top-2 right-5' onClick={() => setCart(!cart)} />
                            <AddToCart />
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Navbar;
