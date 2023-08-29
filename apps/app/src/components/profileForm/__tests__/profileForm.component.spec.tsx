import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '../../../tests/utils/rendering';
import { ProfileForm, ProfileFormProps } from '../profileForm.component';

describe('ProfileForm: Component', () => {
  const defaultProps: ProfileFormProps = {
    initialData: {
      name: 'initial name',
    },
    onSubmit: jest.fn(),
    loading: false,
  };

  const Component = (props: Partial<ProfileFormProps>) => <ProfileForm {...defaultProps} {...props} />;

  it('should display empty string', async () => {
    render(<Component initialData={{ name: '' }} />);
    const value = (await screen.findByPlaceholderText(/name/i)).getAttribute('value');
    expect(value).toBe('');
  });

  it('should call onSubmit prop', async () => {
    const onSubmit = jest.fn();
    render(<Component onSubmit={onSubmit} />);

    const nameField = await screen.findByPlaceholderText(/name/i);
    await userEvent.clear(nameField);
    await userEvent.type(nameField, 'new item name');
    await userEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
