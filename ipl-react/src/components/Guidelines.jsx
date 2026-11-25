function Guidelines({ items }) {
  return (
    <section id="guidelines">
      <h2>Stadium Guidelines</h2>

      {items.map((item) => (
        <article key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export default Guidelines;
