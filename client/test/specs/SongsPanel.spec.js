import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Songs from '../../src/components/Songs/SongsPanel.vue'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongsPanel.vue', () => {
  let store, state
  state = {
    isUserLoggedIn: true,
    user: 'user@user.com',
    token: 'amionog24Gm4iwogwgRgrrsvs'
  }
  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('sets songs to null at mount', () => {
    const wrapper = shallow(Songs, { store, localVue })
    expect(wrapper.vm.songs).toBe(null)
  })
  it('fetches songs based on search value', () => {
    const wrapper = shallow(Songs, { store, localVue })
    wrapper.setData({
      search: 'float',
      songs: ['Float On', 'Float On!']
    })
    expect(wrapper.vm.songs).toHaveLength(2)
  })
})
