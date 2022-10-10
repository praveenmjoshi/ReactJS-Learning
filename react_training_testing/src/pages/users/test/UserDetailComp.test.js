import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";

import UserDetails from "../UserDetailComponent";

describe('test user details component', ()=>{

    it('user detail component display default text', ()=>{
        render(<UserDetails />)
        const defaultElem = screen.queryByText(/Display default data/i)
        expect(defaultElem).toBeInTheDocument();
    });

    it('user detail component display user details', async()=>{
        render(<UserDetails userId={1} />)
        const usernameElem = await screen.findByTestId('username')
        expect(usernameElem).toBeInTheDocument()
    });
})