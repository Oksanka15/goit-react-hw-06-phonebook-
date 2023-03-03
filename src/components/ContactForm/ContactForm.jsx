import { useState } from 'react';
// import { nanoid } from 'nanoid';

// import { ContactFormStyled } from './ContactForm.styled';
// import {
//   Button,
//   InputGroup,
//   InputLabel,
//   Input,
//   InputBar,
// } from '../App/App.styled';
import { Form, InputName, Input, AddContact } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContact } from 'components/redux/contactSlice';
import { getContacts } from 'components/redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // return (
  //   <ContactFormStyled onSubmit={handleSubmit}>
  //      <InputGroup>
  //     <InputLabel>Name</InputLabel>
  //     <Input
  //       type="text"
  //       value={name}
  //       onChange={handleChange}
  //       name="name"
  //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //       required
  //     />
  //      <InputBar></InputBar>
  //      </InputGroup>
  //     <InputLabel>Number</InputLabel>
  //     <Input
  //       type="tel"
  //       value={number}
  //       onChange={handleChange}
  //       name="number"
  //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //       required
  //     />
  //     <Button type="submit">Add contact</Button>
  //   </ContactFormStyled>
  // );
  return (
    <Form onSubmit={handleSubmit}>
      <InputName>Name</InputName>
      <Input
        type="text"
        value={name}
        onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputName>Number</InputName>
      <Input
        type="tel"
        value={number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
};

export default ContactForm;

// export function ContactForm() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();

//   const handleChange = evt => {
//     if (evt.target.name === 'name') {
//       setName(evt.target.value);
//     }
//     if (evt.target.name === 'number') {
//       setNumber(evt.target.value);
//     }
//   };

//   const handleFormSubmit = evt => {
//     evt.preventDefault();

//     const contact = {
//       name: name,
//       number: number,
//     };
// dispatch(addContacts(contact));
// reset()

//   };const reset = () => {
//       setName('');
//       setNumber('');
//     };

//   const inputNameId = nanoid();
//   const inputNumberId = nanoid();

//   return (
//     <ContactFormStyled onSubmit={handleFormSubmit} autoComplete="off">
//       <InputGroup>
//         <Input
//           type="text"
//           id={inputNameId}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           value={name}
//           onChange={handleChange}
//           required
//         />
//         <InputLabel htmlFor={inputNameId}>Name</InputLabel>
//         <InputBar></InputBar>
//       </InputGroup>
//       <InputGroup>
//         <Input
//           type="tel"
//           name="number"
//           id={inputNumberId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           value={number}
//           onChange={handleChange}
//           required
//         />
//         <InputLabel htmlFor={inputNumberId}>Number</InputLabel>
//         <InputBar></InputBar>
//       </InputGroup>
//       <div>
//         <Button type="submit">Add contact</Button>
//       </div>
//     </ContactFormStyled>
//   );
// }
// ContactForm.propTypes = {
//   addContact: PropTypes.func,
// };
