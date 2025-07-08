import "../style/footer.scss";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://www.instagram.com/gregg.rott/"
          target="_blank"
          rel="linked"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://es.linkedin.com/in/gregoirecareme"
          target="_blank"
          rel="linked"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/GreggCarem" target="_blank" rel="linked">
          <i class="fa-brands fa-github"></i>
        </a>

        <a href="mailto:gregor.ten1@gmail.com">
          {" "}
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
      <p className="footer-credit">
        © {new Date().getFullYear()} Gregoire Careme. All rights reserved.
      </p>
    </footer>
  );
}
