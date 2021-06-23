import Joi from "joi";
 const emailValidation = (data) => {
  const schema = {
    email: Joi.string().email().required(),
    userAgent: Joi.string().required(),
    uid: Joi.string().required(),
    fromReact: Joi.boolean().required(),
  };
  return Joi.validate(data, schema);
  console.log(data);
};
export default emailValidation;
