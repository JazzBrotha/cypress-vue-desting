import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Songs from '../../src/components/Songs/Index.vue'
import sinon from 'sinon'
import axios from 'axios'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongsIndex.vue', () => {
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
  it('contains the right amount of songs after axios call', (done) => {
    const wrapper = shallow(Songs, { store, localVue })
    const onFulfilled = sinon.spy()
    wrapper.setProps({ songs: ['Float On', 'abc', 'asdf', 'zzzzzz', 'asdf', 'Float On!'] })
    axios.get('songs').then(onFulfilled)
    moxios.wait(() => {
      expect(wrapper.vm.songs).toHaveLength(6)
      done()
    })
  })
})
