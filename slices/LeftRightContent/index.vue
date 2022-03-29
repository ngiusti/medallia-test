<template>
  <section
    class="left-right-content"
    v-bind:class="{ blue: slice.primary.color === 'blue' }"
  >
    <div
      class="section"
      v-bind:class="{ flip: slice.primary.flipPositions === true }"
    >
      <div>
        <PrismicRichText :field="slice.primary.title" class="title" />
        <PrismicRichText
          :field="slice.primary.description"
          class="description"
        />
        <div class="button__wrap button-desktop">
          <PrismicLink :field="slice.primary.buttonLink" class="button-link"
            >{{ slice.primary.buttonText }}
          </PrismicLink>
        </div>
      </div>

      <div class="image__wrap">
        <PrismicImage :field="slice.primary.image" />
      </div>
      <div class="button__wrap button-mobile">
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
  name: "LeftRightContent",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.left-right-content {
  padding: 10px 0;

  @media (min-width: 768px) {
    margin: 30px 0;
  }
  .section {
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .flip {
    flex-direction: row-reverse;
  }

  .button-desktop {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }

  .button-mobile {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  &.blue {
    background-color: #4050c6;
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
  .button__wrap {
    margin: 30px auto;
  }

  .image__wrap {
    max-width: 500px;
  }
}
</style>
