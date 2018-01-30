import CreateSong from '../../src/components/CreateSong.vue'
import { shallow } from '@vue/test-utils'

describe('CreateSong.vue', () => {
  it('contains song in props', () => {
    const wrapper = shallow(CreateSong, {
      propsData: {
        song: {}
      }
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
