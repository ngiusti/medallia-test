import MyComponent from '../../../../slices/Demo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Demo'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"demo","items":[],"primary":{"title":[{"type":"heading2","text":"Leverage 24/365 ROI","spans":[]}],"description":[{"type":"paragraph","text":"Labore sunt nostrud non adipisicing nostrud officia exercitation.","spans":[]}],"buttonText":"integrate back-end supply-chains","buttonLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
