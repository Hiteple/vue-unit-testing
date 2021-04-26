import MessageDisplay from '@/components/MessageDisplay';
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios';
import flushPromises from 'flush-promises';

jest.mock('@/services/axios');
beforeEach(() => {
   jest.clearAllMocks()
});

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
      const mockedMessage = 'Hello from the fake db';
      getMessage.mockResolvedValueOnce({ text: mockedMessage });

      const wrapper = mount(MessageDisplay)

      // wait for promise to resolve
      await flushPromises();

      // check that call happened once
      expect(getMessage).toHaveBeenCalledTimes(1);

      // check that component displays message
      const message = wrapper.find('[data-testid="message"]').text();
      expect(message).toEqual(mockedMessage);

  })

  it('Displays an error when getMessage call fails', async () => {
      const mockedError = 'Oops! Something went wrong.';
      getMessage.mockRejectedValueOnce(mockedError);

      const wrapper = mount(MessageDisplay)

      // wait for promise to resolve
      await flushPromises();

      // check that call happened once
      expect(getMessage).toHaveBeenCalledTimes(1);

      // check that component displays message
      const displayedError = wrapper.find('[data-testid="message-error"]').text();
      expect(displayedError).toEqual(mockedError);
  })
})