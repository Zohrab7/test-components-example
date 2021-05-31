import * as React from "react";
import {Button, Form} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";

import {FormInput, successNotify} from "../../../components";
import {phoneRegex} from "../../../const";


interface IProps {

}


export const ContactForm: React.FC<IProps> = () => {

    const {
        values, errors, touched, isValid, dirty, handleChange, handleBlur, handleSubmit, resetForm
    } = useFormik({
        validationSchema: ContactSchema,
        initialValues: {
            name: "",
            lastName: "",
            phone: ""
        },
        onSubmit: () => {
            successNotify("Успех", "Успешно отправлено");
            resetForm();
        }
    });

    const {
        name,
        lastName,
        phone
    } = values

    return (
        <Form onSubmit={handleSubmit}>
            <FormInput
                required
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                value={name}
                fluid
                placeholder='Name'
                errors={errors}
                touched={touched}
            />
            <FormInput
                required
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                value={lastName}
                fluid
                placeholder='Last Name'
                errors={errors}
                touched={touched}
            />
            <FormInput
                required
                onBlur={handleBlur}
                onChange={handleChange}
                name="phone"
                value={phone}
                fluid
                placeholder='Phone'
                errors={errors}
                touched={touched}
            />
            <Button disabled={!(isValid && dirty)}>
                Отправить
            </Button>
        </Form>
    )
};

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Минимум 2 букв')
        .max(50, 'Максимум 50 букв')
        .required('Обязательное поле'),
    lastName: Yup.string()
        .min(2, 'Минимум 2 букв')
        .max(50, 'Максимум 50 букв')
        .required('Обязательное поле'),
    phone: Yup.string()
        .matches(phoneRegex, 'Телефон не соответствует формату +79991111111')
        .required('Обязательное поле'),
});
