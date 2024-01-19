function generatePassword(length = 12, options = {}) {
    const defaultOptions = {
        useLetters: true,
        useNumbers: true,
        useSpecialChars: true,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    let characters = '';

    if (mergedOptions.useLetters) {
        characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (mergedOptions.useNumbers) {
        characters += '0123456789';
    }

    if (mergedOptions.useSpecialChars) {
        characters += '!@#$%^&*()-_=+[]{}|;:,.<>?/~';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}

module.exports = generatePassword;