import React from "react";
type inputProps = {
    text: string
    label: string
    placeholder: any
    onChange: any

}

const Input = (props: inputProps) => {
    return (
        <div>
            <div className="containerInput">
                <label className="input-label">{props.label}</label>
                <input
                    className="input-field"
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};

export default Input;