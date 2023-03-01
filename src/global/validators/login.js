import Joi from "joi"

export const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "br"] } })
    .required()
    .messages({
      "string.empty": "Este campo deve ser preenchido",
      "any.required": "Este campo deve ser preenchido",
      "string.email": "E-mail inválido",
    }),
  password: Joi.string().required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
})
