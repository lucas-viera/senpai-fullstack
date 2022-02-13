export function Contact() {
    return (
        <>            
            <section className="contact" id="contact">
                <h2>Get In Touch With Me</h2>
                <div className="contact-form-container">
                    <div className="contact-form">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="sender-name"
                        placeholder="Enter Your Name"
                        className="input-field"
                        required
                    />
                    </div>
                    <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="sender-email"
                        placeholder="Enter Your Email"
                        className="input-field"
                        required
                    />
                    </div>
                    <div className="form-control">
                    <label>Message</label>
                    <textarea
                        id="message"
                        cols="60"
                        rows="10"
                        placeholder="Enter Your Message"
                        name="message"
                        className="input-field"
                        required
                    ></textarea>
                    </div>      
                    <button id = "send-btn" className = "send-btn">SEND</button>
                </div>
            </section>
        </>
    );
}