import { FC } from 'react';
import styles from './progress-bar.module.scss';

interface IProgressBar {
    innerText: string;
    progressPercentage: number;
}

export const ProgressBar: FC<IProgressBar> = (props) => {
    const { innerText, progressPercentage } = props;

    return (
        <div className={styles.progressBarWrapper}>
            <div className={styles.progressFiller} style={{ width: `${progressPercentage}%` }}></div>
            <div className={styles.progressText}>{innerText}</div>
        </div>
    );
};
