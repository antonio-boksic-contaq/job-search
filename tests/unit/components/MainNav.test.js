import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

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
});
