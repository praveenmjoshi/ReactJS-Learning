import { render, screen } from '@testing-library/react';
import UserList from '../UserListComponent';

describe('Test UserList functionality', ()=>{
    test('display users list', async()=>{
        render(<UserList/>);

        const usersNames = await screen.findAllByTestId('user-name');
        // eslint-disable-next-line jest-dom/prefer-in-document
        expect(usersNames).toHaveLength(1)
    })
})