import MyComponent from '../../../../slices/LeftRightContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/LeftRightContent'
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
      mock: {"variation":"default","name":"Default","slice_type":"left_right_content","items":[],"primary":{"leftOrRight":"right","title":[{"type":"heading2","text":"Morph frictionless interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Dolore aliqua fugiat mollit ex qui velit cillum et ut quis irure cillum. Ex occaecat eu sit consequat. Aliquip cillum consectetur anim minim ad et pariatur fugiat laborum consectetur incididunt et velit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"buttonText":"utilize extensible systems","buttonLink":{"link_type":"Web","url":"http://twitter.com"},"color":"blue"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
