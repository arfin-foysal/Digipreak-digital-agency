import React from 'react'

const ContactEmail = () => {
    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-6">

                    </div>

                    <div className="col-6 shadow py-3 my-5">
                        <div className="text-center py-3"><h3>Get IN TOUCH</h3></div>
                        <form class="row g-3">

                            <div >
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Name" aria-label="First name" />
                                </div>

                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control" id="inputEmail4" placeholder="Phone" />
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="sdxi" id="floatingTextarea2" style={{ height: "100px" }}></textarea>

                            </div>
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-primary ">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactEmail
