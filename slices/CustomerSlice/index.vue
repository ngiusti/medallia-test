<template>
  <section class="customer-slice">
    <PrismicRichText :field="slice.primary.header" class="title" />
    <div class="customer-slice-customers__wrap">
      <div
        class="customer__wrap"
        v-for="(item, index) in slice.items"
        :key="index"
      >
        <PrismicLink :field="item.link">
          <PrismicImage :field="item.image" />
        </PrismicLink>
      </div>
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
  name: "CustomerSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.customer-slice {
  background-color: #f8f8f8;
  padding: 20px 0;
  .customer-slice-customers__wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0;
    margin: 20px auto;
    max-width: 1120px;
    .customer__wrap {
      width: 40%;
      box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 30%);
      background-color: #fff;
      margin: 3%;
      padding: 4% 1%;
      opacity: 0;
      a {
        display: flex;
        justify-content: center;
        transition: all 0.5s;
      }
      &:hover {
        a {
          transform: translateY(-5px);
        }
      }
      @media (min-width: 768px) {
        width: 20%;
        margin: 2%;
        padding: 2% 0%;
      }
    }
  }
}
</style>
