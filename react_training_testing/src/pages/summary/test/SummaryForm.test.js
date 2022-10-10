// import { render } from 'react-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Test Summary Form', ()=>{
    it('Checkbox enables button', ()=>{
        render(<SummaryForm/>);
        const checkboxElem = screen.getByRole('checkbox',{
            name: /terms and conditions/i
        });
        expect(checkboxElem).not.toBeChecked();

        const confirmBtn = screen.getByRole('button', {
            name: /confirm order/i
        })
        expect(confirmBtn).toBeDisabled();

    })

    it('checkbox enabled confirm button', ()=>{
        render(<SummaryForm/>);
        const checkboxElem = screen.getByRole('checkbox',{
            name: /terms and conditions/i
        });

        userEvent.click(checkboxElem);
        expect(checkboxElem).toBeChecked();

        const confirmBtn = screen.getByRole('button', {
            name: /confirm order/i
        })
        expect(confirmBtn).toBeEnabled();


    })

    it('popover responds to hover', async ()=>{
        
        render(<SummaryForm/>)
        
        // popover start as hidden
        let nullPopover = screen.queryByText(/No Icecreams will be actually delivered/i);
        expect(nullPopover).not.toBeInTheDocument();

        // popover appears upon mouseover checkbox label
        const TCConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(TCConditions);

        const popover = screen.getByText(/No Icecreams will be actually delivered/i);
        expect(popover).toBeInTheDocument();

        // popover disappears when we mouseout
        userEvent.unhover(TCConditions);
        await waitForElementToBeRemoved(()=>
            screen.queryByText(/No Icecreams will be actually delivered/i)
        );
        expect(nullPopover).not.toBeInTheDocument();
    
    })
})