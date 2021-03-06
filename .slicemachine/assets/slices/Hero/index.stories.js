import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
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
      mock: {"variation":"default","name":"Default","slice_type":"hero","items":[{"header":[{"type":"heading2","text":"Revolutionize wireless paradigms","spans":[]}],"description":[{"type":"paragraph","text":"Ea dolor occaecat elit incididunt fugiat ad fugiat. Quis non commodo aute eu esse et eu dolor ullamco. Sunt sit dolore magna commodo sit sint id labore sit est qui esse anim sint.","spans":[]}],"buttonText":"enable viral solutions","buttonLink":{"link_type":"Web","url":"http://twitter.com"},"type":"events"},{"header":[{"type":"heading2","text":"Embrace mission-critical infrastructures","spans":[]}],"description":[{"type":"paragraph","text":"Dolore ex culpa eiusmod incididunt nulla ex et nulla ad. Nulla aute minim fugiat elit dolor ipsum ex exercitation.","spans":[]}],"buttonText":"utilize virtual models","buttonLink":{"link_type":"Web","url":"http://google.com"},"type":"report"},{"header":[{"type":"heading2","text":"Deliver B2B metrics","spans":[]}],"description":[{"type":"paragraph","text":"Ut sunt sint ullamco.","spans":[]}],"buttonText":"visualize killer convergence","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"},"type":"events"}],"primary":{"title":[{"type":"heading1","text":"Leverage distributed synergies","spans":[]}],"description":[{"type":"heading2","text":"Maximize value-added web-readiness","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"buttonTextOne":"benchmark best-of-breed functionalities","buttonTextTwo":"enhance enterprise partnerships","buttonLinkOne":{"link_type":"Web","url":"http://twitter.com"},"buttonLinkTwo":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
