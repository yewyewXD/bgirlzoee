import React from "react";

const GallerySection = () => {
  const galleries = [
    {
      title: "🌸F L O W E R🌸",
      post:
        "https://www.instagram.com/p/CGNq-bEnsbY/?utm_source=ig_web_copy_link",
      image:
        "https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121082972_1003775773472306_5267247715938802306_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ccFxsTNKAxYAX9Ix9ql&tp=1&oh=9e5affcfa680cbfc144c436bcf1e70f1&oe=601BC044",
      date: "12.10.2020",
    },
    {
      title: "🐱C A T🐱",
      post:
        "https://www.instagram.com/p/CFtaPFkHQKr/?utm_source=ig_web_copy_link",
      image:
        "https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/120203251_254807822498302_7545259294094547825_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=xEE6szyKpWcAX8AhqVN&tp=1&oh=e3130cffa9a8dbe15b7f81ced321748f&oe=601BD3C9",
      date: "29.9.2020",
    },
    {
      title: "💧W A T E R💧",
      post:
        "https://www.instagram.com/p/CExMKoBn4L0/?utm_source=ig_web_copy_link",
      image:
        "https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118780578_179829103655273_581218017487393459_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=HWpu8_5C_NoAX_qeoDy&tp=1&oh=53d1639dab7bbc180f306218d6f137ad&oe=601BD017",
      date: "6.9.2020",
    },
    {
      title: "🌾L A K E🌾",
      post:
        "https://www.instagram.com/p/CFd9t2gnIBC/?utm_source=ig_web_copy_link",
      image:
        "https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119965518_636632730559378_6717856982340787515_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=bY8HllKARvUAX9whAbB&tp=1&oh=d4676ca29ea6c1075ac6a5e54178888f&oe=601BFC0F",
      date: "23.9.2020",
    },
  ];
  return (
    <section className="GallerySection | py-5 my-sm-5" id="gallery">
      <div className="container">
        {/* title */}
        <div className="mb-lg-4 mb-3 pb-4 text-center">
          <h2>My Gallery</h2>
          <hr className="titleLine" />
        </div>

        {/* content */}
        <div className="row mx-sm-0 mx-2">
          <a
            href="https://www.instagram.com/p/CFCCV3jjS2l/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="GalleryCard | all-center align-items-end col-md-6 col-lg-8 mb-md-3 mb-5 p-0"
          >
            <div
              className="GalleryCard__Image | mx-md-2"
              style={{
                backgroundImage: `url(${"https://instagram.fkul14-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119066386_3880472801968165_2154101224876495149_n.jpg?_nc_ht=instagram.fkul14-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-R95ceq88f4AX_B4rKp&tp=1&oh=8f9e38aadb27b95cf2230e5b7fa3e39a&oe=601DED0A"})`,
              }}
            ></div>

            <div className="GalleryCard__Shadow">
              <div className="GalleryCaption | mx-sm-4 mx-3 my-md-3 my-sm-4 my-3">
                <div className="GalleryCaption__Title">
                  ✨M O U N T A I N S✨
                </div>
                <div className="GalleryCaption__Subtitle | muted">
                  Posted on 12.11.2020
                </div>
              </div>
            </div>
          </a>

          {galleries.map((gallery) => (
            <a
              key={gallery.image}
              href={gallery.post}
              target="_blank"
              rel="nooopener noreferrer"
              className="GalleryCard | all-center align-items-end col-md-6 col-lg-4 mb-md-3 mb-5 p-0"
            >
              <div
                className="GalleryCard__Image | mx-md-2"
                style={{
                  backgroundImage: `url(${gallery.image})`,
                }}
              ></div>

              <div className="GalleryCard__Shadow">
                <div className="GalleryCaption | mx-sm-4 mx-3 my-md-3 my-sm-4 my-3">
                  <div className="GalleryCaption__Title">{gallery.title}</div>
                  <div className="GalleryCaption__Subtitle | muted">
                    Posted on {gallery.date}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
