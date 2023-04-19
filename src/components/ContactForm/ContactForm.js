import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

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
   return error;
}
 
export const ContactForm = ({onSave}) => {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            phone: '',
          }}
          onSubmit={(values, actions) => {
            onSave({ ...values, id: nanoid() });
            actions.resetForm();
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" />
            <label htmlFor="phone">Phone</label>
            <Field validate={validatePhone} id="phone" name="phone" placeholder="Phone" />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    );
  }
