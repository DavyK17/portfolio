import Icons from "../assets/img/icons/Icons";

function Contact() {
    return (  
        <div id="contact">
            <div className="mobile-filler"></div>
            <h2 className="uppercase">Contact</h2>
            <p>Get in touch today to get started on your website.</p>
            <div className="contact-icons">
                <a href="mailto:davykamanzi@live.com" target="_blank" rel="noreferrer"><img src={Icons.email} alt="Email" title="Email" /></a>
                <a href="https://www.upwork.com/freelancers/~01f8763fa758afea25" target="_blank" rel="noreferrer"><img src={Icons.upwork} alt="Upwork" title="Upwork" /></a>
                {/* <a href="https://www.kuhustle.com/@davyk17" target="_blank" rel="noreferrer"><img src={Icons.kuhustle} alt="Kuhustle" title="Kuhustle" /></a> */}
                <a href="https://linkedin.com/in/davykamanzi" target="_blank" rel="noreferrer"><img src={Icons.linkedin} alt="LinkedIn" title="LinkedIn" /></a>
                <a href="https://github.com/DavyK17" target="_blank" rel="noreferrer"><img src={Icons.github} alt="GitHub" title="GitHub" /></a>
            </div>
        </div>
    )
}

export default Contact;