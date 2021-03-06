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
      mock: {"variation":"default","name":"Default","slice_type":"left_right_content","items":[],"primary":{"flipPositions":false,"title":[{"type":"heading2","text":"Integrate best-of-breed architectures","spans":[]}],"description":[{"type":"paragraph","text":"Voluptate nulla pariatur cupidatat quis irure enim eiusmod cillum laborum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"buttonText":"reinvent intuitive niches","buttonLink":{"link_type":"Web","url":"http://google.com"},"color":"blue"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
