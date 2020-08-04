import React from 'react';
import { Toast } from 'react-bootstrap';

export function Confirmation({ toggle }){
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your order is in the Oven</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>
                Your delicious will be with you in 30 minutes!
            </Toast.Body>
        </Toast>
    )
}