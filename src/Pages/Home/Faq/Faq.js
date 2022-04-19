import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='container' id='faq'>
            <h2 className='text-center my-5'>FAQ</h2>
            <Accordion className='my-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why chose me?</Accordion.Header>
                    <Accordion.Body>
                    i provided best quality food for customer.  i meke food by maintaing proper hygenic. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are these homemade foods?</Accordion.Header>
                    <Accordion.Body>
                    Yes all food is made at home. food is prepared for the customer according to proper hygiene and they are delivered. we use high quality products in food without bsd chemical.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;