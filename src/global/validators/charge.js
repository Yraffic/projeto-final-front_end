import Joi from "joi"

export const ChargeSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
  dueDate: Joi.string().required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
  }),
  value: Joi.number().min(1).required().messages({
    "number.base": "Valor inválido",
    "any.required": "Este campo deve ser preenchido",
    "number.min": "Valor inválido",
  }),
  status: Joi.string().valid("pago", "pendente").required().messages({
    "string.empty": "Este campo deve ser preenchido",
    "any.required": "Este campo deve ser preenchido",
    "any.only": "Status inválido",
  }),
})
