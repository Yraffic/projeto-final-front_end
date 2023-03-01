import Joi from "joi"

export const ClientSchema = Joi.object({
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
    .required()
    .regex(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
    .messages({
      "string.empty": "Este campo deve ser preenchido",
      "any.required": "Este campo deve ser preenchido",
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
  address: Joi.string().allow("").optional(),
  complement: Joi.string().allow("").optional(),
  neighborhood: Joi.string().allow("").optional(),
  cep: Joi.string()
    .allow("")
    .optional()
    .regex(/^[0-9]{8}$/)
    .messages({
      "string.pattern.base": "CEP inválido",
    }),
  city: Joi.string().allow("").optional(),
  state: Joi.string().allow("").optional(),
})
