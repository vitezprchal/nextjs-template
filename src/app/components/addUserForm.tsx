'use client';

import { useState } from 'react';
import { trpc } from '../../utils/trpc';

export default function AddUserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const utils = trpc.useUtils();
    const createUser = trpc.user.createUser.useMutation({
        onSuccess: () => {
            utils.user.getUsers.invalidate();
            setName('');
            setEmail('');
            setError('');
        },
        onError: (error) => {
            console.error('Error creating user:', error);
            setError(error.message);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createUser.mutate({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit" disabled={createUser.isLoading}>
                Add User
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}