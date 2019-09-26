import React, { Component } from 'react'



class Contact extends Component {
    render() {
        return (
            <section className="contacts-3 bg-clouds">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3>Contact Us</h3>
                            <p>Vanes is just few finger taps away. Feel free to reach us any time during normal business hours from Monday to Saturday.</p>
                            <div className="links">
                                <a href="#"><span className="fui-phone"></span>+91 80963 80962</a><br />
                                <a href="#"><span className="fui-mail"></span>hr@vanes.in</a>
                            </div>
                            <h6>Corporate HQ</h6>
                            <p>Vanes is located near to heart of technology in Hyderabad.</p>
                            <p>Vanes Industries</p>
                            <p> Door No: 2-91/5&6/MPTP/3F/B-2<br />
                                Kondapur, Serilingampally,<br />
                                Hyderabad, Telangana-500084.
                </p>

                            <div className="map">
                                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                    src="https://maps.google.com/?ie=UTF8&amp;t=m&amp;ll=40.714353,-74.005973&amp;spn=0.04554,0.072956&amp;z=12&amp;output=embed"></iframe>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">
                            <h3>Email us</h3>
                            <p>Want to reach us by email, Send us a quick message by filling form below.</p>
                            <form>
                                <label className="h6">Name / Last Name</label>
                                <input type="text" className="form-control" />
                                <label className="h6">E-mail</label>
                                <input type="text" className="form-control" />
                                <label className="h6">Message</label>
                                <textarea rows="7" className="form-control"></textarea>
                                <button type="submit" className="btn btn-primary"><span className="fui-mail"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;