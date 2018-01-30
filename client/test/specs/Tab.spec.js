import { shallow } from '@vue/test-utils'
import Tab from '../../src/components/globals/Tab.vue'

describe('Tab.vue', () => {
  it('contains song in props', () => {
    const wrapper = shallow(Tab)
    expect(wrapper.props()).toHaveProperty('song')
  })
})
