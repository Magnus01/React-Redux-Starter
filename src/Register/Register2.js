import React, { Component } from 'react';
import {updatedescription, updatetitle, fregister2, next, fnext, register2, dashboard } from '../actions/user';

import {connect} from 'react-redux';



class Register extends Component {
    constructor() {
        super();
        this.nextcss = this.nextcss.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let title = this.props.user.title;
        let description = this.props.user.description;

        // IF YOU WANT TO SEND TO DATABASE
        // this.props.postUni(title, description);


    }

    handleChange(event) {
        event.preventDefault();
        let title = event.target.value;
        this.props.updatedescription(title);
    }

    innerfunction () {
        this.props.fregister();
        this.props.register2();
        // this.props.fmoveup();
    }

    innerfunction () {
        this.props.fregister2();
        this.props.dashboard();
        // this.props.fmoveup();
    }

    nextcss () {
        this.props.next();
        setTimeout(() => this.innerfunction(), 700);
    }

    render() {
        console.log(this.props.user.description, 'not undefined');
        console.log(this.props.user.description.indexOf('undefined'), 'indexof undefined');
        return (

            <div className="startcontainerregister1">
                <div className="field1">
                    <div className={`field2 ${this.props.user.next}`}>
                        <h1 className="heading-5">Name of your Department?</h1>

                        <form onSubmit={this.handleSubmit} className= "w-form">
                            <input
                                type="search"
                                className="invisible-field w-input"
                                af="adf"
                                maxlength="256"
                                value = {this.props.user &&  this.props.user.description.indexOf('undefined') === -1 ? this.props.user.description : ''}
                                onChange = {this.handleChange}
                                name="query"
                                placeholder="Department…"
                                id="search"
                                required="">

                            </input>

                            <button  onClick = {this.nextcss} gradient="bg1" text="Submit" ></button>
                            {/*<CircleButton  onClick = {this.nextcss} gradient="bg1" text="Submit" icon={<FaEdit/>}></CircleButton>*/}

                        </form>

                    </div>

                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {updatedescription, updatetitle, next, fnext, dashboard, fregister2, register2})(Register);
