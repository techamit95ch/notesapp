import Joi from "@hapi/joi";
export default emailValidation = (data) => {
  const schema = {
    email: Joi.email().required(),
    userAgent: Joi.string().required(),
    uid: Joi.string().required(),
    fromReact: Joi.boolean().required(),
  };
  return Joi.validate(data, scema);
};
// emailValidation;
