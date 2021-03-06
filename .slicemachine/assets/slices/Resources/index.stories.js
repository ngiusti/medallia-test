import MyComponent from '../../../../slices/Resources';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Resources'
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
      mock: {"variation":"default","name":"Default","slice_type":"resources","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"type":"integrate bricks-and-clicks systems","description":[{"type":"paragraph","text":"Pariatur officia ad ipsum qui quis mollit consequat excepteur excepteur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"type":"deploy back-end technologies","description":[{"type":"paragraph","text":"Ut cupidatat tempor dolore sint cillum sit est nostrud aute est excepteur duis aliquip consectetur.","spans":[]}]}],"primary":{"title":[{"type":"heading2","text":"Facilitate collaborative models","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
