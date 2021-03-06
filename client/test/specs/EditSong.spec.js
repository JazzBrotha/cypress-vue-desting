import EditSong from '../../src/components/EditSong.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EditSong.vue', () => {
  let actions, store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true,
        route: {
          name: 'song',
          params: {
            songId: '6'
          },
          path: '/songs/6'
        }
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('has save function in methods', () => {
    shallow(EditSong, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    expect(typeof EditSong.methods.save).toBe('function')
  })
  it('should return error when all required fields are not filled in', async () => {
    moxios.uninstall()
    const wrapper = shallow(EditSong, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    const createBtn = wrapper.find('#edit-song-btn')
    createBtn.trigger('click')
    wrapper.vm.error = 'an error has occured trying to update the song'
    expect(wrapper.vm.error).toEqual('an error has occured trying to update the song')
  })
  it('contains an error prop equal to null', () => {
    moxios.uninstall()
    const wrapper = shallow(EditSong, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    expect(wrapper.vm.error).toEqual(null)
  })
  it('contains required function for input fields', () => {
    const wrapper = shallow(EditSong, { store, localVue })
    expect(wrapper.vm.required).toBeTruthy()
  })
  it('returns "Required." for falsy values', () => {
    const wrapper = shallow(EditSong, { store, localVue })
    const value = wrapper.vm.required(null)
    expect(value).toEqual('Required.')
  })
  it('returns true for truthy values', () => {
    const wrapper = shallow(EditSong, { store, localVue })
    const value = wrapper.vm.required('Hello')
    expect(value).toEqual(true)
  })
})
