export const validatorConfig = {
    firstName: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    lastName: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    email: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isEmailValid: {
            message: "Введите корректный адрес электронной почты"
        }
    },
    phone: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isPhone: {
            message: "Введите корректный телефонный номер"
        }
    },
    invoicingAddress: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    deliveryAddress: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    }
};
