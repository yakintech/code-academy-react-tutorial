import * as Yup from 'yup';

export const addCategorySchema = Yup.object().shape({
    name: Yup.string()
    .required("gardaş name nerede")
    .min(5,'gardaş üşenme de biraz data gir. zahmet olmazsa.'),
    
    description: Yup.string().required()
})

