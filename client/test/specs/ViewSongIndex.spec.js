import ViewSongIndex from '../../src/components/ViewSong/Index.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'
import axios from 'axios'
import sinon from 'sinon'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ViewSongIndex.vue', () => {
  let actions, store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true,
        route: {
          name: 'song',
          params: {
            songId: '6'
          },
          path: '/songs/6'
        }
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
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
