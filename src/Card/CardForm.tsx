import { Box, Button, CardContent, Grid, Card } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as yup from 'yup';
import { TCard } from './interfaces';
import { columnLayout } from '../style/composition';
import CardTitle from '../common/CardTitle';
import FormLayout from '../common/FormLayout';

const CardSchema = yup.object().shape({
  question: yup.string().required('Please enter question'),
  response: yup.string().required('Please enter response'),
});

type CardFormProp = {
  onSubmit: (card: TCard) => void;
};

const CardForm = ({ onSubmit }: CardFormProp) => {
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
          <FormLayout>
            <Box>
              <CardTitle>Crate new flashcard</CardTitle>
            </Box>
            <Box>
              <Field component={TextField} label="Question" name="question" disabled={isSubmitting} fullWidth />
            </Box>
            <Box>
              <Field component={TextField} label="Response" name="response" disabled={isSubmitting} fullWidth />
            </Box>

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

export default CardForm;
