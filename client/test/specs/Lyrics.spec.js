import { shallow } from '@vue/test-utils'
import Lyrics from '../../src/components/ViewSong/Lyrics.vue'

describe('Lyrics.vue', () => {
  it('contains song in props', () => {
    const wrapper = shallow(Lyrics, {
      propsData: {
        song: {}
      }
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
