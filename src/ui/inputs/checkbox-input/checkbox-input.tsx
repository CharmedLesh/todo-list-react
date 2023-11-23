import { FC, InputHTMLAttributes } from 'react';
import styles from './checkbox-input.module.scss';

export const CheckboxInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const { onChange, checked, disabled } = props;

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={styles.checkboxInput}
            disabled={disabled}
        ></input>
    );
};
