import { ButtonHTMLAttributes, FC } from 'react';
import { Logger } from '../../../services/logger/logger';
import styles from './button-with-absolute-right-icon.module.scss';

interface IButtonWithAbsoluteRightIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    innerText: string;
    icon: JSX.Element | string;
}

export const ButtonWithAbsoluteRightIcon: FC<IButtonWithAbsoluteRightIconProps> = (props) => {
    const { innerText, icon, disabled, onClick } = props;

    const isIconValid = (): boolean => {
        if (typeof icon === 'string' && icon.length !== 1) {
            return false;
        }
        return true;
    };

    !isIconValid() && Logger.logError('Wrong icon prowided. Icon should be SVG or string with 1 char.');

    return (
        <button className={styles.buttonWithAbsoluteRightIcon} onClick={onClick} disabled={disabled}>
            {innerText}
            <div className={styles.iconContainer}>{isIconValid() ? icon : '?'}</div>
        </button>
    );
};
