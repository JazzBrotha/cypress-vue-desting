import SongsBookmarks from '../../src/components/Songs/SongsBookmarks.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongsBookmarks.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      }
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('has created a hook for component', () => {
    shallow(SongsBookmarks, {store, localVue})
    expect(typeof SongsBookmarks.mounted).toBe('function')
  })
  it('checks that user is logged in to be able to view this component', () => {
    shallow(SongsBookmarks, {store, localVue})
    expect(store.state.isUserLoggedIn).toEqual(true)
  })
  it('checks that bookmarks have a length of 1', () => {
    const wrapper = shallow(SongsBookmarks, {store, localVue})
    wrapper.setData({bookmarks: ['test']})
    expect(wrapper.vm.bookmarks).toHaveLength(1)
  })
})
