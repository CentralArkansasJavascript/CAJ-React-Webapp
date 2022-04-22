import React from "react";

export const Jumbotron = (): JSX.Element => {
    return <div className="position-relative overflow-hidden text-center bg-light rounded">
        <div className="col-12 col-md-12 p-lg-3 mx-auto">
        <h1 className='logo-text display-2' title="Learn Something New at Central Arkansas JavaScript">Central Arkansas JavaScript</h1>
        <hr/>
        We are a small group of enthusiasts, professionals, and avid fans of all things JavaScript.

        </div>
    </div>
}
export default Jumbotron;