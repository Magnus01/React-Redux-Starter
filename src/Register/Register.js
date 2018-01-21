import React, { Component } from 'react';
import {updatetitle, fregister, next, fnext, register2, dashboard } from '../actions/user';

import {connect} from 'react-redux';

class Register extends Component {
    constructor() {
        super();
        // this.state =
        //     {
        //         title: this.props ? this.props.user.title : '',
        //         description: this.props ? this.props.user.description : '',
        //
        //         // id: this.props.id ? this.props.id : null,
        //         // errors: {},
        //         // fetching: false
        //     };
        this.nextcss = this.nextcss.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // componentWillReceiveProps = (nextProps) => {
    //     console.log("NEXTPROPS");
    //     console.log(nextProps);
    //     if(!nextProps) {
    //         this.setState({
    //             // id: nextProps.id,
    //             title: nextProps.user.title,
    //             description: nextProps.user.description
    //         });
    //     }
    // };

    handleSubmit(event) {
        event.preventDefault();

        // let title = this.props.user.title;
        // this.props.postUni(title);
        
        // alert(this.props.user.title);
    }


    handleChange(event) {
        event.preventDefault();
        let title = event.target.value;
        this.props.updatetitle(title);
    }


    innerfunction () {
        this.props.fregister();
        this.props.register2();
        // this.props.fmoveup();
    }

    nextcss () {
        this.props.next();
        setTimeout(() => this.innerfunction(), 700);
    }

    render() {
        return (

            <div className="startcontainerregister1">
                <div className="field1">
                    <div className={`field1 ${this.props.user.next}`}>
                    <h1 className="heading-5">Which Institution are you working in?</h1>

                        <form onSubmit={this.handleSubmit} className= "w-form">
                        <input
                            type="search"
                            className="invisible-field w-input"
                            af="adf"
                            maxlength="256"
                            value = {this.props.user ? this.props.user.title : ''}
                            onChange = {this.handleChange}
                            name="query"
                            placeholder="Institution…"
                            id="search"
                            required="">

                        </input>


                        <button  onClick = {this.nextcss} gradient="bg1" text="Submit" ></button>
                        {/*<CircleButton  onClick = {this.nextcss} gradient="bg1" text="Submit" icon={<FaEdit/>}></CircleButton>*/}

                    </form>

                    </div>
                    <div className={`field2 ${this.props.user.next}`}>
                        <h1 className="heading-5">Name of your Department?</h1>

                        <form className= "w-form">
                            <input type="search" className="invisible-field w-input" af="adf" maxlength="256" name="query" placeholder="Department…" id="search" required=""></input>

                            {/*<CircleButton gradient="bg1" text="Submit" icon={<FaEdit/>}></CircleButton>*/}
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


export default connect(mapStateToProps, {updatetitle, next, fnext, dashboard, fregister, register2})(Register);
