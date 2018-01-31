import RecentlyViewedSongs from '../../src/components/Songs/RecentlyViewedSongs.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('RecentlyViewedSongs.vue', () => {
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
        histories: []
      }
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('checks all data values for component', () => {
    shallow(RecentlyViewedSongs, { store, localVue, data })
    expect(RecentlyViewedSongs.data()).toHaveProperty('headers')
    expect(RecentlyViewedSongs.data()).toHaveProperty('pagination')
    expect(RecentlyViewedSongs.data()).toHaveProperty('histories')
  })
  it('checks that user is logged in to be able to view this component', () => {
    shallow(RecentlyViewedSongs, {store, localVue})
    expect(store.state.isUserLoggedIn).toEqual(true)
  })
  it('checks that histories have a length of 1', () => {
    const wrapper = shallow(RecentlyViewedSongs, {store, localVue})
    wrapper.setData({histories: ['abc']})
    expect(wrapper.vm.histories).toHaveLength(1)
  })
})
