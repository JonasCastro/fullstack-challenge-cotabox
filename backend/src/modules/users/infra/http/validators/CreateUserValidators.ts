import { celebrate, Joi } from 'celebrate';

const CreateUserValidators = celebrate({
  body: Joi.object().keys({
    firstName: Joi.string()
      .required()
      .error(new Error('First Name is a required field.')),
    lastName: Joi.string()
      .required()
      .error(new Error('Last Name is a required field.')),
    participation: Joi.number()
      .required()
      .error(new Error('Participation is a required field.')),
  }),
});

export default CreateUserValidators;
