import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { TOPIC_QUERY } from '../../apollo/queries';
import Topic from '.';


const mocks = {
  request: {
    query: TOPIC_QUERY,
    variables: {},
  },
  result: {
    data: {}
  },
}
const mockData = {
  request: {
    query: TOPIC_QUERY,
    variables: { name: "react" },
  },
  result: {
    data: {
      topic: {
        name: "react", stargazerCount: 41400,
        id: "MDU6VG9waWNyZWFjdA==",
        relatedTopics: [
        { name: "angular", id: "MDU6VG9waWNhbmd1bGFy", stargazerCount: 25875, },
        { name: "react-native", id: "MDU6VG9waWNyZWFjdC1uYXRpdmU=", stargazerCount: 14315, },
        { name: "vue", id: "MDU6VG9waWN2dWU=", stargazerCount: 32540, },
        { name: "minify", id: "MDU6VG9waWNtaW5pZnk=", stargazerCount: 6 }
        ]
      }
    }
  }
}

afterEach(cleanup)
test('Topic', async () => {
  const { debug, getByTestId } = render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <Topic />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve, 0));
  expect(getByTestId('main-topic')).toBeTruthy();
});

test('Topic| with data', async () => {
  const { debug, getByTestId } = render(
    <MockedProvider mocks={[mockData]} addTypename={false}>
      <Topic name="react" />
    </MockedProvider>
  );
  await new Promise(resolve => setTimeout(resolve, 50));
  expect(getByTestId('related-topic-list').childElementCount).toBe(mockData.result.data.topic.relatedTopics.length);
});


