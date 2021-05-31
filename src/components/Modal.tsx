import * as React from "react";
import {Button, ButtonGroup, ButtonProps, Modal as ModalView, ModalProps} from "semantic-ui-react";

interface IProps {
    header: string,
    onSendTxt?: string,
    open: boolean,
    onClose?: (event: React.MouseEvent<HTMLElement>, data: ModalProps) => void,
    onSend: (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => void,
    onCancel: (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => void
}

export const Modal: React.FC<IProps> = ({
                                            header,
                                            children,
                                            onSendTxt,
                                            open,
                                            onClose,
                                            onSend,
                                            onCancel
                                        }) => {
    return (
        <ModalView
            className="dashboard__modal"
            closeOnDimmerClick={false}
            closeOnEscape
            open={open}
            onClose={onClose}
        >
            <ModalView.Header>{header}</ModalView.Header>
            <ModalView.Content>
                <ModalView.Description>
                    {children}
                </ModalView.Description>
            </ModalView.Content>
            <ModalView.Actions className="align-end">
                <ButtonGroup>
                    <Button
                        className="button"
                        inverted
                        color="red"
                        onClick={onCancel}
                    >
                        Отменить
                    </Button>
                    <Button
                        className="button"
                        type="submit"
                        color="blue"
                        inverted
                        onClick={onSend}
                    >
                        {onSendTxt ? onSendTxt : 'Отправить'}
                    </Button>
                </ButtonGroup>
            </ModalView.Actions>
        </ModalView>

    );
};
