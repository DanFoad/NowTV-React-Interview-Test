import React from "react";
import renderer from "react-test-renderer/";

import Messages from "./Messages";

function createNodeMock(element) {
  return {};
}

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Messages
        messages={[
          {
            id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
            userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            message:
              "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            timestamp: "2017-02-09T04:27:38Z"
          }
        ]}
        users={[
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          }
        ]}
        currentUser=""
      />,
      { createNodeMock }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("doesn't display message if no user matches", () => {
  const tree = renderer
    .create(
      <Messages
        messages={[
          {
            id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
            userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            message:
              "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            timestamp: "2017-02-09T04:27:38Z"
          }
        ]}
        users={[]}
        currentUser=""
      />,
      { createNodeMock }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders unknownuser avatar for users without avatar", () => {
  const tree = renderer
    .create(
      <Messages
        messages={[
          {
            id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
            userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            message:
              "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            timestamp: "2017-02-09T04:27:38Z"
          }
        ]}
        users={[
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: null,
            ip: "20.79.231.223"
          }
        ]}
        currentUser=""
      />,
      { createNodeMock }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const tree = renderer
    .create(
      <Messages
        messages={[
          {
            id: "cd445e6d-e514-424f-ba8f-16ec842002c6",
            userId: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            message:
              "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            timestamp: "2017-02-09T04:27:38Z"
          }
        ]}
        users={[
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          }
        ]}
        currentUser="fe27b760-a915-475c-80bb-7cdf14cc6ef3"
      />,
      { createNodeMock }
    ).root
  expect(tree.findByProps({className: "message current-user"}).props.className).toMatch(/current-user/)