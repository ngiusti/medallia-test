<template>
  <section class="demo">
    <div class="section">
      <PrismicRichText :field="slice.primary.title" class="title" />
      <PrismicRichText :field="slice.primary.description" class="description" />

      <div class="button__wrap">
        <PrismicLink :field="slice.primary.buttonLink" class="button-link"
          >{{ slice.primary.buttonText }}
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Demo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.demo {
  background-color: #4050c6;
  padding: 10px;
  * {
    color: #fff;
  }
  .button__wrap {
    background-color: #fff;
    border: 2px solid #4050c6;
    a {
      color: #4050c6;
    }
    &:hover {
      background-color: #4050c6;
      border: 2px solid #fff;
      .button-link {
        color: #fff;
      }
    }
  }
}
</style>
