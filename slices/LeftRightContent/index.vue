<template>
  <section
    class="section left-right-content"
    v-bind:class="{ blue: slice.primary.color === 'blue' }"
  >
    <PrismicRichText :field="slice.primary.title" class="title" />
    <PrismicRichText :field="slice.primary.description" class="description" />

    <div class="image__wrap">
      <PrismicImage :field="slice.primary.image" />
    </div>
    <div class="button__wrap">
      <PrismicLink :field="slice.primary.buttonLink" class="button-link"
        >{{ slice.primary.buttonText }}
      </PrismicLink>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "LeftRightContent",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.left-right-content {
  padding: 10px 0;
  &.blue {
    background-color: #4050c6;
    * {
      color: #fff;
    }
    .button__wrap {
      background-color: #fff;
      border: 1px solid #4050c6;
      a {
        color: #4050c6;
      }
    }
  }
  .button__wrap {
    margin: 30px auto;
  }
}
</style>
