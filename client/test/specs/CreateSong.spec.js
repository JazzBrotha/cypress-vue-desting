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
  it('has created a hook for component', () => {
    shallow(CreateSong, { store, localVue })
    expect(typeof CreateSong.methods.create).toBe('function')
  })
  it('should return error when all required fields are not filled in', async () => {
    moxios.uninstall()
    const wrapper = shallow(CreateSong, { store, localVue })
    const createBtn = wrapper.find('#create-btn')
    await wrapper.setData({ song: {} })
    createBtn.trigger('click')
    wrapper.vm.error = 'Please fill in all the required fields.'
    expect(wrapper.vm.error).toEqual('Please fill in all the required fields.')
  })
  it('contains an error prop equal to null', () => {
    moxios.uninstall()
    const wrapper = shallow(CreateSong)
    expect(wrapper.vm.error).toEqual(null)
  })
})
