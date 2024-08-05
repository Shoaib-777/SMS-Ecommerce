import { auth, signOut } from '../auth';
import Link from 'next/link';
import WishlistViewProfile from '../component/WishlistViewProfile';

const Profile = async () => {

    let user;
    try {
        const authResult = await auth();
        user = authResult.user;
    } catch (error) {
        console.error('Error during authentication:', error);
        return (
            <div>
                <h2 className='font-bold text-3xl text-center mt-4 mb-4'>
                 Please Login First and try again.
                </h2>
                <Link href={'/login'}>
                    <h2 className='text-red-600 hover:underline cursor-pointer text-center font-bold text-3xl'>
                        Login Here
                    </h2>
                </Link>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <h2 className='font-bold text-3xl text-center mt-4 mb-4'>
                    No Profile Found
                </h2>
                <Link href={'/login'}>
                    <h2 className='text-red-600 hover:underline cursor-pointer text-center font-bold text-3xl'>
                        Login Here
                    </h2>
                </Link>
            </div>
        );
    }

    return (
        <div class="bg-gray-100">
        <div class="flex justify-center items-center min-h-screen">
            <div class="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-4xl w-full">
                <div class="flex flex-col md:flex-row md:space-x-6">
                    <div class="flex flex-col items-center mb-6 md:mb-0">
                        <img class="w-32 h-32 rounded-full object-cover border-4 border-blue-500" src="https://via.placeholder.com/150" alt="User Image"/>
                        <h2 class="text-2xl font-bold text-gray-800 mt-4">{user.username}</h2>
                        <p class="text-gray-600">{user.email}</p>
                    </div>
                    <div class="flex-1">
                        <div class="border-b pb-4 mb-4">
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">Order History</h3>
                            <ul>
                                <li class="mb-2">
                                    <div class="flex justify-between">
                                        <span>Order #1234</span>
                                        <span class="text-gray-500">25th Jul, 2023</span>
                                    </div>
                                    <p class="text-gray-600">Status: Delivered</p>
                                </li>
                                <li class="mb-2">
                                    <div class="flex justify-between">
                                        <span>Order #1233</span>
                                        <span class="text-gray-500">10th Jul, 2023</span>
                                    </div>
                                    <p class="text-gray-600">Status: Pending</p>
                                </li>
                            </ul>
                        </div>
                        <div class="border-b pb-4 mb-4">
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">Wishlist</h3>
                            <WishlistViewProfile/>
                            {/* <ul>
                                {wishItems.length > 0 ? (
                                    wishItems.map((product) => (
                                <li key={product.id} class="mb-2">
                                    <div class="flex justify-between">
                                        <span>{product.title}</span>
                                        <Link href={'/wishlist'}><button class="text-blue-500">View</button></Link>
                                    </div>
                                </li>
          ))):(<>
            <h3 className="text-center mt-[6rem] text-2xl font-bold  text-black col-span-1 md:col-span-2 lg:col-span-3">
              No items were added to the WishList. <Link href={'/'}><span className='text-red-600 hover:underline'>View Products</span></Link> 
            </h3>
            </>
          )}
                            </ul> */}
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-700 mb-2">Settings</h3>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
                        </div>
                        <div className='mt-4'>
                            <form action={async () => {
                                        "use server"
                                        await signOut();}}>
                            <button class="bg-red-500 text-white px-7 py-2 rounded">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <div>
        //     <div className='text-3xl font-bold'>
        //         {user.email}
        //     </div>
        //     <form
        //         action={async () => {
        //                 "use server"
        //                 await signOut();}}>
        //         <button className='border border-black text-center'>
        //             Logout
        //         </button>
        //     </form>
        // </div>
    );
};

export default Profile;
