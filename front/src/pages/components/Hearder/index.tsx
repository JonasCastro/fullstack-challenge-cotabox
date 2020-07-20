import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';
import Input from '../Input';

import { useUser, IUserFormData } from '../../../hooks/users';

import { Container, BoxInput } from './styles';

const Hearder: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { createUser } = useUser();

  const handleSubmit = useCallback(
    async (data: IUserFormData, { reset }): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          firstName: Yup.string().required('Fist name is required'),
          lastName: Yup.string().required('Last name is required'),
          participation: Yup.number()
            .typeError('Must be a number')
            .positive('Must be greater than zero')
            .required('Participation is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        createUser(data);
        reset();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [createUser],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <BoxInput>
          <Input name="firstName" type="text" placeholder="First name" />
          <Input name="lastName" type="text" placeholder="Last name" />
          <Input
            name="participation"
            type="number"
            placeholder="Participation"
          />
        </BoxInput>
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
};

export default Hearder;
