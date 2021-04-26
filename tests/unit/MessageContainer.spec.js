import MessageContainer from '@/components/MessageContainer';
import { mount } from '@vue/test-utils';

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
         MessageDisplay: {
            template: '<p v-else data-testid="message">Hello from the fake db</p>'
         }
      }
    });

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual('Hello from the fake db');
  })
})