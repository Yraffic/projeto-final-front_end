import Joi from "joi"

export const UserSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "br"] } })
    .required()
    .messages({
      "string.empty": "Este campo deve ser preenchido",
      "any.required": "Este campo deve ser preenchido",
      "string.email": "E-mail inválido",
    }),
  cpf: Joi.string()
    .allow("")
    .optional()
    .regex(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
    .messages({
      "string.pattern.base": "CPF inválido",
    }),
  cellphone: Joi.string()
    .allow("")
    .optional()
    .regex(
      /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/
    )
    .messages({
      "string.pattern.base": "Celular inválido",
    }),
  password: Joi.string().allow("").optional().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
    "any.only": "As senhas não coincidem",
  }),
})
