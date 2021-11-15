import { useState, useRef } from 'react'
import { useHistory } from 'react-router'
import apicalls from '../fetch/service/apicalls'
// import axios from 'axios'



const FormDetails = (validate) => {
    // const formData = useRef(null)
    const history = useHistory();
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        cpassword: '',
        // file:''
    })
    const [errors, setErrors] = useState({})
    const [action, setAction] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
        // console.log(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = new FormData(formData.current)
        // console.log(formData.current);

        const { name, username, email, password, cpassword } = values
        console.log(values);
        // const data = new FormData(form.current)
        // console.log(data);
        apicalls.create('/create',
         { name, username, email, password, cpassword }
         )
            .then((res) => { console.log(res); })
            .catch((error) => { console.log(error); })
         history.push('/signup');
    }

    const handleClose = () => {
        setAction(false);
    }

    const handleOpen = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        // console.log(errors);
        if (!(Object.entries(errors).length)) {
            setAction(false);
            // console.log(Object.values(errors));
            setAction(true);
        }
    }

    return { handleChange, handleSubmit, handleOpen, handleClose, values, errors, action}
}
export default FormDetails
