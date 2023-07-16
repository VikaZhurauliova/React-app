import './input.scss';

const Input = (props) => {
    const {
        initialValue,
        placeholder,
        onChange = () => {
        },
        disabled,
        error,
        errorMsg,
        label,
        type = 'text',
        refLink = null,
    } = props
    return (
        <div className="ra-input-container">
            <label className="ra-input-label">
                <span>{label}</span>
                <input
                    className={`ra-input ${error ? 'ra-input-error' : ''}`}
                    value={initialValue}
                    onChange={({target: {value}}) => onChange(value)}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={refLink}
                />
            </label>
            <p className="ra-input-error-list">
                {errorMsg}
            </p>
        </div>
    )
}
export default Input