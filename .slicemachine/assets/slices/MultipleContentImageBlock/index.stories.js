import MyComponent from '../../../../slices/MultipleContentImageBlock';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MultipleContentImageBlock'
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
      mock: {"variation":"default","name":"Default","slice_type":"multiple_content_image_block","items":[{"header":"revolutionize best-of-breed paradigms","body":[{"type":"paragraph","text":"Commodo commodo sunt excepteur culpa nisi.","spans":[]}]},{"header":"visualize e-business relationships","body":[{"type":"paragraph","text":"Aliqua labore qui ad occaecat non nostrud aliquip enim pariatur. Laborum magna commodo quis tempor exercitation reprehenderit dolore aute ad exercitation non ut.","spans":[]}]},{"header":"envisioneer end-to-end networks","body":[{"type":"paragraph","text":"Adipisicing nulla amet sit officia culpa aute labore esse ad tempor est.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Cultivate cutting-edge e-services","spans":[]}],"buttonText":"generate cutting-edge supply-chains","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
