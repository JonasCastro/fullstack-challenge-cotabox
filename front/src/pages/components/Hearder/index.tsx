import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';
import Input from '../Input';

import { Container, BoxInput } from './styles';

interface IFormData {
  fistName: string;
  lastName: string;
  participation: string;
}

const Hearder: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: IFormData): Promise<void> => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        fistName: Yup.string().required('Fist name is required'),
        lastName: Yup.string().required('Last name is required'),
        participation: Yup.string().required('Participation is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // POST API
      console.log(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <BoxInput>
          <Input name="fistName" type="text" placeholder="First name" />
          <Input name="lastName" type="text" placeholder="Last name" />
          <Input name="participation" type="text" placeholder="Participation" />
        </BoxInput>
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
};

export default Hearder;
