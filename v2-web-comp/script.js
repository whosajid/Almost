// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <img class="logo" src="img/almost logo.png" />
        <img src="img/ham-open.svg" class="ham" />
        <nav>
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a class="btn" href="#">Hire us</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("t-header", THeader);

// section
class TSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const link = this.getAttribute("link");
    const linkText = this.getAttribute("linkText");
    const img = this.getAttribute("img");
    const heading2 = this.getAttribute("heading2");
    const details2 = this.getAttribute("details2");
    const link2 = this.getAttribute("link2");
    const linkText2 = this.getAttribute("linkText2");
    const img2 = this.getAttribute("img2");

    this.innerHTML = `
      <section class="flex margin6">
        <div>
          <h2>${heading}</h2>
          <p>${details}</p>
          <a class="btn" href="${link}">${linkText}</a>
        </div>
        <img src="${img}"/>
      </section>
      <section class="flex margin6 reverse">
        <div>
          <h2>${heading2}</h2>
          <p>${details2}</p>
          <a class="btn" href="${link2}">${linkText2}</a>
        </div>
        <img src="${img2}"/>
      </section>
    `;
  }
}
customElements.define("t-section", TSection);

// main section
class TMainSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");

    this.innerHTML = `
      <div class="main-section">
        <h2>${heading}</h2>
        <p>${details}</p>
      </div>
    `;
  }
}
customElements.define("t-main-section", TMainSection);

// CTA
class TCTA extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const linkText = this.getAttribute("linkText");
    const link = this.getAttribute("link");

    this.innerHTML = `
      <section class="center padding6">
        <h2>${heading}</h2>
        <p>${details}</p>
        <a href="${link}" class="btn">${linkText}</a>
      </section>
    `;
  }
}
customElements.define("t-cta", TCTA);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer">
          <div class="footer-left">
            <img class="logo" src="img/almost logo.png" />
            <p>
              We build websites that load in under a minute. <br />
              Sometimes even faster.
            </p>
          </div>
          <div class="footer-right">
            <div class="social-media-icons">
              <img src="img/icons8-github.svg" class="social-media" />
              <img src="img/icons8-linkedin.svg" class="social-media" />
              <img src="img/icons8-x.svg" class="social-media" />
              <img src="img/icons8-youtube.svg" class="social-media" />
            </div>
            <p>
              3 Way, 69th Street, Somewhere, USB <br />
              123-456-7890 <br />
              bye@almost.dev
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);

// hamburger
const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);
nav.addEventListener("click", toggle);
function toggle() {
  ham.src = ham.src.includes("img/ham-close.svg")
    ? "img/ham-open.svg"
    : "img/ham-close.svg";
  nav.classList.toggle("show");
}
