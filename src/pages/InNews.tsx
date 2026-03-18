import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
          description="Stay updated with our latest media features, press mentions, and the buzz around town."
          showButtons={false}
          isPageHero={true}
          backgroundImage={newsBg}
        />

        {/* Magazine Grid Section */}
        <section
          className="section"
          style={{
            backgroundColor: "#fff",
            position: "relative",
            overflow: "hidden",
            paddingTop: "60px",
            paddingBottom: "80px",
          }}
        >
          {/* Decorative background element */}
          <div
            style={{
              position: "absolute",
              top: "-5%",
              right: "-5%",
              opacity: "0.02",
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
              MEDIA
            </span>
          </div>

          <div
            className="container"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div
              className="split-layout"
              style={{ marginBottom: "50px", alignItems: "flex-end" }}
            >
              <div className="split-content fade-in visible">
                <span className="subheading">Latest Features</span>
                <h2 style={{ margin: "0" }}>CAFE GRANO IN THE MEDIA</h2>
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

            {/* TOP ROW: 1 Featured + 1 Medium */}
            <div
              className="grid-3"
              style={{ gap: "20px", marginBottom: "20px" }}
            >
              {/* Card 1: The Hindu (Large) */}
              <a
                href="https://www.thehindu.com/food/features/how-coffee-spaces-have-become-hyderabads-new-community-hubs/article70398693.ece"
                target="_blank"
                rel="noreferrer"
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
                    alt="Community Hubs"
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
                    The Hindu
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
                    </div>
                    <h3
                      style={{
                        fontSize: "2.2rem",
                        marginBottom: "20px",
                        lineHeight: "1.2",
                      }}
                    >
                      Grano Coffee Affairs: Hyderabad’s New Community Hub
                    </h3>
                    <p
                      style={{
                        color: "var(--text-light)",
                        fontSize: "1.05rem",
                        lineHeight: "1.8",
                        marginBottom: "30px",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      For Syed Mujtaba Ali, partner at Grano – Coffee Affairs in
                      Jubilee Hills, cafés were the natural choice for
                      connection. "When we were in college, cafés were the only
                      places we could truly hang out," he says.
                    </p>
                  </div>
                  <div
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
                  </div>
                </div>
              </a>

              {/* Card 2: News18 (Medium) */}
              <a
                href="https://www.news18.com/photogallery/cities/hyderabad-news/hyderabads-top-5-garden-cafes-for-coffee-calm-and-cozy-catch-ups-shil-ws-l-9884548.html"
                target="_blank"
                rel="noreferrer"
                className="card image-zoom fade-in visible"
                style={{
                  gridColumn: "span 1",
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
                    "0 30px 60px rgba(0,0,0,0.08)";
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
                    height: "350px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={magazineImage3}
                    alt="Top 5 Garden Cafes"
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
                    News18
                  </div>
                </div>
                <div
                  style={{
                    padding: "30px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Dec 22, 2025
                  </div>
                  <h4
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "15px",
                      lineHeight: "1.4",
                    }}
                  >
                    Grano Ranked Among Top Garden Cafés For Coffee & Calm
                  </h4>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      flexGrow: "1",
                      display: "-webkit-box",
                      WebkitLineClamp: "4",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    From lush greenery to peaceful vibes, discover why Grano
                    Coffee Affairs ranks consistently among the top garden cafés
                    in the city for your next cozy catch-up session.
                  </p>
                  <div
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Read Article
                  </div>
                </div>
              </a>
            </div>

            {/* BOTTOM ROW: 4 Columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "20px",
              }}
            >
              {/* Card 3: Siasat Pet */}
              <a
                href="https://www.siasat.com/list-of-8-trending-pet-friendly-cafes-in-hyderabad-in-2025-3232730/"
                target="_blank"
                rel="noreferrer"
                className="card image-zoom fade-in visible"
                style={{
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
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.06)";
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
                    alt="Pet Friendly"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "#fff",
                      padding: "6px 12px",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Siasat
                  </div>
                </div>
                <div
                  style={{
                    padding: "25px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Jan 10, 2026
                  </div>
                  <h4
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    Cafe Grano Highlighted as a Premium Pet-Friendly Destination
                  </h4>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flexGrow: "1",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    Looking for the perfect spot to hang out with your furry
                    friend? Cafe Grano has been recognized as one of the best
                    trending pet-friendly destinations offering special treats.
                  </p>
                  <div
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Read Article
                  </div>
                </div>
              </a>

              {/* Card 4: Siasat Garden Hub */}
              <a
                href="https://www.siasat.com/jubilee-hills-hyderabads-hub-of-garden-cafes-10-spots-to-visit-3335603/"
                target="_blank"
                rel="noreferrer"
                className="card image-zoom fade-in visible"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "0",
                  border: "1px solid #EBEBEB",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                  transitionDelay: "0.1s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.06)";
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
                    src={eventsOutdoor}
                    alt="Garden Cafes Hub"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "#fff",
                      padding: "6px 12px",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Siasat
                  </div>
                </div>
                <div
                  style={{
                    padding: "25px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Feb 05, 2026
                  </div>
                  <h4
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    Experience the Best of Jubilee Hills' Garden Cafes at Grano
                  </h4>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flexGrow: "1",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    Jubilee Hills is Hyderabad's undeniable hub for nature
                    lovers. Explore why Grano stands out with its inviting
                    ambiance, open courtyard, and slow-brewed magic.
                  </p>
                  <div
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Read Article
                  </div>
                </div>
              </a>

              {/* Card 5: Travel and Leisure */}
              <a
                href="https://www.travelandleisureasia.com/my/dining/best-restaurants-to-break-your-fast-at-in-hyderabad-this-ramadan-2025/"
                target="_blank"
                rel="noreferrer"
                className="card image-zoom fade-in visible"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "0",
                  border: "1px solid #EBEBEB",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                  transitionDelay: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.06)";
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
                    src={newsBg}
                    alt="Travel & Leisure"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "#fff",
                      padding: "6px 12px",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Travel & Leisure
                  </div>
                </div>
                <div
                  style={{
                    padding: "25px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Mar 01, 2026
                  </div>
                  <h4
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    Grano Cafe: A Top Serene Spot To Break Your Fast This
                    Ramadan
                  </h4>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flexGrow: "1",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    Celebrate the spirit of Ramadan at Cafe Grano with our
                    special curated evening menu, recognized as a highly serene
                    and loved location in Hyderabad.
                  </p>
                  <div
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Read Article
                  </div>
                </div>
              </a>

              {/* Card 6: Bungalower */}
              <a
                href="https://bungalower.com/2025/12/23/whats-in-a-name-fairbanks-ave-bakery-rebrands-again-as-ngrano-cafe-bakery/"
                target="_blank"
                rel="noreferrer"
                className="card image-zoom fade-in visible"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "0",
                  border: "1px solid #EBEBEB",
                  boxShadow: "none",
                  transition: "all 0.4s ease",
                  transitionDelay: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.06)";
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
                    src={eventsCoffee}
                    alt="Rebranding"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "#fff",
                      padding: "6px 12px",
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Bungalower
                  </div>
                </div>
                <div
                  style={{
                    padding: "25px",
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      color: "var(--primary)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Dec 23, 2025
                  </div>
                  <h4
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    Cafe Grano Begins a New Chapter with Exciting Expansion
                  </h4>
                  <p
                    style={{
                      color: "var(--text-light)",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flexGrow: "1",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    A look at our ongoing brand evolution and recent expansions
                    as N'Grano Cafe, marking an exciting new chapter of growth
                    for your favorite coffee destination.
                  </p>
                  <div
                    className="read-more-btn"
                    style={{
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Read Article
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <CTASection
          title="Interested In A Feature?"
          description="We are always open to collaborating with lifestyle magazines, food critics, and local media. Reach out to get in touch with our PR team."
          buttonText="Contact PR Team"
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default InNews;
