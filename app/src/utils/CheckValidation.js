const CheckValidation = (name, email, password, isSignIn) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (isSignIn && !name) {
        return "Please enter your name";
    }
    
    if (name && !namePattern.test(name)) {
        return "Please enter a valid name";
    }
    
    if (!emailPattern.test(email)) {
        return "Please enter a valid email";
    }
    
    if (!passwordPattern.test(password)) {
        return "Please enter a valid password";
    }
    
    return null;
};

export default CheckValidation