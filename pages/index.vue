<template>
  <div>
    <div>Header</div>
    <slice-zone :components="components" :slices="document.data.slices" />
    <div>Footer</div>
  </div>
</template>

<script>
import { components } from "~/slices";

export default {
  name: "IndexPage",

  data: function () {
    return { components };
  },
  mounted() {
    let images = document.getElementsByClassName("image__wrap");
    let customer = document.getElementsByClassName("customer__wrap");
    let resource = document.getElementsByClassName("resource-card");

    const scrollOffset = 100;

    const elementInView = (el, offset = 0) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      for (let i = 0; i < images.length; i++) {
        if (elementInView(images[i], scrollOffset)) {
          displayScrollElement(images[i]);
        }
      }
      for (let j = 0; j < customer.length; j++) {
        if (elementInView(customer[j], scrollOffset)) {
          displayScrollElement(customer[j]);
        }
      }
      for (let k = 0; k < resource.length; k++) {
        if (elementInView(resource[k], scrollOffset)) {
          displayScrollElement(resource[k]);
        }
      }
    };

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  },

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle("home-page");

    if (document) {
      console.log(document.data.slices[0].primary);
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
