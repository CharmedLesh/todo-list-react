import { FC } from 'react';
import { IBasicButton } from '../../../interfaces/buttons-interfaces';
import { Logger } from '../../../services/logger/logger';
import styles from './single-icon-button.module.scss';

interface ISingleIconButtonProps extends IBasicButton {
    icon: JSX.Element | string;
}

export const SingleIconButton: FC<ISingleIconButtonProps> = (props) => {
    const { icon } = props;

    const isIconValid = (): boolean => {
        if (typeof icon === 'string' && icon.length !== 1) {
            return false;
        }
        return true;
    };

    !isIconValid() && Logger.logError('Wrong icon prowided. Icon should be SVG or string with 1 char.');

    return <button className={styles.singleIconAccentButton}>{isIconValid() ? icon : '?'}</button>;
};
