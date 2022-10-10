import React, {useState}  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function SummaryForm() {
    const [isTCChecked, setIsTCChecked] = useState(false);

    const tc_popover = (
        <Popover id="tc-popover">
          <Popover.Body>
          No Icecreams will be actually delivered
          </Popover.Body>
        </Popover>
    );

    const checkBoxLabel = (
        <span>
            I agree to
             <OverlayTrigger placement="right" overlay={tc_popover}>
                <span style={{color:'blue'}}> Terms and Conditions</span>
            </OverlayTrigger>

        </span>
    );


    return <>
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                type='checkbox'
                checked={isTCChecked}
                onChange={(e) =>{setIsTCChecked(e.target.checked)}}
                label={checkBoxLabel}
                style={{display:'inline-block'}} />
            </Form.Group>
            <Button
            variant='primary'
            type="submit"
            disabled={!isTCChecked}>
                Confirm Order
            </Button>
        </Form>
    </>
}

export default SummaryForm;
