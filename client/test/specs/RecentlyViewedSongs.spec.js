import RecentlyViewedSongs from '../../src/components/Songs/RecentlyViewedSongs.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'
import sinon from 'sinon'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('RecentlyViewedSongs.vue', () => {
  let store
  let actions

  beforeEach(() => {
    // actions = {
    //   setToken: sinon.stub(),
    //   setUser: sinon.stub()
    // }
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      }
      // actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('has created a hook for component', () => {
    shallow(RecentlyViewedSongs, {store, localVue})
    expect(typeof RecentlyViewedSongs.mounted).toBe('function')
  })
  it('checks that user is logged in to be able to view this component', () => {
    shallow(RecentlyViewedSongs, {store, localVue})
    expect(store.state.isUserLoggedIn).toEqual(true)
  })
  // it('calls mounted if user is logged in', () => {
  //   const wrapper = shallow(RecentlyViewedSongs, {store, localVue})
  //   expect(wrapper.vm.$options.mounted.called).toEqual(true)
  // })
})
