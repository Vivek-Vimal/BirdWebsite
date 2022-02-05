import React from 'react';
import PageLayout from '../../../Components/PageLayout';
import Width from '../../../Components/Width/Width';
import Heading from '../../../Components/Heading'
import Button from '../../../Components/Button/Button';
import ContactInput from './component/ContactInput';

const Contact = () => {
  return (
    <PageLayout contactImg>
        <Width column>
            <Heading Text="Contact Us" />
            <ContactInput />
            <Button Text='Contact Us' />
        </Width>
    </PageLayout>
    )
};

export default Contact;
