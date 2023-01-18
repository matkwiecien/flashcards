import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as yup from 'yup';
import { CardSet } from './interfaces';

const CardSetSchema = yup.object().shape({
  name: yup.string().required('Please enter name'),
});

type CardSetFormProp = {
  onSubmit: (cardSet: CardSet) => void;
};

const CardSetForm = ({ onSubmit }: CardSetFormProp) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={CardSetSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const currentDateTime = new Date(Date.now());
        onSubmit({
          name: values.name,
          createdAt: currentDateTime.toISOString(),
          id: uuidv4(),
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component={TextField} label="Name" name="name" disabled={isSubmitting} />
          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CardSetForm;
