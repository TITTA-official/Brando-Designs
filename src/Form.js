import React, { Fragment } from 'react'

function Form() {
    return (
        <Fragment>
            <div className="form">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="email" />
                </div>
                <div className="form-group form-group-buttons">
                    <button>Login</button>
                    <span>Don't have an account yet?</span>
                </div>

            </div>
        </Fragment>
    )
}

export default Form
