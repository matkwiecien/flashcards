import { Box, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as yup from 'yup';
import { CardSet } from './interfaces';
import FormLayout from '../common/FormLayout';
import CardTitle from '../common/CardTitle';

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
          <FormLayout>
            <CardTitle>Create flashcard group</CardTitle>
            <Field component={TextField} label="Name" name="name" disabled={isSubmitting} fullWidth />
            <Box>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </FormLayout>
        </Form>
      )}
    </Formik>
  );
};

export default CardSetForm;
