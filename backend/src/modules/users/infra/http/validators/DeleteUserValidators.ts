import { celebrate, Joi } from 'celebrate';

const DeleteUserValidators = celebrate({
  params: Joi.object().keys({
    id: Joi.string()
      .required()
      .error(new Error('Id parameter must be the type string.')),
  }),
});

export default DeleteUserValidators;
