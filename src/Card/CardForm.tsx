import { Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as yup from 'yup';
import { Card } from './interfaces';

const CardSchema = yup.object().shape({
  question: yup.string().required('Please enter question'),
  response: yup.string().required('Please enter response'),
});

type CardFormProp = {
  onSubmit: (card: Card) => void;
};

const Card = ({ onSubmit }: CardFormProp) => {
  return (
    <Formik
      initialValues={{
        question: '',
        response: '',
      }}
      validationSchema={CardSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        onSubmit({
          ...values,
          createdAt: new Date(Date.now()).toISOString(),
          id: uuidv4(),
        });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field component={TextField} label="Question" name="question" disabled={isSubmitting} />
          <Field component={TextField} label="Response" name="response" disabled={isSubmitting} />
          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Card;
