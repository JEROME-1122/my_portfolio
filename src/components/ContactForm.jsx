import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    msg: null,
    error: false,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.message) {
      setStatus({
        loading: false,
        msg: "Please fill required fields.",
        error: true,
      });
      return;
    }

    setStatus({ loading: true, msg: null, error: false });

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
      // மாற்றுங்க: 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY'
      const res = await emailjs.send(
        "service_h7es44m",
        "template_9s79xps",
        templateParams,
        "DKWfM2yWKkFHbMEbK"
      );
      setStatus({ loading: false, msg: "Message sent. Thanks!", error: false });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        msg: "Send failed. Try again later.",
        error: true,
      });
    }
  };

  return (
    <section className="w-full  px-4 md:px-8  py-[50px] lg:px-0 px-[5%]" id="contact">
      <div className="container mx-auto  ">
        <div className="md:flex">
          {/* LEFT - Social + summary */}
          <div className="md:w-1/3 p-8 text-gray-200 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-3">Get in touch</h2>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Hi — I'm available for freelance web dev projects. Short on
                time? Drop a quick message and I’ll reply within a day.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/jerome-franklin-x-5049a21ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-600 bg-white/5 hover:bg-white/10 transition"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0e76a8]" />
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/JEROME-1122/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-600 bg-white/5 hover:bg-white/10 transition"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>

            {/* small contact meta */}
            <div className="mt-6 text-xs opacity-80">
              <p>
                <strong>Email:</strong>
                <a
                  href="mailto:jeromfranklin123@gmail.com"
                  className="text-[#0e76a8]"
                >
                  {" "}
                  <b>jeromfranklin123@gmail.com</b>
                </a>
              </p>
              <p className="mt-1">
                Or use the form — I usually reply within 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="md:w-2/3 p-8 bg-white/5 rounded">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Message *"
                className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-300 text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:scale-[1.01] transition-transform disabled:opacity-60"
                >
                  <FaPaperPlane />
                  <span>{status.loading ? "Sending..." : "Send Message"}</span>
                </button>

                {status.msg && (
                  <p
                    className={`text-sm ${
                      status.error ? "text-rose-300" : "text-emerald-300"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
              </div>
            </form>

            {/* small hint */}
            <p className="mt-4 text-xs text-gray-300/80">
              Tip: use a short subject & leave your best contact email. This
              form sends to your configured inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
