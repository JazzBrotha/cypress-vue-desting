import { shallow } from '@vue/test-utils'
import Tab from '../../src/components/ViewSong/Tab.vue'

describe('Tab.vue', () => {
  it('contains song in props', () => {
    const wrapper = shallow(Tab, {
      propsData: {
        song: {}
      }
    })
    expect(wrapper.props()).toHaveProperty('song')
  })
})
