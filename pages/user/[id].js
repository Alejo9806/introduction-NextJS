import React from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/Container'

const userProfile = ({ user }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
              <img src={user.avatar} alt={user.first_name + user.last_name} style={{ borderRadius: '50%' }} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{user.first_name} {user.last_name}</p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          </div>
          <div className="content">
          </div>
        </div>
      </div>
    </Container>
  )
}

userProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  return { user: resJSON.data }
}

export default userProfile