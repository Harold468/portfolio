import React from "react";


function First(){
    return(
        <div>
            <h2 className="container-fluid text-decoration-underline btn btn-danger font-weight-bolder">
               Examples
            </h2>
            <br/><br/><br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="img-responsive col-sm-12 col-md-6 col-lg-6">
                <img src="desktop.png" width="70%" height="50%"/>
                <br/>
                <caption className="btn btn-primary">Desktop development</caption>
                </div>
                <div className="img-responsive col-sm-12 col-md-6 col-lg-6">
                <img src="android.jpg" width="70%" height="50%"/>
                <br/>
                <caption className="btn btn-primary">android development</caption>
                </div>
                <div className="img-responsive col-sm-12 col-md-6 col-lg-6">
                <img src="webdev.jpg" width="70%" height="70%"/>
                <br/>
                <caption className="btn btn-primary">Web development</caption>
                </div>
                <div className="img-responsive col-sm-12 col-md-6 col-lg-6">
                <img src="structural.jpg" width="70%" height="70%"/>
                <br/>
                <caption className="btn btn-primary">structural engineering</caption>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default First;