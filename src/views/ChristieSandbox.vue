<template>
  <div class="gallery">
    <figure class="gallery__item gallery__item--2">
      <img src="https://data.whicdn.com/images/244155028/original.gif" class="gallery__img" alt="Image 2" />
    </figure>
    <figure class="gallery__item gallery__item--3">
      <img src="https://c.tenor.com/pD6iNwFvicgAAAAC/aesthetic-shapes.gif" class="gallery__img" alt="Image 3" />
    </figure>
    <figure class="gallery__item gallery__item--5">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITVeldhrhEKK_VCmScOHxz_1HiAULoP57XO_nFzhnMjq5SsUbw5akF4UJF5HL2oETk6M&usqp=CAU" class="gallery__img" alt="Image 5" />
    </figure>
    <figure class="gallery__item gallery__item--6">
      <img src="https://news.artnet.com/app/news-upload/2018/05/DcYbgXiXUAUR4oT-1-1024x1024.jpg" class="gallery__img" alt="Image 6" />
    </figure>
  </div>
</template>

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.gallery__item--2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 6;
}

.gallery__item--3 {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 6;
}

.gallery__item--5 {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}

.gallery__item--6 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 9;
}
</style>
