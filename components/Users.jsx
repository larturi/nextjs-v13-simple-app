import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Users = ({users}) => {
  return (
    <ul>
      { users.map(user => (
        <Link key={user.id} href={`/users/${user.id}`}>
            <li 
            
            className="bg-gray-700 mb-2 p-5 flex justify-between"
            >
            <div>
                <h5 className="font-bold">#{user.id}</h5>
                <h5 className="font-bold">{user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
            </div>
            <Image 
                src={user.avatar} 
                alt="user avatar" 
                className="rounded-full w-20" 
                width={400}
                height={400}
            />
            </li>
        </Link>
      ))}
    </ul>
  )
}

export default Users