import '../Input/Input.css'
type inputProps = {
    text: string
    label: string
    placeholder: any
    onChange: any
    style?: React.CSSProperties;
}

const Input = (props: inputProps) => {
    const { style = {}, onChange,placeholder, ...otherProps } = props;
    return (
        
            <div className="containerInput">
                <label className="input-label">{props.label}</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    style={{ ...style}}
                    {...otherProps}
                />
            </div>
        
    );
};

export default Input;