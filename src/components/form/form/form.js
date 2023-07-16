import './form.scss';

const Form = ({children, className}) => <div className={`form-container ${className}`}>{children}</div>
Form.Item = ({children}) => <div className="form-item-container">{children}</div>

export default Form;