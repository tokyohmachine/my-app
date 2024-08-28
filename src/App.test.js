// BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// Testa se o formulário renderiza corretamente
test('renders BookingForm component', () => {
  render(<BookingForm />);

  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

// Testa a atualização dos horários disponíveis
test('updates available times when date is changed', () => {
  render(<BookingForm />);

  const dateInput = screen.getByLabelText(/Date/i);
  fireEvent.change(dateInput, { target: { value: '2024-08-30' } });

  // Suponha que você tenha a lógica para verificar se os horários foram atualizados
  // Substitua o código abaixo com base na lógica real
  expect(screen.getByText('12:00')).toBeInTheDocument();
  expect(screen.getByText('13:00')).toBeInTheDocument();
  expect(screen.getByText('14:00')).toBeInTheDocument();
  expect(screen.getByText('15:00')).toBeInTheDocument();
});

// Testa a seleção de uma mesa
test('selects a table correctly', () => {
  render(<BookingForm />);

  const table1 = screen.getByText('T1');
  fireEvent.click(table1);

  expect(table1).toHaveStyle('background-color: #F4CE14');
});

// Testa o envio do formulário
test('submits the form data', () => {
  render(<BookingForm />);

  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-08-30' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '12:00' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  // Aqui, você pode simular o clique no botão de envio e verificar se os dados foram enviados corretamente
  // Por exemplo:
  fireEvent.click(screen.getByText(/Continue to Pay/i));

  // Verificar se o console.log foi chamado ou verificar a navegação se você estiver usando mocks para isso
});
