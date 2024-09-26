'use client';

import { trpc } from '../../utils/trpc';
import { User } from '../types/user';

export default function UserList() {
    const { data: users, isLoading, error } = trpc.user.getUsers.useQuery();

    if (isLoading) return <div>Loading users...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {users?.map((user: User) => (
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}