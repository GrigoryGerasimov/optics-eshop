export const validatorConfig = {
    username: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
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
    password: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isPasswordValid: {
            message: `
Пароль должен содержать минимум 10 символов, из них по меньшей мере: 
1 цифру,
1 строчную и 1 прописную букву латинского алфавита,
1 специальный символ, как например: !@$%^&
`
        }
    },
    confirmPassword: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        isPasswordConfirmed: {
            message: "Пароль не совпадает с введённым выше"
        }
    },
    role: {
        isRequired: {
            message: "Поле обязательно для заполнения"
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
    license: {
        isRequired: {
            message: "Необходимо подтвердить ознакомление и согласие с Лицензионным соглашением"
        }
    }
};
