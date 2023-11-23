import { FC, useEffect, useState } from 'react';
import { ITask } from '../../../../interfaces/todo-list-module-interfaces';
import { ProgressBar } from '../../../../ui/progress-bar/progress-bar';
import styles from './todo-list-progress-bar.module.scss';

interface ITodoListProgressBarProps {
    tasksList: ITask[];
}

export const TodoListProgressBar: FC<ITodoListProgressBarProps> = (props) => {
    const { tasksList } = props;

    const [completedTasksNumber, setCompletedTasksNumber] = useState<number>();
    const [totalTasksNumber, setTotalTasksNumber] = useState<number>();
    const [progressPercentage, setProgressPercentage] = useState<number>(0);

    useEffect(() => {
        const newCompletedTasksNumber = tasksList.reduce((count, task) => count + (task.isChecked ? 1 : 0), 0);
        const newTotalTaskNumber = tasksList.length;
        const newProgressPercentage = (newCompletedTasksNumber / newTotalTaskNumber) * 100;
        setCompletedTasksNumber(newCompletedTasksNumber);
        setTotalTasksNumber(newTotalTaskNumber);
        setProgressPercentage(newProgressPercentage ? newProgressPercentage : 0);
    }, [tasksList]);

    return (
        <div className={styles.progressBarContainer}>
            <ProgressBar
                innerText={`${completedTasksNumber} of ${totalTasksNumber} tasks done`}
                progressPercentage={progressPercentage}
            />
        </div>
    );
};
