export const CHANGE_LOCALE = 'LOCALE/change_locale';

export const changeLocale = locale => {
    return {
        type: CHANGE_LOCALE,
        locale
    }
};

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}

export const displayErrorMessage = error => {
    return {
        type: SET_ERROR_MESSAGE,
        error
    }
};