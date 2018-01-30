import { shallow } from '@vue/test-utils'
import Lyrics from '../../src/components/globals/Lyrics.vue'

describe('Lyrics.vue', () => {
  it('contains song in props', () => {
    const wrapper = shallow(Lyrics)
    expect(wrapper.props()).toHaveProperty('song')
  })
})
