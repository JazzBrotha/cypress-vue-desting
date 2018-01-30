import ViewSongIndex from '../../src/components/ViewSong/Index.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ViewSongIndex.vue', () => {
  let actions, store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      },
      actions
    })
  })
  it('contains song in props', () => {
    const wrapper = shallow(ViewSongIndex, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
