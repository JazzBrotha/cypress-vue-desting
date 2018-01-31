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
    wrapper.setData({
      search: ''
    })
    expect(wrapper.vm.search).toBe('')
  })
  it('sets search data based on search input value', () => {
    const wrapper = shallow(SongsSearchPanel, { store, localVue })
    const searchInput = wrapper.find('#songs-search-input')
    searchInput.value = 'float'
    searchInput.trigger('input')
    wrapper.setData({ search: searchInput.value })
    expect(wrapper.vm.search).toEqual('float')
  })
})
