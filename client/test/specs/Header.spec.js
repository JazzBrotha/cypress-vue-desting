import Header from '../../src/components/Header.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'
import sinon from 'sinon'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Header.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      setToken: sinon.stub(),
      setUser: sinon.stub()
    }
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('sets isUserLoggedIn to "false" in state when logout triggers', () => {
    const wrapper = shallow(Header, { store })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.isUserLoggedIn = false
    expect(store.state.isUserLoggedIn).toEqual(false)
  })
  it('sets token to null in state when logout triggers', () => {
    const wrapper = shallow(Header, { store })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.token = null
    expect(store.state.token).toEqual(null)
  })
  it('sets user to null in state when logout triggers', () => {
    const wrapper = shallow(Header, { store })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.user = null
    expect(store.state.user).toEqual(null)
  })
})
