import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_62gjb4n",           
            "template_4h191rb",          
            form.current,
            "fd5YXmByADl342zCh"          
        ).then(
            (result) => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message. Try again later.");
                console.error("EmailJS Error:", error.text);
            }
        );
    };

    return (
        <div className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>
            <p className="text-gray-700 mb-8">
                I'm open to freelance work, collaborations, or any frontend development opportunities. Feel free to reach out!
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
