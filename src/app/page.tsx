import { Suspense } from 'react'
import UserList from './components/userList'
import AddUserForm from './components/addUserForm'

export default function Home() {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList />
      </Suspense>
      <AddUserForm />
    </div>
  )
}
