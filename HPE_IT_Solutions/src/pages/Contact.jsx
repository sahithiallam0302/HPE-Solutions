import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import L from "leaflet";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.flyTo(center, zoom, { duration: 1.5 });
    return null;
}

const Contact = () => {

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = {
        Hyderabad: {
            center: [17.4339, 78.3809],
            zoom: 12,
            branches: [
                {
                    position: [17.432257724644515, 78.38141795750644],
                    address:
                        "Floor 11, Orwell Block 1, SALARPURIA SATTVA KNOWLEDGE CITY Silpa Gram Craft Village, Silpa Gram Craft Village, Madhapur, Hyderabad, Telangana 500032",
                    phone: "8000401716",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [17.432925193463117, 78.38670900671949],
                    address:
                        "4th Floor D-Block, iLabs Centre, Center, Hitech City Main Rd, Silpa Gram Craft Village, Madhapur, Hyderabad, Telangana 500081",
                    phone: "04039223400",
                    website: "http://www.hpe.com/",
                    closed: true,
                },
                {
                    position: [17.43300153124556, 78.38658681746145],
                    address:
                        "2nd Floor, The Platina, B-204, Jayabheri Enclave, Gachibowli, Hyderabad, Telangana 500032",
                    phone: "09052000723",
                    website: "http://www.hpe.com/",
                    closed: true,
                },
            ],
        },

        Chennai: {
            center: [13.0673, 80.2523],
            zoom: 12,
            branches: [
                {
                    position: [13.06000179141538, 80.25381493225325],
                    address:
                        "Level 5, PRESTIGE PALLADIUM BAYAN, 4th Floor, No 129 to 140, 'Prestige Palladium Bayan, : 129 – 140, Greams Rd, Chennai, Tamil Nadu 600006",
                    phone: "18004198080",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [13.067657183526846, 80.25791746260991],
                    address:
                        "3rd Floor, Kgn Towers, Ethiraj Salai, Egmore, Chennai, Tamil Nadu 600008",
                    phone: "8000401716",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [13.01865206748831, 80.20321368606649],
                    address:
                        "2673+MG4, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032",
                    phone: "9123451234",
                    website: "https://www.hp.com/in-en/home.html",
                },
            ],
        },

        Bangalore: {
            center: [12.9716, 77.5946],
            zoom: 12,
            branches: [
                {
                    position: [13.003630358096803, 77.6891708301483],
                    address:
                        "Mahadevapura Main Rd, near DNR Casablanca, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048",
                    phone: "18004198080",
                    website: "http://hpe.com/",
                },
                {
                    position: [12.94649184687575, 77.60882287213298],
                    address:
                        "24, Hosur Rd, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560030",
                    phone: "08000401716",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [12.861275215220735, 77.65999154042122],
                    address:
                        "Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100",
                    phone: "18004198080",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [13.00363035740736, 77.6871108925203],
                    address:
                        "HEWLETT PACKARD ENTERPRISE, next to DNR Casablanca, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048",
                    website: "https://www.hpe.com/in/en/home.html",
                },
                {
                    position: [12.985824140183427, 77.65793488594669],
                    address:
                        "Embassy Prime, No. 66/2, Ward No. 83, Bagmane Tech Park-5th Floor, C V Raman Nagar, Bengaluru, Karnataka 560093",
                    website: "https://www.hpe.com/in/en/home.html",
                },
            ],
        },

        Mumbai: {
            center: [19.076, 72.8777],
            zoom: 12,
            branches: [
                {
                    position: [19.16444730181653, 72.84626609825828],
                    address:
                        "International Business Park 15th Floor Commerz Building, Oberoi Garden City, Off, Western Express Hwy, Goregaon, Mumbai, Maharashtra 400104",
                    phone: "8000401716",
                    website: "https://www.hpe.com/in/en/home.html",
                    closed: true,
                },
            ],
        },

        Delhi: {
            center: [28.504589076415204, 77.0951890879881],
            zoom: 12,
            branches: [
                {
                    position: [28.504128442403474, 77.09532707529478],
                    address:
                        "2nd Floor, DLF Down Town, Block 5, A, Ambience Island, DLF Phase 3, Sector 25, Gurugram, Haryana 122002",
                    phone: "9312665285",
                    website: "https://www.hpe.com/in/en/",
                },
            ],
        },
    };

    return (
        <div className="bg-white text-white w-full overflow-hidden">

            {/* HERO SECTION */}
            <section
                id="hero"
                className="relative w-full h-[75vh] flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('/contact_us2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/55"></div>

                <div className="relative z-10 max-w-4xl px-6">

                    {/* HEADING */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6 group cursor-pointer transition-all duration-300">

                        <span className="text-orange-500 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-all duration-300">
                            CONTACT
                        </span>{" "}

                        <span className="text-blue-600 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all duration-300">
                            US
                        </span>

                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-10">
                        Engage with HPE IT Solutions to build scalable, compliant, and digitally integrated enterprise and infrastructure ecosystems.
                    </p>

                    {/* BUTTON */}
                    <button
                        onClick={() =>
                            document.getElementById("contact-section")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className="px-12 py-4 bg-orange-400 border-2 border-orange-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.7)]"
                    >
                        Get In Touch
                    </button>

                </div>
            </section>

            {/* CONTACT INFO + FORM */}
            <section id="contact-section" className="py-24 px-6 md:px-20 bg-white">
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* LEFT BLOCK */}
                    <div className="bg-white border border-transparent rounded-3xl p-12 space-y-12 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-600">

                        {/* Email */}
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 border border-orange-500 rounded-full text-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:-translate-y-1">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h3 className="text-black font-semibold text-lg">Email</h3>
                                <p className="text-gray-600">support@hpeitsolutions.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 border border-orange-500 rounded-full text-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:-translate-y-1">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h3 className="text-black font-semibold text-lg">Call Us</h3>
                                <p className="text-gray-600">+91 9154399144</p>
                            </div>
                        </div>

                        {/* Visit */}
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 border border-orange-500 rounded-full text-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] hover:-translate-y-1">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="text-black font-semibold text-lg">Corporate Office</h3>
                                <p className="text-gray-600 mb-6">Hyderabad, India</p>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT BLOCK */}
                    <div className="bg-white border border-transparent rounded-3xl p-12 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-600">
                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-4 bg-white rounded-xl border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 bg-white rounded-xl border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 bg-white rounded-xl border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full p-4 bg-white rounded-xl border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-4 bg-orange-100 border border-orange-500 text-orange-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.7)] hover:-translate-y-1"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>
            </section>

            {/* MAP SECTION */}
            <section className="py-20 bg-white">

                {/* Heading */}
                <h4 className="text-3xl font-bold text-black text-center mb-10">
                    Our Operational Presence in India
                </h4>

                {/* City Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {Object.keys(cities).map((city) => (
                        <button
                            key={city}
                            onClick={() => setSelectedCity(city)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium
          ${selectedCity === city
                                    ? "bg-blue-100 border-blue-600 text-blue-600"
                                    : "bg-transparent border-transparent text-black hover:text-blue-600 hover:shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                                }
        `}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* Map Wrapper (styled only) */}
                <div className="max-w-6xl mx-auto h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <MapContainer
                        key={selectedCity ? selectedCity : "india"}   // 🔒 unchanged logic
                        center={
                            selectedCity
                                ? cities[selectedCity].center
                                : [22.5, 82]
                        }
                        zoom={selectedCity ? cities[selectedCity].zoom : 5}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* City Pins (unchanged) */}
                        {!selectedCity &&
                            Object.entries(cities).map(([city, data]) => (
                                <Marker
                                    key={city}
                                    position={data.center}
                                    eventHandlers={{
                                        click: () => setSelectedCity(city),
                                    }}
                                />
                            ))}

                        {/* Branch Pins (unchanged) */}
                        {selectedCity &&
                            cities[selectedCity].branches.map((branch, i) => (
                                <Marker key={i} position={branch.position}>
                                    <Popup>
                                        <strong>{selectedCity} Branch</strong>
                                        <br />
                                        {branch.address}
                                        <br />
                                        {branch.phone && <>📞 {branch.phone}<br /></>}
                                        {branch.website && (
                                            <>
                                                <a href={branch.website} target="_blank" rel="noreferrer">
                                                    Visit Website
                                                </a>
                                                <br />
                                            </>
                                        )}

                                        <a
                                            href={`https://www.google.com/maps?q=${branch.position[0]},${branch.position[1]}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Open in Google Maps
                                        </a>
                                        <br />

                                        <button
                                            onClick={() => setSelectedCity(null)}
                                            style={{
                                                marginTop: "8px",
                                                color: "#2563eb",
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: 0,
                                            }}
                                        >
                                            ← Back to India Map
                                        </button>

                                        {branch.closed && (
                                            <p style={{ color: "red", fontWeight: "bold" }}>
                                                Permanently Closed
                                            </p>
                                        )}
                                    </Popup>
                                </Marker>
                            ))}
                    </MapContainer>
                </div>

            </section>

        </div>
    );
}
export default Contact;