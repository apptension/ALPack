import { AppShell } from '@mantine/core';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../tests/utils/rendering';
import { Header } from '../header.component';

describe('App: Header', () => {
  it('renders `Features` button', async () => {
    const toggleOpen = jest.fn();
    render(
      <AppShell>
        <Header opened toggleOpen={toggleOpen} />
      </AppShell>
    );

    await userEvent.click(screen.getByTestId('toggle-button'));
    expect(toggleOpen).toHaveBeenCalled();
  });
});
