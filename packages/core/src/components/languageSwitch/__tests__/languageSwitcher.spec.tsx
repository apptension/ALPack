import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LanguageSwitch } from '../';
import { render } from '../../../tests/utils/rendering';

describe('LanguageSwitch: Component', () => {
  it('should render possible options', async () => {
    render(<LanguageSwitch />);

    const toggler = screen.getByTestId('language-switch');

    await userEvent.click(toggler);

    expect(screen.getByText('pl')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
  });
});
