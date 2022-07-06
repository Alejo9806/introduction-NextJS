import React from 'react'
import Router from 'next/router'

const Users = (props) => {
    return (
        <div className=''>
                <ul className=''>
                    {
                        props.users.map(user => (
                               <li key={user.id} className='box is-flex is-justify-content-space-between' onClick={e=> Router.push('/user/[id]',`/user/${user.id}`)}>
                                   <div>
                                        <h5>{user.first_name} {user.last_name}</h5>
                                        <p>Email: {user.email}</p>
                                   </div>
                                   <img src={user.avatar} alt={user.first_name + user.last_name} style={{borderRadius:'50%'}}/>
                               </li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default Users