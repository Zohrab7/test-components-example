import * as React from "react";
import {useSelector} from "react-redux";
import {StoreState} from "../../../types";
import {useAppDispatch} from "../../../redux/store";
import {loginUser, toggleAuthModal} from "../../../redux/actions";
import {Modal, successNotify} from "../../../components";
import {Form} from "semantic-ui-react";
import {useFormik} from "formik";

interface IProps {

}

const UserAuthModal: React.FC<IProps> = () => {

    const {open} = useSelector(({auth}: StoreState) => auth.modal);
    const dispatch = useAppDispatch();


    const dispatchActions: IUserAuthActionTypes = ({
        toggleAuthModal: () => dispatch(toggleAuthModal()),
        loginUser: (login) => dispatch(loginUser(login)),
    });

    const handleModal = (resetForm: any) => {
        dispatchActions.toggleAuthModal();
        resetForm();
    };

    const {
        values, handleChange, handleSubmit, resetForm, submitForm
    } = useFormik({
        initialValues: {
            login: '',
            pass: ''
        },
        onSubmit: ({login}) => {
            dispatchActions.loginUser(login);
            dispatchActions.toggleAuthModal();
            successNotify("Вход Успешно", `${login} Добро пожаловать`);
            resetForm();
        }
    });

    const {
        login,
        pass
    } = values

    return (
        <Modal
            open={open}
            onSendTxt="Войти"
            onClose={() => handleModal(resetForm)}
            header="Вход на систему"
            onCancel={() => handleModal(resetForm)}
            onSend={submitForm}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    onChange={handleChange}
                    name="login"
                    value={login}
                    fluid
                    label='login'
                    placeholder='login'
                    width={6}
                />
                <Form.Input
                    onChange={handleChange}
                    name="pass"
                    value={pass}
                    fluid
                    label='pass'
                    placeholder='pass'
                    width={6}
                />
            </Form>
        </Modal>
    );
};

export default UserAuthModal;

interface IUserAuthActionTypes {
    toggleAuthModal(): void,

    loginUser(login: string): void,
}
