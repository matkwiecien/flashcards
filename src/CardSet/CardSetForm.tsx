import { Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as yup from 'yup';

const CardSetSchema = yup.object().shape({
  name: yup.string().required('Please enter name'),
});

type CardSet = {
  name: string;
  createdAt: Date;
};

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
          createdAt: currentDateTime,
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
