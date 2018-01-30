import { shallow } from '@vue/test-utils'
import YouTube from '../../src/components/ViewSong/YouTube.vue'

describe('YouTube.vue', () => {
  it('contains youtubeId in props', () => {
    const wrapper = shallow(YouTube)
    expect(wrapper.props()).toHaveProperty('youtubeId')
  })
})
