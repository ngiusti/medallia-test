<template>
  <section class="section multiple-content-image-block">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <div class="body__wrap">
      <div class="image__wrap">
        <PrismicImage :field="slice.primary.image" />
      </div>
      <div class="content__wrap">
        <ul class="content-blocks__wrap">
          <li v-for="(item, index) in slice.items" :key="index">
            <h4>{{ item.header }}</h4>
            <PrismicRichText :field="item.body" />
          </li>
        </ul>
        <div class="button__wrap">
          <PrismicLink :field="slice.primary.buttonLink" class="button-link"
            >{{ slice.primary.buttonText }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "MultipleContentImageBlock",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.multiple-content-image-block {
  .body__wrap {
    @media (min-width: 768px) {
      display: flex;
      margin: 30px 20px;
    }
  }
  .content__wrap {
    width: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px auto;
    .content-blocks__wrap {
      margin-bottom: 20px;
    }
  }
  h4 {
    font-size: 20px;
    margin-top: 10px;
  }
  p {
    color: #777;
  }
}
</style>
