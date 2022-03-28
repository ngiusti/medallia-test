import MyComponent from '../../../../slices/NewTestSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NewTestSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"new_test_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Whiteboard end-to-end vortals","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco non consectetur excepteur in dolore pariatur exercitation aliqua nostrud qui. Mollit non cupidatat deserunt ullamco ut fugiat aliquip enim occaecat fugiat velit nostrud ex deserunt esse. Nostrud occaecat tempor eiusmod ex mollit mollit laboris incididunt.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
