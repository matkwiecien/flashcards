import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import CardForm from './CardForm';

describe('Card form', () => {
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

  it('user see error message after click save button when question is empty ', async () => {
    render(<CardForm onSubmit={vi.fn()} />);

    const responseTextbox = screen.getByRole('textbox', { name: 'Response' });
    await userEvent.type(responseTextbox, 'response');

    const saveButton = screen.getByRole('button', { name: 'Save' });

    await userEvent.click(saveButton);

    expect(await screen.findByText('Please enter question')).toBeInTheDocument();
  });

  it('user see error message after click save button when response is empty ', async () => {
    render(<CardForm onSubmit={vi.fn()} />);

    const questionTextbox = screen.getByRole('textbox', { name: 'Question' });
    await userEvent.type(questionTextbox, 'question');

    const saveButton = screen.getByRole('button', { name: 'Save' });

    await userEvent.click(saveButton);

    expect(await screen.findByText('Please enter response')).toBeInTheDocument();
  });

  it('after user click save button new card should be created and pass as onSubmit argument', async () => {
    const currentDateTime = new Date(2020, 12, 10, 5, 24, 10, 0);
    vi.setSystemTime(currentDateTime);

    const mock = vi.fn();
    render(<CardForm onSubmit={mock} />);

    await userEvent.type(screen.getByRole('textbox', { name: 'Question' }), 'Question');
    await userEvent.type(screen.getByRole('textbox', { name: 'Response' }), 'Response');

    const saveButton = screen.getByRole('button', { name: 'Save' });
    await userEvent.click(saveButton);

    await waitFor(() => {
      expect(mock).toBeCalledWith({
        id: '12345',
        question: 'Question',
        response: 'Response',
        createdAt: currentDateTime.toISOString(),
      });
    });

    expect(screen.queryByText('Please enter response')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter question')).not.toBeInTheDocument();
  });
});
