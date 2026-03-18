import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

// Reusing existing assets for beautiful imagery
import heroImg from "../assets/hero-coffee.jpg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import eventsOutdoor from "../assets/events-outdoor.jpg";
import eventsCoffee from "../assets/events-coffee.jpg";

import "../styles/pages.css";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode[];
  image: string;
  author: string;
}

const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Slow Brewing: Why Patience Yields the Best Cup",
    date: "March 15, 2026",
    category: "Brewing Guide",
    readTime: "5 min read",
    excerpt:
      "In a fast-paced world, taking the time to slowly brew a cup of coffee is an act of mindfulness. Discover the science and soul behind our slow-brewing techniques at Grano.",
    author: "Syed Mujtaba Ali",
    image: eventsCoffee,
    content: [
      <p key="1">
        Coffee is often associated with rushing—a quick jolt to kickstart the
        day. However, at Grano Coffee Affairs, we believe that the true essence
        of coffee is unlocked when we slow down. The art of slow brewing is not
        just a method; it’s a philosophy.
      </p>,
      <p key="2">
        When you employ methods like the classic V60 pour-over or the elegant
        Chemex, you are taking complete control over the extraction process. By
        precisely managing the water temperature, the grind size, and the rate
        of the pour, you allow the complex, delicate notes of the coffee bean to
        fully develop.
      </p>,
      <h3
        key="h1"
        style={{ fontSize: "1.8rem", margin: "30px 0 15px", color: "#1a1a1a" }}
      >
        The Science Behind the Pour
      </h3>,
      <p key="3">
        Rapid brewing methods like espresso use extreme pressure to force water
        through coffee grounds in seconds. While this creates a beautiful,
        concentrated shot, it leaves behind many of the subtle floral and fruity
        notes found in lighter roasts. Slow brewing, on the other hand, gives
        the water time to gently coax these flavors out of the grind.
      </p>,
      <p key="4">
        Next time you visit us, order a manual pour-over. Watch the bloom,
        breathe in the aromas, and taste the difference that patience makes.
      </p>,
    ],
  },
  {
    id: 2,
    title: "Why Jubilee Hills is Hyderabad’s True Coffee Haven",
    date: "March 02, 2026",
    category: "Community",
    readTime: "4 min read",
    excerpt:
      "From bustling streets to serene garden settings, explore how the landscape of Jubilee Hills has evolved into the ultimate destination for coffee connoisseurs.",
    author: "Grano Team",
    image: eventsOutdoor,
    content: [
      <p key="1">
        Jubilee Hills has long been known for its upscale lifestyle, but over
        the last few years, a quiet revolution has been brewing. It has
        transformed from a primarily residential and high-end retail hub into
        the undeniable coffee capital of Hyderabad.
      </p>,
      <p key="2">
        What makes Jubilee Hills so perfect for cafe culture? It’s the abundance
        of space, the sprawling trees, and the discerning community that values
        quality and ambiance. Instead of cramped, noisy commercial coffee
        chains, you find beautifully designed garden cafes like Grano that offer
        an oasis of calm.
      </p>,
      <h3
        key="h1"
        style={{ fontSize: "1.8rem", margin: "30px 0 15px", color: "#1a1a1a" }}
      >
        Our Urban Oasis
      </h3>,
      <p key="3">
        When we designed Grano, we wanted to ensure that the natural beauty of
        Jubilee Hills was part of the experience. Opening our doors to the
        outdoor breeze, incorporating greenery, and creating a space that feels
        like a retreat rather than a restaurant was our primary goal. The
        neighborhood provides the perfect backdrop for long conversations over a
        pristine cup of Americano.
      </p>,
    ],
  },
  {
    id: 3,
    title: "Understanding Bean Roasts: Light, Medium, or Dark?",
    date: "February 20, 2026",
    category: "Coffee Knowledge",
    readTime: "6 min read",
    excerpt:
      "Ever wondered what makes a blonde roast different from a French roast? Here is everything you need to know to choose the perfect bean for your palate.",
    author: "Master Roaster",
    image: heroImg,
    content: [
      <p key="1">
        Choosing a coffee bean can sometimes feel like reading a foreign
        language. Single-origin, washed process, elevation—but perhaps the most
        impactful choice you make for your daily cup is the roast level.
      </p>,
      <p key="2">
        <strong>Light Roasts:</strong> Often referred to as "blonde" or
        "cinnamon" roasts, these beans are roasted for the shortest amount of
        time. They retain the most caffeine and preserve the unique, original
        characteristics of the bean. Expect bright, acidic, and fruity flavors.
      </p>,
      <p key="3">
        <strong>Medium Roasts:</strong> This is the sweet spot for many coffee
        drinkers. Medium roasts balance the original flavor of the bean with the
        deeper, caramelized flavors that develop during the roasting process.
        It’s smooth, balanced, and perfect for a classic drip coffee.
      </p>,
      <p key="4">
        <strong>Dark Roasts:</strong> Dark, oily, and robust. Dark roasts are
        left in the roaster until the sugars are heavily caramelized. The
        original flavors of the region are mostly roasted out, replaced by bold,
        smoky, and chocolatey notes. Perfect for espresso and milk-heavy drinks.
      </p>,
      <p key="5">
        At Grano, our baristas are always ready to recommend the perfect roast
        for your preferred brewing method. Don't hesitate to ask!
      </p>,
    ],
  },
  {
    id: 4,
    title: "The Perfect Pastry Pairings for Your Morning Cup",
    date: "February 10, 2026",
    category: "Food & Drink",
    readTime: "3 min read",
    excerpt:
      "Coffee is amazing on its own, but pairing it with the right pastry can elevate the experience. Here are our top combinations from the Grano bakery.",
    author: "Pastry Chef",
    image: img1,
    content: [
      <p key="1">
        A great cup of coffee accompanied by a freshly baked pastry is one of
        life's simplest and greatest pleasures. But did you know that pairing
        specific roasts with specific pastries can drastically change how you
        perceive the flavor of both?
      </p>,
      <ul
        key="ul1"
        style={{
          margin: "20px 0",
          paddingLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <li>
          <strong>Croissants & Flat Whites:</strong> The buttery richness of a
          classic French croissant pairs perfectly with the smooth, velvety
          microfoam and rich espresso base of a Flat White.
        </li>
        <li>
          <strong>Fruit Tarts & Light Roasts:</strong> A fruity, acidic
          Ethiopian light roast pour-over is naturally meant to be paired with a
          fresh berry tart. The acidity complements the fruit perfectly without
          overpowering it.
        </li>
        <li>
          <strong>Chocolate Brownies & Dark Roasts:</strong> The intense,
          bittersweet cocoa flavors in a fudgy brownie require a robust coffee
          to stand up to it. A dark roast or a double espresso is the ideal
          companion.
        </li>
      </ul>,
      <p key="2">
        Explore all these pairings and more at our bakery counter during your
        next visit.
      </p>,
    ],
  },
  {
    id: 5,
    title: "The Aesthetic of Coffee: Designing the Grano Experience",
    date: "January 28, 2026",
    category: "Design",
    readTime: "4 min read",
    excerpt:
      "Take a behind-the-scenes look at the architectural journey and interior design choices that brought Grano Coffee Affairs to life.",
    author: "Grano Team",
    image: img3,
    content: [
      <p key="1">
        A great cafe is about more than just what's in the cup. It's about how
        the space makes you feel from the moment you walk through the door. The
        vision for Grano was to build a sanctuary—a place where time slows down.
      </p>,
      <p key="2">
        We opted for a color palette inspired by coffee itself: rich creams,
        deep browns, warm golds, and natural wood textures. By allowing maximum
        natural light into the space during the day, the cafe feels vibrant and
        alive. As the sun sets, our ambient, warm-toned lighting transitions the
        mood into something intimate and cozy.
      </p>,
      <p key="3">
        Every chair, table, and plant was chosen to balance aesthetics with
        absolute comfort. We wanted to create an environment where you could
        comfortably write a novel, catch up with an old friend, or simply sit
        alone with your thoughts.
      </p>,
    ],
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  // -- TRUE INNER PAGE FOR READING A FULL BLOG POST --
  if (selectedPost) {
    return (
      <>
        <Header />
        <main
          style={{
            paddingTop: "120px",
            backgroundColor: "#fff",
            minHeight: "100vh",
          }}
        >
          {/* Hero Section of Article */}
          <div style={{ width: "100%", height: "55vh", position: "relative" }}>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
              }}
            />

            <div
              className="container"
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                paddingBottom: "50px",
                color: "#fff",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  padding: "5px 12px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  borderRadius: "4px",
                  marginBottom: "20px",
                }}
              >
                {selectedPost.category}
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  maxWidth: "900px",
                  color: "#ffffff",
                }}
              >
                {selectedPost.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  fontSize: "1rem",
                  color: "#e0e0e0",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "600", color: "#fff" }}>
                  By {selectedPost.author}
                </span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
          </div>

          <div
            className="container"
            style={{ maxWidth: "800px", padding: "60px 20px" }}
          >
            {/* Back Navigation Bar */}
            <div
              style={{
                marginBottom: "50px",
                paddingBottom: "20px",
                borderBottom: "1px solid #EBEBEB",
              }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--primary)",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0",
                }}
              >
                ← Back to All Articles
              </button>
            </div>

            {/* Article Content */}
            <article
              style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333" }}
            >
              <p
                style={{
                  fontSize: "1.35rem",
                  color: "#666",
                  fontStyle: "italic",
                  marginBottom: "40px",
                  lineHeight: "1.6",
                }}
              >
                {selectedPost.excerpt}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                {selectedPost.content}
              </div>
            </article>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </>
    );
  }

  // -- STANDARD BLOG INDEX VIEW --
  return (
    <>
      <Header />
      <main>
        <Hero
          title="GRANO JOURNAL"
          subtitle="- Our Blog -"
          description="Stories, insights, and guides from the world of coffee and the Grano community."
          showButtons={false}
          isPageHero={true}
          backgroundImage={heroImg}
        />

        <section className="section" style={{ backgroundColor: "#FAF8F5" }}>
          <div className="container">
            <div className="text-center mb-5 fade-in visible">
              <span className="subheading" style={{ justifyContent: "center" }}>
                Latest Articles
              </span>
              <h2>READ OUR STORIES</h2>
            </div>

            {/* Blog Grid Layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                marginTop: "50px",
                animation: "fadeIn 0.5s ease",
              }}
            >
              {blogPostsData.map((post, idx) => (
                <div
                  key={post.id}
                  className="fade-in visible"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transitionDelay: `${idx * 0.1}s`,
                  }}
                  onClick={() => setSelectedPost(post)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.08)";
                    const img = e.currentTarget.querySelector(
                      ".blog-card-img",
                    ) as HTMLElement;
                    if (img) img.style.transform = "scale(1.05)";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-text",
                    ) as HTMLElement;
                    if (btn) btn.style.letterSpacing = "2px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.03)";
                    const img = e.currentTarget.querySelector(
                      ".blog-card-img",
                    ) as HTMLElement;
                    if (img) img.style.transform = "scale(1)";
                    const btn = e.currentTarget.querySelector(
                      ".read-more-text",
                    ) as HTMLElement;
                    if (btn) btn.style.letterSpacing = "1px";
                  }}
                >
                  <div
                    style={{
                      height: "240px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      className="blog-card-img"
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        backgroundColor: "#fff",
                        padding: "6px 14px",
                        borderRadius: "30px",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "var(--primary)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "30px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#888",
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "15px",
                      }}
                    >
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.5rem",
                        marginBottom: "15px",
                        color: "#1a1a1a",
                        lineHeight: "1.4",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: "1.7",
                        marginBottom: "25px",
                        flexGrow: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        marginTop: "auto",
                        borderTop: "1px solid #F0F0F0",
                        paddingTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        color: "var(--primary)",
                      }}
                    >
                      <span
                        className="read-more-text"
                        style={{
                          fontWeight: "700",
                          fontSize: "0.9rem",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          transition: "letter-spacing 0.3s ease",
                        }}
                      >
                        Read Article
                      </span>
                      <span style={{ marginLeft: "8px", fontSize: "1.2rem" }}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Stay Updated"
          description="Follow our journey and be the first to know about new roasts, events, and cafe updates."
          buttonText="Join Newsletter"
        />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Blog;
