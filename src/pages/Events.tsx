import { useEffect, useState, FormEvent } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import eventsOutdoor from "../assets/events-outdoor.jpg";
import eventsCoffee from "../assets/events-coffee.jpg";
import magazineImage1 from "../assets/2.jpg";
import magazineImage2 from "../assets/1.png";
import magazineImage3 from "../assets/3.jpg";
import newsBg from "../assets/hero-coffee.jpg";
import "../styles/pages.css";
import { toast } from "react-toastify";

// Define Event Type
interface CustomEvent {
  id: number;
  title: string;
  date: string;
  isoDate: string; // for the <input type="date">
  time: string;
  endTime: string;
  cost: string;
  description: string;
  image: string;
  isPast?: boolean;
}

const upcomingEventsData: CustomEvent[] = [
  {
    id: 1,
    title: "Latte Art Workshop",
    date: "March 25, 2026",
    isoDate: "2026-03-25",
    time: "11:00 AM",
    endTime: "2:00 PM",
    cost: "₹1,500",
    description:
      "Learn the secrets of creating beautiful latte art from our expert baristas. Perfect for coffee enthusiasts wanting to elevate their home brewing experience.",
    image: eventsCoffee,
  },
  {
    id: 2,
    title: "Live Acoustic Evening",
    date: "April 2, 2026",
    isoDate: "2026-04-02",
    time: "6:30 PM",
    endTime: "9:30 PM",
    cost: "Free Entry",
    description:
      "Unwind with great coffee, delicious bites, and soothing live acoustic music under the stars in our outdoor courtyard.",
    image: eventsOutdoor,
  },
  {
    id: 3,
    title: "Roasting Masterclass",
    date: "April 10, 2026",
    isoDate: "2026-04-10",
    time: "2:00 PM",
    endTime: "5:00 PM",
    cost: "₹2,500",
    description:
      "Discover the art of roasting coffee beans. Taste different roasts, learn about flavor profiles, and take home your own custom blend.",
    image: newsBg,
  },
];

const previousEventsData: CustomEvent[] = [
  {
    id: 4,
    title: "Brewing Fundamentals",
    date: "Jan 15, 2026",
    isoDate: "2026-01-15",
    time: "10:00 AM",
    endTime: "1:00 PM",
    cost: "₹1,200",
    description:
      "A packed workshop where 20 coffee enthusiasts learned the basics of V60 and Chemex brewing methods.",
    image: magazineImage1,
    isPast: true,
  },
  {
    id: 5,
    title: "Local Barista Throwdown",
    date: "Dec 05, 2025",
    isoDate: "2025-12-05",
    time: "4:00 PM",
    endTime: "8:00 PM",
    cost: "Free Entry",
    description:
      "Cafe Grano hosted an incredible latte art throwdown featuring 32 baristas from across Hyderabad.",
    image: magazineImage2,
    isPast: true,
  },
  {
    id: 6,
    title: "Sunset Cupping Session",
    date: "Oct 24, 2025",
    isoDate: "2025-10-24",
    time: "5:30 PM",
    endTime: "7:00 PM",
    cost: "₹800",
    description:
      "An exclusive evening of tasting rare single-origin beans, paired with light acoustic music on our patio.",
    image: eventsOutdoor,
    isPast: true,
  },
];

const Events = () => {
  const [activeEventTab, setActiveEventTab] = useState<"upcoming" | "previous">(
    "upcoming",
  );

  // Date filter state specifically for Upcoming Events
  const [upcomingDateFilter, setUpcomingDateFilter] = useState("");

  // True Inner Page state
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedEvent]); // Scroll to top whenever an inner page is opened

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwqHXkvb6umqWtQPDB2wWhC157AUI65UOO2XKTRgRc6Zz2HH9hO-XywmNmpJVGbCE8bpQ/exec";

  const handleReservationSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "event_reservation",
          eventId: selectedEvent?.id,
          eventTitle: selectedEvent?.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
        }),
      });

      toast.success("Reservation successful!");

      // Clear all form data and close the event page after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
      });
      setSelectedEvent(null);
    } catch {
      toast.error("Something went wrong");
    }

    setIsSubmitting(false);
  };

  const filteredUpcomingEvents = upcomingDateFilter
    ? upcomingEventsData.filter((evt) => evt.isoDate === upcomingDateFilter)
    : upcomingEventsData;

  // --- ACT AS AN INNER PAGE IF AN EVENT IS SELECTED ---
  if (selectedEvent) {
    return (
      <>
        <Header />
        <main
          style={{
            paddingTop: "120px",
            backgroundColor: "#FAF8F5",
            minHeight: "100vh",
          }}
        >
          <div className="container">
            {/* Back Navigation Bar */}
            <div
              style={{
                marginBottom: "30px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--primary)",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                ← Back to Events
              </button>
            </div>

            {/* Event Hero Details Layout */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Cover Image */}
              <div
                style={{ width: "100%", height: "350px", position: "relative" }}
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    padding: "40px 40px 30px 40px",
                  }}
                >
                  <h1
                    style={{ color: "#fff", fontSize: "2.8rem", margin: "0" }}
                  >
                    {selectedEvent.title}
                  </h1>
                </div>
              </div>

              {/* Split Content: Info vs Form */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "40px",
                  gap: "50px",
                }}
              >
                {/* Left Side: Details & Organizer */}
                <div style={{ flex: "1", minWidth: "300px" }}>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "#555",
                      marginBottom: "40px",
                    }}
                  >
                    {selectedEvent.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "30px",
                    }}
                  >
                    {/* DETAILS Column */}
                    <div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          letterSpacing: "1px",
                          marginBottom: "20px",
                          textTransform: "uppercase",
                          borderBottom: "1px solid #EBEBEB",
                          paddingBottom: "10px",
                          color: "var(--primary)",
                        }}
                      >
                        DETAILS
                      </h4>
                      <div style={{ marginBottom: "15px" }}>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          Start:
                        </span>
                        <br />
                        <span style={{ fontSize: "0.95rem", color: "#666" }}>
                          {selectedEvent.date} @ {selectedEvent.time}
                        </span>
                      </div>
                      <div style={{ marginBottom: "15px" }}>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          End:
                        </span>
                        <br />
                        <span style={{ fontSize: "0.95rem", color: "#666" }}>
                          {selectedEvent.date} @ {selectedEvent.endTime}
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          Cost:
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: "1.1rem",
                            color: "var(--primary)",
                            fontWeight: "bold",
                          }}
                        >
                          {selectedEvent.cost}
                        </span>
                      </div>
                    </div>

                    {/* ORGANIZER Column */}
                    <div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          letterSpacing: "1px",
                          marginBottom: "20px",
                          textTransform: "uppercase",
                          borderBottom: "1px solid #EBEBEB",
                          paddingBottom: "10px",
                          color: "var(--primary)",
                        }}
                      >
                        ORGANIZER
                      </h4>
                      <div style={{ marginBottom: "15px" }}>
                        <span
                          style={{
                            fontSize: "1.05rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          Grano Coffee Affairs
                        </span>
                      </div>
                      <div style={{ marginBottom: "15px" }}>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          Phone:
                        </span>
                        <br />
                        <span style={{ fontSize: "0.95rem", color: "#666" }}>
                          +91 96769 64871
                        </span>
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            color: "#1a1a1a",
                            fontWeight: "600",
                          }}
                        >
                          Email:
                        </span>
                        <br />
                        <span style={{ fontSize: "0.95rem", color: "#666" }}>
                          granohyd@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Reservation Form */}
                <div style={{ flex: "0 0 400px", minWidth: "300px" }}>
                  {!selectedEvent.isPast ? (
                    <div
                      style={{
                        backgroundColor: "#FDFDFD",
                        padding: "35px",
                        borderRadius: "8px",
                        border: "1px solid #EBEBEB",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.6rem",
                          marginBottom: "8px",
                          color: "#1a1a1a",
                        }}
                      >
                        Reserve Your Spot
                      </h3>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "0.95rem",
                          marginBottom: "25px",
                        }}
                      >
                        Join us and experience the perfect coffee gathering.
                      </p>

                      <form
                        onSubmit={handleReservationSubmit}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                        }}
                      >
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          style={{
                            padding: "14px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            fontSize: "0.95rem",
                          }}
                        />
                        <input
                          type="email"
                          className="form-input"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          style={{
                            padding: "14px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            fontSize: "0.95rem",
                          }}
                        />
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          style={{
                            padding: "14px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            fontSize: "0.95rem",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            justifyContent: "space-between",
                            marginTop: "5px",
                          }}
                        >
                          <label
                            style={{
                              fontSize: "0.95rem",
                              color: "#1a1a1a",
                              fontWeight: "600",
                            }}
                          >
                            Number of Guests:
                          </label>
                          <input
                            type="number"
                            className="form-input"
                            min="1"
                            max="10"
                            value={formData.guests}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                guests: e.target.value,
                              })
                            }
                            required
                            style={{
                              padding: "12px",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              width: "90px",
                              textAlign: "center",
                              fontSize: "1rem",
                            }}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                          style={{
                            marginTop: "15px",
                            padding: "16px",
                            width: "100%",
                            fontSize: "1rem",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Reservation"}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#FDFDFD",
                        padding: "35px",
                        borderRadius: "8px",
                        border: "1px solid #EBEBEB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <h3 style={{ color: "#888", textAlign: "center" }}>
                        This event has already concluded.
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </>
    );
  }

  // --- STANDARD EVENTS LISTING VIEW ---
  return (
    <>
      <Header />
      <main>
        <Hero
          title="EVENTS & GATHERINGS"
          subtitle="- Host Your Special Moments -"
          description="From intimate gatherings to corporate events, we have the perfect space for you."
          showButtons={false}
          isPageHero={true}
          backgroundImage={eventsOutdoor}
        />

        {/* Events Module */}
        <section className="section" style={{ backgroundColor: "#FAF8F5" }}>
          <div className="container">
            <div className="text-center mb-5 fade-in visible">
              <span className="subheading" style={{ justifyContent: "center" }}>
                Community Gatherings
              </span>
              <h2>EVENTS AT GRANO</h2>

              {/* Animated Event Tabs */}
              <nav
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    gap: "0",
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    border: "1px solid #EBEBEB",
                  }}
                >
                  {[
                    { key: "upcoming" as const, label: "Upcoming Events" },
                    { key: "previous" as const, label: "Previous Events" },
                  ].map((tab) => (
                    <motion.li
                      key={tab.key}
                      initial={false}
                      animate={{
                        color:
                          activeEventTab === tab.key
                            ? "#fff"
                            : "var(--text)",
                      }}
                      onClick={() => setActiveEventTab(tab.key)}
                      style={{
                        position: "relative",
                        padding: "12px 32px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        letterSpacing: "0.4px",
                        userSelect: "none",
                        zIndex: 1,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {tab.label}
                      {activeEventTab === tab.key && (
                        <motion.div
                          layoutId="event-tab-pill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "var(--primary)",
                            borderRadius: "50px",
                            zIndex: -1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* UPCOMING EVENTS TAB (with precise Date Filter) */}
            <AnimatePresence mode="wait">
            {activeEventTab === "upcoming" && (
              <motion.div
                key="upcoming-tab"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "30px",
                    padding: "20px",
                    gap: "15px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                  }}
                >
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "1.4rem",
                      color: "#1a1a1a",
                    }}
                  >
                    Upcoming Schedule
                  </h3>

                  {/* The true Date Filter input */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <label
                      style={{
                        fontWeight: "600",
                        color: "#666",
                        fontSize: "0.95rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Filter by Date:
                    </label>
                    <input
                      type="date"
                      value={upcomingDateFilter}
                      onChange={(e) => setUpcomingDateFilter(e.target.value)}
                      style={{
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        outline: "none",
                        fontSize: "1rem",
                        color: "#333",
                        cursor: "pointer",
                      }}
                    />
                    {upcomingDateFilter && (
                      <button
                        onClick={() => setUpcomingDateFilter("")}
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#f5f5f5",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontWeight: "600",
                          color: "#666",
                        }}
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {filteredUpcomingEvents.length > 0 ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                      gap: "30px",
                    }}
                  >
                    {filteredUpcomingEvents.map((evt, idx) => (
                      <motion.div
                        key={evt.id}
                        className="menu-card"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          overflow: "hidden",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                        }}
                      >
                        <div style={{ height: "220px", overflow: "hidden" }}>
                          <img
                            src={evt.image}
                            alt={evt.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform = "scale(1.05)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          />
                        </div>
                        <div
                          style={{
                            padding: "24px",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              color: "#C5A480",
                              fontWeight: "600",
                              fontSize: "0.9rem",
                              marginBottom: "8px",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            {evt.date} • {evt.time}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              marginBottom: "12px",
                            }}
                          >
                            <h3
                              style={{
                                fontSize: "1.4rem",
                                margin: "0",
                                color: "#1a1a1a",
                              }}
                            >
                              {evt.title}
                            </h3>
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "var(--primary)",
                                fontSize: "1.2rem",
                              }}
                            >
                              {evt.cost}
                            </span>
                          </div>
                          <p
                            style={{
                              color: "#666",
                              lineHeight: "1.6",
                              marginBottom: "20px",
                              flexGrow: 1,
                            }}
                          >
                            {evt.description}
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={() => setSelectedEvent(evt)}
                            style={{
                              width: "100%",
                              padding: "12px",
                              fontSize: "0.95rem",
                            }}
                          >
                            Reserve Spot
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "60px 20px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                    }}
                  >
                    <h3 style={{ color: "#888", marginBottom: "10px" }}>
                      No Events Found
                    </h3>
                    <p style={{ color: "#999" }}>
                      There are no upcoming events scheduled for the date you
                      selected.
                    </p>
                    <button
                      onClick={() => setUpcomingDateFilter("")}
                      className="btn btn-primary"
                      style={{ marginTop: "15px" }}
                    >
                      Clear Filter
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {/* PREVIOUS EVENTS TAB */}
            {activeEventTab === "previous" && (
              <motion.div
                key="previous-tab"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "30px",
                    marginTop: "30px",
                  }}
                >
                  {previousEventsData.map((evt, idx) => (
                    <motion.div
                      key={evt.id}
                      className="menu-card"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                        opacity: 0.85,
                      }}
                    >
                      <div style={{ height: "220px", overflow: "hidden" }}>
                        <img
                          src={evt.image}
                          alt={evt.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "grayscale(30%)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.filter = "grayscale(0%)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.filter = "grayscale(30%)";
                          }}
                        />
                      </div>
                      <div
                        style={{
                          padding: "24px",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            color: "#888",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            marginBottom: "8px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          {evt.date} • {evt.time}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: "1.4rem",
                              margin: "0",
                              color: "#1a1a1a",
                            }}
                          >
                            {evt.title}
                          </h3>
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "#888",
                              fontSize: "1.2rem",
                            }}
                          >
                            {evt.cost}
                          </span>
                        </div>
                        <p
                          style={{
                            color: "#666",
                            lineHeight: "1.6",
                            marginBottom: "20px",
                            flexGrow: 1,
                          }}
                        >
                          {evt.description}
                        </p>
                        <button
                          className="btn"
                          onClick={() => setSelectedEvent(evt)}
                          style={{
                            width: "100%",
                            padding: "12px",
                            fontSize: "0.95rem",
                            backgroundColor: "#F5F5F5",
                            color: "#888",
                            border: "none",
                            fontWeight: "600",
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>
        </section>

        <CTASection
          title="Host Your Private Event"
          description="Looking to plan a private gathering? Contact us for specialized catering."
          buttonText="Contact Us"
        />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Events;
