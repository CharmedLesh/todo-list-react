import { ChangeEvent, FC, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styles from './no-styles-input.module.scss';

export const NoStylesInput = forwardRef(function NoStylesInput(
    props: InputHTMLAttributes<HTMLInputElement>,
    ref?: Ref<HTMLInputElement> | undefined
) {
    const { type, value, spellCheck, placeholder, disabled, onChange, onBlur, onKeyUp } = props;

    return (
        <input
            type={type}
            value={value}
            spellCheck={spellCheck}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.noStylesInput}
            ref={ref}
            onKeyUp={onKeyUp}
        ></input>
    );
});
