"use client";
import React, { useState } from 'react';

interface Customer {
    id: number;
    name: string;
    email: string;
}

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newCustomer: Customer = {
            id: customers.length + 1,
            name,
            email,
        };

        setCustomers([...customers, newCustomer]);
        setName('');
        setEmail('');
    };

    return (
 
      
    );
};

export default CustomerList;