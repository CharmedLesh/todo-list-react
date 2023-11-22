import { ChangeEvent, FC } from 'react';
import { IBasicInput } from '../../../interfaces/inputs-interfaces';
import styles from './centered-text-input.module.scss';

interface ICenteredTextInputProps extends IBasicInput {
    type: 'text' | 'password' | 'email';
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CenteredTextInput: FC<ICenteredTextInputProps> = (props) => {
    const { type, value, spellCheck, placeholder, onChangeHandler } = props;

    return (
        <input
            type={type}
            value={value}
            spellCheck={spellCheck}
            placeholder={placeholder}
            className={styles.centeredTextInput}
            onChange={onChangeHandler}
        ></input>
    );
};
