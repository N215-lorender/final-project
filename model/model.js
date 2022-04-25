//All the Content!
var homeContent = `<div class="home">
<div class="head-space">
  <div class="header-text-wrapper">
    <p class="header">Header goes here</p>
    <p class="subheader">Less important text here</p>
    <p class="altheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed
      est.</p><button onclick="window.location.href = '#about'" class="header-button">Read More</button>
  </div>
</div>
<div class="quote">
  <div class="quote-text">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium totam remaperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
    sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”</div>
  <div class="quote-name">John Smith</div>
  <div class="quote-title">Corporation CEO, books author.</div>
</div>
<div class="upcoming-events">
  <div class="events-header">Upcoming Events:
    <hr>
  </div>
  <div class="events-wrapper">
    <div class="event">
      <div class="date-block">
        <div class="day">06</div>
        <div class="month">JUN</div>
      </div>
      <div class="event-text">
        <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos
          aspernatur</div>
      </div>
    </div>
    <div class="event">
      <div class="date-block">
        <div class="day">30</div>
        <div class="month">JUN</div>
      </div>
      <div class="event-text">
        <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos
          aspernatur</div>
      </div>
    </div>
    <div class="event">
      <div class="date-block">
        <div class="day">30</div>
        <div class="month">AUG</div>
      </div>
      <div class="event-text">
        <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos
          aspernatur</div>
      </div>
    </div>
    <div class="event">
      <div class="date-block">
        <div class="day">23</div>
        <div class="month">NOV</div>
      </div>
      <div class="event-text">
        <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos
          aspernatur</div>
      </div>
    </div>
    <div class="event">
      <div class="date-block">
        <div class="day">23</div>
        <div class="month">DEC</div>
      </div>
      <div class="event-text">
        <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="event-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos
          aspernatur</div>
      </div>
    </div>
  </div>
</div>
</div>`;
var aboutContent = `<div class="about"><div class="about-header"><div class="header-image"></div><div class="header-text">OUR HISTORY:<hr></div></div><div class="about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemoenim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliqua quaerat voluptatem.</div ></div > `;
var galleryContent = `<div class="gallery">
<div class="gallery-header">
  GALLERY:
  <hr>
</div>
<div class="gallery-images-wrapper">
  <div class="gallery-row">
    <div onclick="window.location.href='#gallery1'" class="r1i1"></div>
    <div onclick="window.location.href='#gallery2'" class="r1i2"></div>
    <div onclick="window.location.href='#gallery3'" class="r1i3"></div>
  </div>
  <div class="gallery-row">
    <div onclick="window.location.href='#gallery4'" class="r2i1"></div>
    <div onclick="window.location.href='#gallery5'" class="r2i2"></div>
  </div>
</div>
</div>`;
var blogContent = `
<div class="blog">
<div class="blog-header">
  BLOG:
  <hr>
</div>
<div class="blog-wrapper">
  <div class="blog-row">
    <div class="blog-bit">
      <div class="date-block">
        <div class="day">06</div>
        <div class="month">JUN</div>
      </div>
      <div class="blog-bit-content">
        <div class="blog-bit-image"></div>
        <div class="blog-bit-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="blog-bit-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
    <div class="blog-bit">
      <div class="date-block">
        <div class="day">30</div>
        <div class="month">JUL</div>
      </div>
      <div class="blog-bit-content">
        <div class="blog-bit-image"></div>
        <div class="blog-bit-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="blog-bit-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
  </div>
  <div class="blog-row">
    <div class="blog-bit">
      <div class="date-block">
        <div class="day">30</div>
        <div class="month">AUG</div>
      </div>
      <div class="blog-bit-content">
        <div class="blog-bit-image"></div>
        <div class="blog-bit-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="blog-bit-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
    <div class="blog-bit">
      <div class="date-block">
        <div class="day">23</div>
        <div class="month">NOV</div>
      </div>
      <div class="blog-bit-content">
        <div class="blog-bit-image"></div>
        <div class="blog-bit-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="blog-bit-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
  </div>
  <div class="blog-row">
    <div class="blog-bit">
      <div class="date-block">
        <div class="day">23</div>
        <div class="month">DEC</div>
      </div>
      <div class="blog-bit-content">
        <div class="blog-bit-image"></div>
        <div class="blog-bit-title">Sed et persipiatis unde omnis iste natus</div>
        <div class="blog-bit-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. </div>
      </div>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="contact-header">
  CONTACT US:
  <hr>
</div>
<div class="contact-wrapper">
  <div class="contact-fields">
    <input type="text" class="field-name" placeholder="Your name...">
    <input type="email" class="field-email" placeholder="Email Address...">
    <input type="text" class="field-company" placeholder="Company...">
    <textarea class="field-msg" placeholder="Message..."></textarea>
    <button class="contact-send-button">SEND MESSAGE</button>
  </div>
  <div class="contact-map"></div>
</div>
</div>`;

var event1Content = `<div class="blog-page">
<div class="blog-page-banner">
  <div class="date-block">
    <div class="day">06</div>
    <div class="month">JUN</div>
  </div>
</div>
<div class="blog-page-content-wrapper">
  <div class="blog-page-header">Header #1:</div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
    dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <div class="blog-page-header">Header #2:</div>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var event2Content = `<div class="blog-page">
<div class="blog-page-banner">
  <div class="date-block">
    <div class="day">30</div>
    <div class="month">JUL</div>
  </div>
</div>
<div class="blog-page-content-wrapper">
  <div class="blog-page-header">Header #1:</div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
    dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <div class="blog-page-header">Header #2:</div>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var event3Content = `<div class="blog-page">
<div class="blog-page-banner">
  <div class="date-block">
    <div class="day">30</div>
    <div class="month">AUG</div>
  </div>
</div>
<div class="blog-page-content-wrapper">
  <div class="blog-page-header">Header #1:</div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
    dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <div class="blog-page-header">Header #2:</div>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var event4Content = `<div class="blog-page">
<div class="blog-page-banner">
  <div class="date-block">
    <div class="day">23</div>
    <div class="month">NOV</div>
  </div>
</div>
<div class="blog-page-content-wrapper">
  <div class="blog-page-header">Header #1:</div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
    dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <div class="blog-page-header">Header #2:</div>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var event5Content = `<div class="blog-page">
<div class="blog-page-banner">
  <div class="date-block">
    <div class="day">23</div>
    <div class="month">DEC</div>
  </div>
</div>
<div class="blog-page-content-wrapper">
  <div class="blog-page-header">Header #1:</div>
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
    dolores eos qui ratione voluptatem sequi nesciunt. </p>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
  <div class="blog-page-header">Header #2:</div>
  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;


var gallery1Content = `<div class="gallery-page">
<div class="gallery1-banner">
  <div class="gallery-banner-text">
    <div class="gallery-banner-number">1.</div>
    <div class="gallery-banner-heading">food festival</div>
  </div>
</div>
<div class="gallery-page-text-wrapper">
  <p class="col1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. </p>
  <p class="col2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var gallery2Content = `<div class="gallery-page">
<div class="gallery2-banner">
  <div class="gallery-banner-text">
    <div class="gallery-banner-number">2.</div>
    <div class="gallery-banner-heading">dee-jay</div>
  </div>
</div>
<div class="gallery-page-text-wrapper">
  <p class="col1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. </p>
  <p class="col2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var gallery3Content = `<div class="gallery-page">
<div class="gallery3-banner">
  <div class="gallery-banner-text">
    <div class="gallery-banner-number">3.</div>
    <div class="gallery-banner-heading">speech</div>
  </div>
</div>
<div class="gallery-page-text-wrapper">
  <p class="col1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. </p>
  <p class="col2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var gallery4Content = `<div class="gallery-page">
<div class="gallery4-banner">
  <div class="gallery-banner-text">
    <div class="gallery-banner-number">4.</div>
    <div class="gallery-banner-heading">open foodfest</div>
  </div>
</div>
<div class="gallery-page-text-wrapper">
  <p class="col1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. </p>
  <p class="col2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;
var gallery5Content = `<div class="gallery-page">
<div class="gallery5-banner">
  <div class="gallery-banner-text">
    <div class="gallery-banner-number">5.</div>
    <div class="gallery-banner-heading">international</div>
  </div>
</div>
<div class="gallery-page-text-wrapper">
  <p class="col1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
    qui ratione voluptatem sequi nesciunt. </p>
  <p class="col2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non
    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
</div>`;


//Take a pgName from app.js and SCREEEEEE
export function modelPageName(pgName) {
    if (pgName == "homeContent") {
        $("nav").removeClass("black").addClass("white");
    }
    else {
        $("nav").removeClass("white").addClass("black");
    }

    try {
        $("#app").html(eval(pgName));
    }
    catch (e) {
        console.log("No")
    }
}