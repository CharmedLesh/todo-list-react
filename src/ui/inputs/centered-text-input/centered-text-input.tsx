import { FC, InputHTMLAttributes } from 'react';
import styles from './centered-text-input.module.scss';

export const CenteredTextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const { type, value, spellCheck, placeholder, required, disabled, onChange } = props;

    return (
        <input
            type={type}
            value={value}
            spellCheck={spellCheck}
            placeholder={placeholder}
            className={styles.centeredTextInput}
            onChange={onChange}
            required={required}
            disabled={disabled}
        ></input>
    );
};
