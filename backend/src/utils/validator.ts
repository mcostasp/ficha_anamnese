import Joi from 'joi';

export const validateCustomer = (data: any) => {
    const schema = Joi.object({
        id : Joi.string().required(),
    });
    return schema.validate(data);
};