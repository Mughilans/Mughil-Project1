import React from 'react'
import './FormInput.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onchange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value.length ? 'Shrink' : ''} form-input-label`}>
                    {label}
                </label>)

                : null
        }
    </div>
)
export default FormInput