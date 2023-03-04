import React from 'react';
import { ContactListStyled, ContactItem } from './ContactList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactSlice';

import {  getFilteredContacts } from 'components/redux/selectors';
import { Button } from 'components/App/App.styled';



const ContactList = () => {
   const contacts = useSelector(getFilteredContacts);

   const dispatch = useDispatch();
   

  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactList;
