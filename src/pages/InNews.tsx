import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import EventsSection from "../components/EventsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import newsBg from "../assets/hero-coffee.jpg";
import eventsOutdoor from "../assets/events-outdoor.jpg";
import eventsCoffee from "../assets/events-coffee.jpg";
import magazineImage1 from "../assets/2.jpg";
import magazineImage2 from "../assets/1.png";
import magazineImage3 from "../assets/3.jpg";
import "../styles/pages.css";

const InNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          title="IN NEWS"
          subtitle="- Insights & Happenings -"
          description="Stay updated with our latest media features, influencer reviews, and upcoming community events."
          showButtons={false}
          isPageHero={true}
          backgroundImage={newsBg}
        />

        {/* News & Magazine Section - Redesigned */}
        <section
          className="section"
          style={{
            backgroundColor: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background element */}
          <div
            style={{
              position: "absolute",
              top: "-5%",
              right: "-5%",
              opacity: "0.03",
              pointerEvents: "none",
              zIndex: "0",
            }}
          >
            <span
              style={{
                fontSize: "40vw",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.05em",
                color: "#000",
              }}
            >
              NEWS
            </span>
          </div>

          <div
            className="container"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div
              className="split-layout"
              style={{ marginBottom: "40px", alignItems: "flex-end" }}
            >
              <div className="split-content fade-in visible">
                <span className="subheading">Latest Features</span>
                <h2 style={{ margin: "0" }}>GRANO IN NEWS</h2>
              </div>
              <div
                className="split-content fade-in visible"
                style={{ transitionDelay: "0.2s" }}
              >
                <p
                  style={{
                    margin: "0",
                    color: "var(--text-light)",
                    maxWidth: "500px",
                    float: "right",
                    textAlign: "right",
                  }}
                >
                  Discover what food critics, lifestyle magazines, and the
                  community have to say about our artisanal coffee experience.
                </p>
              </div>
            </div>

            <div className="grid-3" style={{ gap: "20px" }}>
              {/* Featured Main News Article - Spans 2 columns on desktop */}
              <a
                href="#"
                className="card image-zoom fade-in visible"
                style={{
                  gridColumn: "span 2",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "0",
                  border: "1px solid #EBEBEB",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 30px 60px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = "transparent";
                  const btn = e.currentTarget.querySelector(
                    ".read-more-btn",
                  ) as HTMLElement;
                  if (btn) btn.style.color = "var(--primary)";
                  const arrow = e.currentTarget.querySelector(
                    ".read-more-arrow",
                  ) as HTMLElement;
                  if (arrow) arrow.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#EBEBEB";
                  const btn = e.currentTarget.querySelector(
                    ".read-more-btn",
                  ) as HTMLElement;
                  if (btn) btn.style.color = "var(--text)";
                  const arrow = e.currentTarget.querySelector(
                    ".read-more-arrow",
                  ) as HTMLElement;
                  if (arrow) arrow.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "350px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={magazineImage2}
                    alt="Barista at Work"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      backgroundColor: "#fff",
                      padding: "8px 16px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Food & Lifestyle
                  </div>
                </div>
                <div
                  style={{
                    padding: "40px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--primary)",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span>Dec 18, 2025</span>
                      <span
                        style={{
                          width: "30px",
                          height: "1px",
                          backgroundColor: "var(--primary)",
                          display: "inline-block",
                        }}
                      ></span>
                      <span>The Hindu</span>
                    </div>
                    <h3
                      style={{
                        fontSize: "2.2rem",
                        marginBottom: "20px",
                        lineHeight: "1.2",
                        letterSpacing: "0",
                      }}
                    >
                      How coffee spaces have become Hyderabad’s new community
                      hubs
                    </h3>
                    <p
                      style={{
                        color: "var(--text-light)",
                        fontSize: "1.05rem",
                        lineHeight: "1.8",
                        marginBottom: "30px",
                        display: "-webkit-box",
                        WebkitLineClamp: "4",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      For Syed Mujtaba Ali, partner at Grano – Coffee Affairs in
                      Jubilee Hills, cafés were the natural choice for
                      connection. "When we were in college, cafés were the only
                      places we could truly hang out," he says. "Not
                      restaurants." That sense of ease prompted him and his
                      partner to start Grano.
                    </p>
                  </div>
                  <a
                    href="https://www.thehindu.com/food/features/how-coffee-spaces-have-become-hyderabads-new-community-hubs/article70398693.ece"
                    target="_blank"
                    rel="noreferrer"
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderTop: "1px solid #EBEBEB",
                      paddingTop: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "color 0.3s ease",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Read Full Article
                    <span
                      className="read-more-arrow"
                      style={{
                        marginLeft: "8px",
                        transition: "transform 0.3s ease",
                        display: "inline-block",
                      }}
                    >
                      →
                    </span>
                  </a>
                </div>
              </a>

              {/* Stacked Secondary News Articles */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  height: "100%",
                }}
              >
                {/* Secondary News 1 */}
                <a
                  href="https://unscriptedadventures.blog/2025/04/07/grano-coffee-affairs-a-slow-brewed-morning/"
                  target="_blank"
                  rel="noreferrer"
                  className="card image-zoom fade-in visible"
                  style={{
                    transitionDelay: "0.1s",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "0",
                    border: "1px solid #EBEBEB",
                    boxShadow: "none",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-btn",
                    ) as HTMLElement;
                    if (btn) btn.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#EBEBEB";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-btn",
                    ) as HTMLElement;
                    if (btn) btn.style.color = "var(--text)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={magazineImage1}
                      alt="Coffee Art"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      flexGrow: "1",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        color: "var(--primary)",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Unscripted Adventures • Apr 07, 2025
                    </div>
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      Grano Coffee Affairs: A Slow-Brewed Morning
                    </h4>
                    <p
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        marginBottom: "15px",
                        flexGrow: "1",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      A detailed blog review capturing the essence of our
                      slow-brewed coffee experience and inviting ambiance.
                    </p>
                    <div
                      className="read-more-btn"
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Read More
                    </div>
                  </div>
                </a>

                {/* Secondary News 2 */}
                <a
                  href="https://www.zomato.com/hyderabad/grano-coffee-affairs-jubilee-hills"
                  target="_blank"
                  rel="noreferrer"
                  className="card image-zoom fade-in visible"
                  style={{
                    transitionDelay: "0.2s",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "0",
                    border: "1px solid #EBEBEB",
                    boxShadow: "none",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "transparent";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-btn",
                    ) as HTMLElement;
                    if (btn) btn.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#EBEBEB";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-btn",
                    ) as HTMLElement;
                    if (btn) btn.style.color = "var(--text)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={magazineImage3}
                      alt="Cafe Interior"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      flexGrow: "1",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div
                      style={{
                        color: "var(--primary)",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Zomato • Trusted Reviews
                    </div>
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      Grano Coffee Affairs - Rated Highly by the Community
                    </h4>
                    <p
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        marginBottom: "15px",
                        flexGrow: "1",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      See what thousands of happy customers are saying about our
                      coffee, food, and ambiance on Zomato.
                    </p>
                    <div
                      className="read-more-btn"
                      style={{
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Read More
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Module */}
        <section className="section" style={{ backgroundColor: "#FAF8F5" }}>
          <div className="container">
            <div className="text-center mb-5 fade-in visible">
              <span className="subheading" style={{ justifyContent: "center" }}>
                Mark Your Calendar
              </span>
              <h2>UPCOMING EVENTS</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                marginTop: "40px",
              }}
            >
              {/* Event 1 */}
              <div
                className="menu-card fade-in visible"
                style={{
                  transitionDelay: "0.1s",
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
                    src={eventsCoffee}
                    alt="Event 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
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
                      color: "#C5A480",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    March 25, 2026 • 11:00 AM
                  </div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "12px",
                      color: "#1a1a1a",
                    }}
                  >
                    Latte Art Workshop
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    Learn the secrets of creating beautiful latte art from our
                    expert baristas. Perfect for coffee enthusiasts wanting to
                    elevate their home brewing experience.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>

              {/* Event 2 */}
              <div
                className="menu-card fade-in visible"
                style={{
                  transitionDelay: "0.2s",
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
                    src={eventsOutdoor}
                    alt="Event 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
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
                      color: "#C5A480",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    April 2, 2026 • 6:30 PM
                  </div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "12px",
                      color: "#1a1a1a",
                    }}
                  >
                    Live Acoustic Evening
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    Unwind with great coffee, delicious bites, and soothing live
                    acoustic music under the stars in our outdoor courtyard.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Get Tickets
                  </button>
                </div>
              </div>

              {/* Event 3 */}
              <div
                className="menu-card fade-in visible"
                style={{
                  transitionDelay: "0.3s",
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
                    src={newsBg}
                    alt="Event 3"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
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
                      color: "#C5A480",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    April 10, 2026 • 2:00 PM
                  </div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "12px",
                      color: "#1a1a1a",
                    }}
                  >
                    Roasting Masterclass
                  </h3>
                  <p
                    style={{
                      color: "#666",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      flexGrow: 1,
                    }}
                  >
                    Discover the art of roasting coffee beans. Taste different
                    roasts, learn about flavor profiles, and take home your own
                    custom blend.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro for News/Influencers */}
        <section
          className="section"
          style={{ backgroundColor: "#fff", paddingBottom: "0" }}
        >
          <div className="container">
            <div className="text-center mb-5 fade-in visible">
              <span className="subheading" style={{ justifyContent: "center" }}>
                Media & Community
              </span>
              <h2>INFLUENCER REVIEWS & HAPPY CUSTOMERS</h2>
              <p
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  marginTop: "1rem",
                }}
              >
                We are incredibly grateful for the love and support from our
                community, influencers, and media partners. Discover what people
                have to say about the Cafe Grano experience.
              </p>
            </div>
          </div>
        </section>

        {/* Happy Customers / Reviews */}
        <TestimonialsSection />

        {/* Upcoming Events */}
        <EventsSection />

        {/* Call to action */}
        <CTASection
          title="Join Our Community"
          description="Follow us on social media or reach out to partner with us for your next feature."
          buttonText="Contact Us"
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default InNews;
