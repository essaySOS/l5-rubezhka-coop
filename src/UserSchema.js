class UserValidator {
    shape(props) {
        this.options = { ...props }
        return this;

    }
    isValid(obj) {
        return Object.entries(obj)
            .reduce((acc, [key, value]) => {
                return acc && this.options[key].isValid(value);
            }, true)
    }
}
export default UserValidator;