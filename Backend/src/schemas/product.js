import Joi from "joi";

const productSchema = Joi.object(
    {
        name: Joi.string().required().messages({
            "string.empty": "Tên không được để trống",
            "any.required": 'Trường "Tên" là bắt buộc',
        }),
        price : Joi.number().required().messages({
            "number.empty": "Price không được để trống",
            "any.required": 'Trường "Price" là bắt buộc',
        }),
        categoryId: Joi.string().required().messages({
            "string.empty": "danh mục không được để trống",
            "any.required": 'Trường "danh mục" là bắt buộc',
        })
    }   
)
export default productSchema;