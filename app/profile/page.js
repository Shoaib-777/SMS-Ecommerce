import { auth, signOut } from '../auth';
import Link from 'next/link';

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
                    An error occurred. Please try again later.
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
        <div>
            <div className='text-3xl font-bold'>
                {user.email}
            </div>
            <form
                action={async () => {
                    "use server";
                    try {
                        await signOut();
                    } catch (error) {
                        console.error('Error during sign out:', error);
                    }
                }}
            >
                <button className='border border-black text-center'>
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Profile;

// import { auth, signOut } from '../auth';
// import Link from 'next/link';

// const Profile = async () => {
//     try {
//         const authResult = await auth();
//         const user = authResult?.user;

//         if (!user) {
//             return (
//                 <div>
//                     <h2 className='font-bold text-3xl text-center mt-4 mb-4'>
//                         No Profile Found
//                     </h2>
//                     <Link href={'/login'}>
//                         <h2 className='text-red-600 hover:underline cursor-pointer text-center font-bold text-3xl'>
//                             Login Here
//                         </h2>
//                     </Link>
//                 </div>
//             );
//         }

//         return (
//             <div>
//                 <div className='text-3xl font-bold'>
//                     {user.email}
//                 </div>
//                 <form
//                     action={async () => {
//                         "use server"
//                         await signOut();}}>
//                     <button className='border border-black text-center'>
//                         Logout
//                     </button>
//                 </form>
//             </div>
//         );
//     } catch (error) {
//         console.error('Error:', error);
//         return <div>Error loading profile</div>;
//     }
// }

// export default Profile;
