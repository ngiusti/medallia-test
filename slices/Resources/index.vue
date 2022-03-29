<template>
  <section class="resources">
    <PrismicRichText :field="slice.primary.title" class="title" />
    <div class="card__wrap">
      <div
        v-for="(item, index) in slice.items"
        :key="index"
        class="resource-card"
      >
        <div class="resource-image__wrap">
          <PrismicImage :field="item.image" />
        </div>
        <h3 class="resource-type">{{ item.type }}</h3>
        <PrismicRichText :field="item.description" class="resource-content" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Resources",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.resources {
  margin: 5%;
  .card__wrap {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }
  .resource-card {
    position: relative;
    margin: 30px 10px;
    box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 30%);
    opacity: 0;
    @media (min-width: 768px) {
      width: 33%;
    }
    .resource-type {
      position: absolute;
      top: 0;
      background: #4050c6;
      width: 100%;
      text-align: center;
      color: #fff;
      padding: 5px 0;
    }
    .resource-image__wrap {
      padding-top: 20px;
      display: flex;
      img {
        width: 100%;
      }
    }
    .resource-content {
      border-top: 3px solid #4050c6;
      background-color: #f8f8f8;
      padding: 10px;
    }
  }
}
</style>
