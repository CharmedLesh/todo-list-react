import { ErrorModule } from '../../modules/error';

export const ErrorPage = () => {
    const $notFoundErrorBanner = ErrorModule({
        errorDescription: 'Sorry, an unexpected error has occurred.',
        errorInfo: 'Not Found'
    });

    return $notFoundErrorBanner;
};
