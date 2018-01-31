import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SongsSearchPanel from '../../src/components/Songs/SongsSearchPanel.vue'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongsSearchPanel.vue', () => {
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
  it('sets songs to be empty string at mount', () => {
    const wrapper = shallow(SongsSearchPanel)
    wrapper.setProps({
      search: ''
    })
    expect(wrapper.vm.search).toBe('')
  })
  it('fetches songs based on search value', () => {
    const wrapper = shallow(SongsSearchPanel, { store, localVue })
    wrapper.setProps({
      search: 'float',
      songs: ['Float On', 'Float On!']
    })
    expect(wrapper.vm.songs).toHaveLength(2)
  })
})
