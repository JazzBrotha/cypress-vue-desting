import SongMetadata from '../../src/components/ViewSong/SongMetadata.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongMetadata.vue', () => {
  let actions, store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('contains song in props', () => {
    const wrapper = shallow(SongMetadata, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
