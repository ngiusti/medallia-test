import MyComponent from '../../../../slices/CustomerSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CustomerSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"customer_slice","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"header":[{"type":"heading2","text":"Matrix granular platforms","spans":[]}],"buttonText":"grow best-of-breed solutions","buttonLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
