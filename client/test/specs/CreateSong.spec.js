import CreateSong from '../../src/components/CreateSong.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'
import sinon from 'sinon'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CreateSong.vue', () => {
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
  it('should return error when all required fields are not filled in', async () => {
    moxios.uninstall()
    const wrapper = shallow(CreateSong, { store, localVue })
    const createBtn = wrapper.find('#create-btn')
    await wrapper.setData({ song: {} })
    createBtn.trigger('click')
    wrapper.vm.error = 'an error has occured trying to create the song'
    expect(wrapper.vm.error).toEqual('an error has occured trying to create the song')
  })
  it('contains an error prop equal to null', () => {
    const wrapper = shallow(CreateSong)
    expect(wrapper.vm.error).toEqual(null)
  })
  it('contains required function for input fields', () => {
    const wrapper = shallow(CreateSong)
    expect(wrapper.vm.required).toBeTruthy()
  })
  it('returns "Required." for falsy values', () => {
    const wrapper = shallow(CreateSong)
    const value = wrapper.vm.required(null)
    expect(value).toEqual('Required.')
  })
  it('returns true for truthy values', () => {
    const wrapper = shallow(CreateSong)
    const value = wrapper.vm.required('Hello')
    expect(value).toEqual(true)
  })
})
