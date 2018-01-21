import React, { Component } from 'react';

import {fmoveup, fdashboard} from '../actions/user';

import {fclassdashboard,classdashboard, fbookdashboard,bookdashboard} from '../actions/user';

import {fbookcss, fclassroomcss, classroomcss,bookcss} from '../actions/user';

import '../css/normalize.css';
import '../css/webflow.css';
import '../css/magnuss-amazing-project.webflow.css';
import {connect} from 'react-redux';


let myVarclass;
let myVarbook;

class Dashboard extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.hoverclassroom = this.hoverclassroom.bind(this);
        this.hoverbook = this.hoverbook.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.innerclasscss = this.innerclasscss.bind(this);
        this.innerbookcss = this.innerbookcss.bind(this);

        this.startclassimage = this.startclassimage.bind(this);
        this.endclassimage = this.endclassimage.bind(this);

        this.startbookimage = this.startbookimage.bind(this);
        this.endbookimage = this.endbookimage.bind(this);


    }

    innerfunction () {


        this.props.fdashboard();
        alert("create your link in the innerfunction");
    }

    multiple () {
        this.props.fmoveup();
        setTimeout(() => this.innerfunction(), 200);
    }



    innerclasscss () {

        this.props.classroomcss();

    }

    innerbookcss () {

        this.props.bookcss();

    }



    //Hover functions
    startclassimage() {
        myVarclass = setTimeout(() => this.innerclasscss(), 500)
    }

    endclassimage() {
        clearTimeout(myVarclass);
    }

    startbookimage() {
        myVarbook = setTimeout(() => this.innerbookcss(), 500)
    }

    endbookimage() {
        clearTimeout(myVarbook);
    }

    hoverclassroom () {
        this.props.fbookcss();
        this.props.classroomcss();

    }


    hoverbook () {
        this.props.fclassroomcss();
        this.props.bookcss();

    }

    render() {
        return (

            <div >


                <div className="startcontainer">


                    <div className="startcontainerregister1">


                        <div className={`outerstart-container ${this.props.user.moveup}`}>

                            <div className="inner-start-container1">

                                <div className={`inner-start-container1 level-2 ${this.props.user.bookcss}`}>
                                {/*<div className={`inner-start-container1 level-2`}>*/}


                                </div>
                                <div className="inner-start-container1 level3"></div>
                            </div>



                                <div className="pin-container" onClick = {this.multiple} onMouseOver = {this.hoverclassroom}>
                                <div className="opacitydimmer">
                                    <div className="text-block-11">Make Classroom</div>
                                    <div className="left-pin middle pxl combo"></div>
                                    <div className="left-pin riight-rotated-pin"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin-opposite"></div>
                                    <div className="left-pin riight-rotated-pin left-rotated" ></div>
                                </div>
                                <div className="class3dicon selncv leftside"  ></div>
                            </div>
                            <div className="pin-container-right"   onMouseOver = {this.hoverbook} >
                                <div className="opacitydimmer">
                                    <div className="text-block-11 makebookbar">Make Book</div>
                                    <div className="left-pin middle pxl combo"></div>
                                    <div className="left-pin riight-rotated-pin"></div>
                                    <div className="left-pin riight-rotated-pin left-rotated"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin-opposite"></div>
                                </div>
                                <div className="class3dicon selncv"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE SHOW')
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {fbookcss, fclassroomcss,classroomcss,bookcss,fclassdashboard,classdashboard, fbookdashboard,bookdashboard, fmoveup, fdashboard})(Dashboard);
