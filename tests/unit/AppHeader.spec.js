import AppHeader from '@/components/AppHeader';
import { mount } from  '@vue/test-utils';

describe('AppHeader', () => {
   test('If user is not logged in, do not show the logout button', () => {
      const wrapper = mount(AppHeader);
      expect(wrapper.find('button').isVisible()).toBe(false);
   })

   test('If user is logged in, show the logout button', async () => {
      const wrapper = mount(AppHeader);
      await wrapper.setData({ isLoggedIn: true });
      expect(wrapper.find('button').isVisible()).toBe(true);
   })
});