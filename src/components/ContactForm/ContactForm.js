import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/redusers';

function errorAlert(error) {
  if (error) {
    alert(error);
  }
}

function validatePhone(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i.test(
      value
    )
  ) {
    error = 'Invalid phone';
  }
  errorAlert(error);
  return error;
}

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const addContact = newContact => {
    if (
      contacts.filter(contact => contact.name === newContact.name).length !== 0
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(setContacts(newContact));
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={(values, actions) => {
          addContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" />
          <label htmlFor="phone">Phone</label>
          <Field
            validate={validatePhone}
            id="phone"
            name="phone"
            placeholder="Phone"
          />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
