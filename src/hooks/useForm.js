import Joi from "joi";
import { useCallback, useState } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
    // contains info about the form
    const [data, setData] = useState(initialForm);
    // contains info about the error
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback((name, value) => {
        // create a joi object, that has the dynamic name, with the relevant validation requirements (schema)
        let joiSchema = Joi.object({ [name]: schema[name] });
        // check the joi object - validation and define it as an object (error), dynamically checks said property to the value in textfield
        let { error } = joiSchema.validate({ [name]: value });
        // if has an error, error details will be returned, if not- null
        return error ? error.details[0].message : null;
    },[schema]);

    const handleChange = useCallback((e) => {
    let value = e.target.value;
    let name = e.target.name;

    // validate properties of textfields dynamically (validateProperty function further below) and define as errorMessage
    const errorMessage = validateProperty(name, value);

    // if there's an error message, add it to the errors state
    if (errorMessage) {
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
        // else, delete said error message from the state
        setErrors((prev) => {
            let obj = { ...prev };
            delete obj[name];
            return obj;
        });
    }
        // set the data state to object with said property and its textfield value
        setData((prev) => ({ ...prev, [name]: value }));
    },[validateProperty]);

    const handleChangeCheckbox = useCallback((e)=> {
        let value = e.target.checked;
        let name = e.target.name;

        // set the data state to object with said property and its textfield value
        setData((prev) => ({ ...prev, [name]: value }));
    },[]);

    const validateForm = useCallback(() => {
        // gets the entire validation schema
        const joiSchema = Joi.object(schema);
        // check the entire schema according to the entire data state
        const { error } = joiSchema.validate(data);
        // if theres an error, return false (which gets reversed and disables button)
        if (error) return false;
        // else, submit button is active (gets reversed)
        return true;
    },[schema, data]);

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    },[initialForm]);

    const onSubmit = useCallback(() => {
        handleSubmit(data);
    },[data]);

    return {
        data,
        errors,
        setData,
        handleChange,
        handleChangeCheckbox,
        handleReset,
        validateForm,
        onSubmit,
    }
}