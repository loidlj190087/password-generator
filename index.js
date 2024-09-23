const generatePassword = (options = {}) => {
    const { length = 8, useSpecialChars = false } = options;

    // Standardzeichensatz: Klein-, Großbuchstaben und Zahlen
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Falls Sonderzeichen gewünscht sind, fügen wir sie dem Zeichensatz hinzu
    if (useSpecialChars) {
        charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};

module.exports = generatePassword;
