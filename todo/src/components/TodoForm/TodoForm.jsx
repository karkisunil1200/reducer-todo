import React from 'react';
import {withFormik, Form, Field} from 'formik';

function TodoForm() {
  return (
    <div>
      <Form>
        <label>Add a task</label>
        <Field name='task' autoComplete='off' />
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValue: () => {
    return {
      task: ''
    };
  }
})(TodoForm);
