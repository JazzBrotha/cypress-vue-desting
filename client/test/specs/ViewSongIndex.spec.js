import ViewSongIndex from '../../src/components/ViewSong/Index.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ViewSongIndex.vue', () => {
  let actions, store, data
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
      data: {
        songs: {}
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('contains song in props', () => {
    shallow(ViewSongIndex, {
      data,
      store,
      localVue
    })
    expect(ViewSongIndex.data()).toHaveProperty('song')
  })
})
