import * as React from "react";
import {Form, FormProps} from "semantic-ui-react";

interface IProps extends FormProps {
    errors?: any;
    touched?: any;
}

export const FormInput: React.FC<IProps> = ({
                                                required = false,
                                                onBlur,
                                                onChange,
                                                value,
                                                name,
                                                fluid,
                                                type,
                                                label,
                                                placeholder,
                                                width = 8,
                                                errors,
                                                touched

                                            }) => {
    return (
        <Form.Input
            required={required}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            name={name}
            fluid={fluid}
            type={type}
            label={label}
            placeholder={placeholder}
            width={width}
            error={errors[name] && touched[name] && {content: errors[name]}}
        />
    );
};
