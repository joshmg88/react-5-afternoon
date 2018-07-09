import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateOne, updateTwo, updateThree } from '../../ducks/reducer'

class WizardNine extends Component {

    render() {
        const { updateOne, updateTwo, updateThree } = this.props
        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => updateOne(e.target.value)} />
                    <input type="text" placeholder="Line Two" onChange={(e) => updateTwo(e.target.value)} />
                    <input type="text" placeholder="Line Three" onChange={(e) => updateThree(e.target.value)} />


                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { addressOne, addressTwo, addressThree } = state;

    return {
        addressOne,
        addressTwo,
        addressThree
    };
}
export default connect(mapStateToProps, { updateOne, updateTwo, updateThree })(WizardNine);