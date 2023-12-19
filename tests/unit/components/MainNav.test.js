import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Bobo Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('displays menu item for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItems.map((item) => {
      return item.textContent;
    });
    //console.log(navigationMenuTexts);
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Bobo Corp',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });

  describe('when user logs in', () => {
    it('displays user profile picture', async () => {
      render(MainNav);

      let profileImage = screen.queryByRole('img', {
        //qua name si riferisce all attributo alt
        name: /user profile image/i
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        //qua name si riferisce al testo
        name: /sign in/i
      });
      await userEvent.click(loginButton);

      profileImage = screen.queryByRole('img', {
        //qua name si riferisce all attributo alt
        name: /user profile image/i
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
