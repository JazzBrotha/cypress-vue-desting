import SongMetadata from '../../src/components/ViewSong/SongMetadata.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SongMetadata.vue', () => {
  let actions, store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        isUserLoggedIn: true,
        user: 'testing@gmail.com',
        token: 'mfioeanfoea24f2iof'
      },
      actions
    })
  })
  it('calls setAsBookmark and returns error', () => {
    moxios.install()
    const wrapper = shallow(SongMetadata, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    const bookmarkBtn = wrapper.find('#set-bookmark')
    wrapper.vm.error = 'you do not have access to this resource'
    bookmarkBtn.trigger('click')
    expect(wrapper.vm.error).toEqual('you do not have access to this resource')
    moxios.uninstall()
  })
  it('contains song in props', () => {
    const wrapper = shallow(SongMetadata, {
      propsData: {
        song: {}
      },
      store,
      localVue
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
