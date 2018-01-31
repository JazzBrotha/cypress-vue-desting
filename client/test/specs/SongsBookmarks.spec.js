import SongsBookmarks from '../../src/components/Songs/SongsBookmarks.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongsBookmarks.vue', () => {
  let store
  let data

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      },
      data: {
        headers: [
          {
            text: 'Title',
            value: 'title'
          },
          {
            text: 'Artist',
            value: 'artist'
          }
        ],
        pagination: {
          sortBy: 'createdAt',
          descending: true
        },
        bookmarks: []
      }
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
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
  it('checks all data values for component', () => {
    shallow(SongsBookmarks, { store, localVue, data })
    expect(SongsBookmarks.data()).toHaveProperty('headers')
    expect(SongsBookmarks.data()).toHaveProperty('pagination')
    expect(SongsBookmarks.data()).toHaveProperty('bookmarks')
  })
})
