import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardSetForm from './CardSetForm';
import { vi } from 'vitest';

describe('Card set form', () => {
  vi.mock('uuid', () => {
    return { v4: () => '12345' };
  });

  beforeEach(() => {
    vi.useFakeTimers({
      toFake: ['Date'],
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('user see error message after click save button when name is empty ', async () => {
    render(<CardSetForm onSubmit={vi.fn()} />);

    const saveButton = screen.getByRole('button', { name: 'Save' });

    userEvent.click(saveButton);

    expect(await screen.findByText('Please enter name')).toBeInTheDocument();
  });

  it('after user click save button new set should be created and pass as onSubmit argument', async () => {
    const currentDateTime = new Date(2020, 12, 10, 5, 24, 10, 0);
    vi.setSystemTime(currentDateTime);

    const mock = vi.fn();
    render(<CardSetForm onSubmit={mock} />);

    await userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'test set');

    const saveButton = screen.getByRole('button', { name: 'Save' });

    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(mock).toBeCalledWith({
        id: '12345',
        name: 'test set',
        createdAt: currentDateTime.toISOString(),
      });
    });

    expect(screen.queryByText('Please enter name')).not.toBeInTheDocument();
  });
});
