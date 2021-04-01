import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PaymentGatewayForm from './components/PaymentGatewayForm';

const PayForm = () => {
  const submit = () => {};
  const validationSchema = Yup.object({});
  const values = {};
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={values}
        onSubmit={submit}>
        {(props) => <PaymentGatewayForm {...props} />}
      </Formik>
    </>
  );
};
export default PayForm;
