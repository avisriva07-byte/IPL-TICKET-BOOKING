function Hero({ title, subtitle }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <button onClick={() => scrollTo("matches")}>View Schedule</button>
      <button onClick={() => scrollTo("booking")}>Book Ticket</button>
    </section>
  );
}

export default Hero;
