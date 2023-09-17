import Image from 'next/image'
import React from 'react'

async function getUser(id) {
   const res = await fetch(`https://reqres.in/api/users/${id}`)
   const data = await res.json()
   return data.data
}

async function UserPage({ params }) {
   const user = await getUser(params.id);

   return (
      <div className='bg-gray-800 p-10'>
         <Image
            src={user.avatar}
            alt='user avatar'
            className='rounded-full w-20 m-auto'
            width={400}
            height={400}
         />
         <h3 className='mt-5 text-center font-bold text-lg'>
           #{user.id}: {user.first_name} {user.last_name}
         </h3>
         <p className='text-center'>{user.email}</p>
      </div>
   );
}

export default UserPage
