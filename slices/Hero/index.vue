<template>
  <div class="hero__wrap">
    <div class="hp-hero-content__wrap">
      <div class="header-left__wrap">
        <div class="title__wrap fade-in-down">
          <PrismicRichText :field="slice.primary.title" />
          <PrismicRichText
            :field="slice.primary.description"
            class="description"
          />
        </div>
        <div class="image__wrap fade-in-up" id="header-image">
          <PrismicImage :field="slice.primary.image" />
        </div>
      </div>

      <div class="blocks__wrap">
        <div
          v-for="(item, index) in slice.items"
          :key="index"
          class="side-card"
        >
          <div class="side-cards-content__wrap">
            <div class="icon__wrap">
              <svg
                v-if="item.type === 'report'"
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm-3-15h-10v3h10v-3z"
                />
              </svg>
              <svg
                v-if="item.type === 'events'"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
                />
              </svg>
              <svg
                v-if="item.type === 'press'"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.655 15.423c-.835.892-1.542 1.158-2.655.86l2.647 4.585c.257-1.094.815-1.708 2.005-1.985l15.348-3.732-6.335-10.972-11.01 11.244zm11.32 2.707l-.467 2.118c-.094.378-.391.674-.769.771l-2.952.774c-.365.095-.753-.012-1.018-.28l-1.574-1.712 1.605-.395.646.77c.176.177.432.248.674.186l1.598-.425c.252-.064.449-.261.511-.512l.162-.906 1.584-.389zm8.719-11.267l-2.684 1.613-.756-1.262 2.686-1.612.754 1.261zm-4.396-1.161l-1.335-.616 1.342-2.914 1.335.617-1.342 2.913zm5.619 6.157l-3.202-.174.081-1.469 3.204.175-.083 1.468z"
                />
              </svg>
            </div>
            <div>
              <PrismicRichText :field="item.header" />
              <PrismicRichText :field="item.description" />
            </div>
            <div class="button__wrap">
              <PrismicLink :field="item.buttonLink" class="button-link"
                >{{ item.buttonText }}
              </PrismicLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Hero",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
.hero__wrap {
  background: linear-gradient(90deg, #357fbb, #4050c6);
  text-align: center;
  border-bottom: 1px solid lightgray;

  .image__wrap {
    overflow: hidden;
  }

  h1,
  h2 {
    color: #fff;
    font-weight: bold;
    line-height: 125%;
  }

  .title__wrap {
    width: 80%;
    margin: 0 auto;
    padding: 20px 10px;
  }

  h1 {
    font-size: 26px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 18px;
  }

  .blocks__wrap {
    background-color: #fff;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .button__wrap {
        width: 50%;
      }
    }
  }
  .side-cards__wrap {
    h2 {
    }
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: -10px 0px 10px 1px rgba(0, 0, 0, 0.2);
    padding: 0;
    width: 100%;

    @media (min-width: 768px) {
      width: 350px;
    }
  }

  .side-card {
    border-top: 20px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-grow: 1;
    min-height: 200px;
    h2 {
      color: #111;
      font-weight: bold;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
      color: #777;
    }

    .btn {
      font-size: 12px;
      padding: 7px 15px;
      max-width: 140px;
    }
    .side-cards-content__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      padding-left: 15px;
      padding-right: 15px;
      margin: 40px 0 20px;
      * {
        line-height: 125%;
      }
      h2 {
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 10px;
      }
    }
    .icon__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      border: 3px solid black;
      position: absolute;
      top: -25px;
      right: 50%;
      transform: translateX(50%);
      border-radius: 50%;
      background-color: white;
    }
  }
  .side-card:nth-of-type(1) {
    border-top: 25px solid #4aa691;
    .icon__wrap {
      border: 5px solid #4aa691;
    }
    svg {
      fill: #4aa691;
    }
  }
  .side-card:nth-of-type(2) {
    border-top: 25px solid #68b0f9;
    .icon__wrap {
      border: 5px solid #68b0f9;
    }
    svg {
      fill: #68b0f9;
    }
  }
  .side-card:nth-of-type(3) {
    border-top: 25px solid #54b0cc;
    .icon__wrap {
      border: 5px solid #54b0cc;
    }
    svg {
      fill: #54b0cc;
    }
  }
  .side-card:nth-of-type(4) {
    border-top: 25px solid #4050c6;
    .icon__wrap {
      border: 5px solid #4050c6;
    }
    svg {
      fill: #4050c6;
    }
  }
}
</style>
