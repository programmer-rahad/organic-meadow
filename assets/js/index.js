// Javascript
document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const $ = (selector, areAll) => {
    const all = document.querySelectorAll(selector);
    const single = document.querySelector(selector);
    return areAll ? all : single;
  };

  // Organic Accordion
  !(function () {
    const accordionTitles = [...$(".why-organic-item h3", true)];
    accordionTitles.forEach((title) => {
      title.addEventListener("click", function () {
        const para = this.nextElementSibling;
        const icon = this.lastElementChild;
        const showStyle = {
          visibility: "visible",
          opacity: 1,
        };
        const hideStyle = {
          visibility: "hidden",
          opacity: 0,
        };
        accordionTitles.forEach((title) => {
          const para = title.nextElementSibling;
          const icon = title.lastElementChild;
          Object.assign(para.style, hideStyle);
          icon.style.transform = `translateY(-50%) rotate(0deg)`;
        });
        const condition = !+getComputedStyle(para).opacity;
        const rotate = condition ? 180 : 0;
        icon.style.transform = `translateY(-50%) rotate(${rotate}deg)`;
        const paraStyle = condition ? showStyle : hideStyle;
        Object.assign(para.style, paraStyle);
      });
    });
  })();

  // Organic Popup
  !(function () {
    const popupWrap = $("#organic-popup");
    const closeBtn = $("#organic-popup i.fa-times");
    if (!popupWrap) return;   
    closeBtn.addEventListener("click", popupWrap.remove.bind(popupWrap));
  })();

  // Footer Social images change on hover.
  !function() {
    const socialIcons = $('.footer-widget > a',true);
    const defaultImagesSrc = [
      'assets/images/footer/facebook.png',
      'assets/images/footer/twitter.png',
      'assets/images/footer/instagram.png'
    ]
    const hoverImagesSrc = [
      'assets/images/footer/facebook_footer_icon_active.png',
      'assets/images/footer/twitter_footer_icon_active.png',
      'assets/images/footer/instagram_footer_icon_active.png'
    ];
    console.log(hoverImagesSrc);
    socialIcons.forEach((link,i) => {
      const img = link.querySelector('img')
      img.src = defaultImagesSrc[i]
      img.addEventListener('mouseover',function() {
        this.src = hoverImagesSrc[i];
      });
      img.addEventListener('mouseout',function() {
        this.src = defaultImagesSrc[i];
      });
    });
  }()
});



// Jquery
$(document).ready(function () {
  "use strict";
  $("header button").on("click", function () {
    $("header nav").slideToggle();
  });
  const menuLI = $("header nav > ul > li");

  menuLI.on("click", function (e) {
    if (window.innerWidth < 992) {
      $(this).children("ul").slideToggle();
    }
  });

  $(window).resize(function () {
    if (window.innerWidth > 991) {
      $("header nav").slideDown();
    } else {
      $("header nav").slideUp();
    }
  });
});
