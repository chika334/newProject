import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProductForm from './components/ProductForm';

const Product = () => {
  const submit = () => {};
  const validationSchema = Yup.object({});
  const values = {};
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={values}
        onSubmit={submit}>
        {(props) => <ProductForm {...props} />}
      </Formik>
    </>
  );
};
export default Product;
