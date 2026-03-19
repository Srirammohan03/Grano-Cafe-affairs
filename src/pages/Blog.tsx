import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
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
        just a method; it's a philosophy.
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
    title: "Why Jubilee Hills is Hyderabad's True Coffee Haven",
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
        What makes Jubilee Hills so perfect for cafe culture? It's the abundance
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
        It's smooth, balanced, and perfect for a classic drip coffee.
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

// All unique categories
const allCategories = ["All", ...Array.from(new Set(blogPostsData.map((p) => p.category)))];

// Mobile detection hook
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
};

// ─── Animated Blog Card Component ───
const BlogCard = ({
  post,
  index,
  onSelect,
  layout = "standard",
}: {
  post: BlogPost;
  index: number;
  onSelect: (p: BlogPost) => void;
  layout?: "featured" | "standard";
}) => {
  const isMobile = useIsMobile();
  const isFeatured = layout === "featured" && !isMobile;

  return (
    <motion.div
      layoutId={`blog-card-${post.id}`}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onClick={() => onSelect(post)}
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: isFeatured ? "row" : "column",
        cursor: "pointer",
        position: "relative",
        ...(isFeatured ? { gridColumn: "1 / -1" } : {}),
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 24px 50px rgba(0,0,0,0.10)",
        transition: { duration: 0.35 },
      }}
    >
      {/* Image */}
      <div
        style={{
          height: isFeatured ? "100%" : isMobile ? "200px" : "240px",
          minHeight: isFeatured ? "340px" : undefined,
          width: isFeatured ? "55%" : "100%",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <motion.img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
        />
        {/* Category Pill */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            padding: "6px 16px",
            borderRadius: "30px",
            fontSize: "0.72rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            color: "var(--primary)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: isMobile ? "22px 20px" : isFeatured ? "40px 40px" : "28px 28px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: isFeatured ? "center" : "flex-start",
        }}
      >
        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#999",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "14px",
          }}
        >
          <span>{post.date}</span>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc", display: "inline-block" }}></span>
          <span>{post.readTime}</span>
        </div>

        <h3
          style={{
            fontSize: isMobile ? "1.15rem" : isFeatured ? "1.9rem" : "1.35rem",
            marginBottom: "14px",
            color: "#1a1412",
            lineHeight: "1.3",
            fontWeight: 700,
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            color: "#666",
            lineHeight: "1.75",
            marginBottom: isFeatured ? "28px" : "20px",
            flexGrow: 1,
            fontSize: isFeatured ? "1.05rem" : "0.95rem",
          }}
        >
          {post.excerpt}
        </p>

        {/* Author + Read More */}
        <div
          style={{
            borderTop: "1px solid #f0f0f0",
            paddingTop: "18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--primary), #a67c52)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "0.75rem",
              }}
            >
              {post.author.charAt(0)}
            </div>
            <span style={{ fontSize: "0.85rem", color: "#555", fontWeight: 500 }}>
              {post.author}
            </span>
          </div>
          <motion.span
            style={{
              fontWeight: 700,
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--primary)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            whileHover={{ x: 4 }}
          >
            Read
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Article Reader View (Inner Page) ───
const ArticleReader = ({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          paddingTop: "120px",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* Hero Image with Parallax feel */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%", height: "55vh", position: "relative", overflow: "hidden" }}
        >
          <img
            src={post.image}
            alt={post.title}
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
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          />

          <motion.div
            className="container"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: "inline-block",
                backgroundColor: "var(--primary)",
                color: "#fff",
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                borderRadius: "30px",
                marginBottom: "20px",
              }}
            >
              {post.category}
            </motion.div>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.2",
                marginBottom: "20px",
                maxWidth: "900px",
                color: "#ffffff",
              }}
            >
              {post.title}
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
                By {post.author}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </motion.div>

        <div
          className="container"
          style={{ maxWidth: "800px", padding: "60px 20px" }}
        >
          {/* Back Navigation */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              marginBottom: "50px",
              paddingBottom: "20px",
              borderBottom: "1px solid #EBEBEB",
            }}
          >
            <button
              onClick={onClose}
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
          </motion.div>

          {/* Article Content with staggered reveal */}
          <article
            ref={contentRef}
            style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#333" }}
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontSize: "1.35rem",
                color: "#666",
                fontStyle: "italic",
                marginBottom: "40px",
                lineHeight: "1.6",
              }}
            >
              {post.excerpt}
            </motion.p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >
              {post.content.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                >
                  {block}
                </motion.div>
              ))}
            </div>
          </article>
        </div>
      </motion.main>
      <Footer />
      <BackToTop />
    </>
  );
};

// ─── Main Blog Component ───
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const filteredPosts =
    activeCategory === "All"
      ? blogPostsData
      : blogPostsData.filter((p) => p.category === activeCategory);

  // -- ARTICLE READER VIEW --
  if (selectedPost) {
    return (
      <ArticleReader post={selectedPost} onClose={() => setSelectedPost(null)} />
    );
  }

  // -- BLOG INDEX VIEW --
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
            {/* Header + Animated Category Filter */}
            <div className="text-center mb-5">
              <motion.span
                className="subheading"
                style={{ justifyContent: "center" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Latest Articles
              </motion.span>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                READ OUR STORIES
              </motion.h2>

              {/* Category Filter Tabs with shared layout pill animation */}
              <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: "4px",
                    margin: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "3px",
                    backgroundColor: "#fff",
                    borderRadius: "14px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    border: "1px solid #EBEBEB",
                    justifyContent: "center",
                    maxWidth: "100%",
                  }}
                >
                  {allCategories.map((cat) => (
                    <motion.li
                      key={cat}
                      initial={false}
                      animate={{
                        color: activeCategory === cat ? "#fff" : "#555",
                      }}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        position: "relative",
                        padding: "8px 16px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        letterSpacing: "0.3px",
                        userSelect: "none",
                        zIndex: 1,
                        whiteSpace: "nowrap",
                        transition: "color 0.3s ease",
                        borderRadius: "10px",
                      }}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <motion.div
                          layoutId="blog-cat-pill"
                          style={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "var(--primary)",
                            borderRadius: "10px",
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
              </motion.nav>
            </div>

            {/* Blog Grid with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                  gap: "28px",
                  marginTop: "40px",
                }}
              >
                {filteredPosts.map((post, idx) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={idx}
                    onSelect={setSelectedPost}
                    layout={idx === 0 && activeCategory === "All" ? "featured" : "standard"}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  textAlign: "center",
                  padding: "80px 20px",
                  color: "#999",
                }}
              >
                <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
                  No articles in this category yet
                </h3>
                <p>Check back soon — we're always brewing new stories.</p>
              </motion.div>
            )}
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
