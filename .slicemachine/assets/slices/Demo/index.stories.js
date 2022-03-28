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
      mock: {"variation":"default","name":"Default","slice_type":"demo","items":[],"primary":{"title":[{"type":"heading1","text":"Generate vertical e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Laborum exercitation nulla qui do voluptate duis cillum exercitation velit id ea velit. Reprehenderit duis laborum cupidatat cillum Lorem velit aliquip.","spans":[]}],"buttonText":"syndicate web-enabled paradigms","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
