import { FC } from 'react';
import { ButtonWithAbsoluteRightIcon } from '../../../../ui/buttons/button-with-absolute-right-icon/button-with-absolute-right-icon';
import { RemoveIcon } from '../../../../ui/icons';

interface IRemoveCheckedButtonProps {
    onRemoveCheckedHandler: () => void;
    areButtonsAndInputsDisabled: boolean;
}

export const RemoveCheckedButton: FC<IRemoveCheckedButtonProps> = (props) => {
    const { onRemoveCheckedHandler, areButtonsAndInputsDisabled } = props;

    return (
        <ButtonWithAbsoluteRightIcon
            innerText={'Remove checked'}
            icon={<RemoveIcon />}
            disabled={areButtonsAndInputsDisabled}
            onClick={onRemoveCheckedHandler}
        />
    );
};
