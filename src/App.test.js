import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';
import { TOPIC_QUERY } from './apollo/queries';

const mocks = {
  request: {
    query: TOPIC_QUERY,
    variables: {},
  },
  result: {
    data: {}
  },
}

afterEach(cleanup)
test('renders "Search topics on GitHub"', async () => {
  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve, 0));
  const linkElement = screen.getByText(/Search topics on GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
