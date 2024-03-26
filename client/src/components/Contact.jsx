import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [dealer, setDealer] = useState(null);
  const [message, setMessage] = useState("");
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchDealer = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setDealer(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDealer();
  }, [listing.userRef]);
  return (
    <>
      {dealer && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{dealer.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <Link
            to={`mailto:${dealer.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
