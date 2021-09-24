import React from 'react';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import HeyArnoldDetails from './HeyArnoldDetailList';
import { MemoryRouter } from 'react-router-dom';
import detailData from '../data/detailData.json';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/:id',
    (req, res, ctx) => {
      return res(ctx.json(detailData));
    })
);


describe('Hey Arnold Details List Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());



  it('renders a single character on the page', async () => {
    const component = render(
      <MemoryRouter initialEntries={['/5da237699734fdcb7bef8f59']}>
        <HeyArnoldDetails />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    await screen.findByRole('character', { name: 'character' });
    expect(component).toMatchSnapshot();

    // const a = await screen.findByRole('link');
    // expect(a).toBeInTheDocument();

  });
});


