import * as yup from 'yup'

const validations =yup.object().shape({
    
    name: yup.string().required(),
    surname: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email('Geçerli bir mail adresi giriniz').required('Zorunlu alan'),
    phonNumber: yup.string().required(),
    password: yup.string().min(6, 'Parolanız en az 6 karakter içermelidir').required(),
    authority: yup.string().required(),
    address: yup.string().required(),

});
export default validations;