
const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const modalEl = document.querySelector(".modal");
  const bsModal = new bootstrap.Modal(modalEl);

  // window.onload = function () {
  //   changeNavbarBG();
  //   activeNavLink();
  //   window.addEventListener("scroll", changeNavbarBG);
  //   window.addEventListener("scroll", activeNavLink);
  // };

  function changeNavbarBG() {
    const scrollYPos = window.scrollY;
    // change navbar background color after scroll something
    if (scrollYPos > 200) {
      navbar.style.backgroundColor = `rgba(0,0,0, 0.8)`;
    } else {
      navbar.style.backgroundColor = `rgba(0,0,0, 0)`;
    }
  }

  function activeNavLink() {
    const top = window.scrollY;
    sections.forEach((sec) => {
      const offset = sec.offsetTop;
      const height = sec.offsetHeight - 150;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("active_nav_link");
          } else {
            link.classList.remove("active_nav_link");
          }
        });
      }
    });
  }

  function previewImage(imageURL) {
    const previewImg = document.getElementById("preview-img");
    previewImg.src = imageURL;
    bsModal.show();
  }

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    window.addEventListener("scroll", changeNavbarBG);
    window.addEventListener("scroll", activeNavLink);

        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
          };

          TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
            }

            setTimeout(function () {
              that.tick();
            }, delta);
          };

          window.onload = function () {
               changeNavbarBG();
            activeNavLink();
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-type');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
              }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.0em solid #fff}";
            document.body.appendChild(css);
          };
        

