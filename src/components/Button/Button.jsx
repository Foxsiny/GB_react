import React from 'react'

export class Button extends React.Component {
    render() {
        console.log(this.props)
        return (
            <>
                <h3 style={{ fontSize: "28px" }}>My name is {this.props.name}</h3>
                <button>Button</button>

            </>
        )
    }
}
