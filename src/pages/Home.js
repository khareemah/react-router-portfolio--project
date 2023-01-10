import React from "react";
import hero from "../images/hero-img.jpeg";

function Home() {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>i'm john</h1>
          <h4>freelance web & mobile UI/UX Designer</h4>
          <a href="contact.html" class="btn hero-btn">
            hire me
          </a>
          <ul class="social-icons hero-icons">
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-squarespace"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-behance"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
            {/* <!-- single item --> */}
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            {/* <!-- end of single item --> */}
          </ul>
        </article>
        <article class="hero-img">
          <img src={hero} class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  );
}

export default Home;
