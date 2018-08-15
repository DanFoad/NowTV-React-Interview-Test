import React from "react";
import renderer from "react-test-renderer/";

import MessagesInput from "./MessagesInput";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MessagesInput />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});