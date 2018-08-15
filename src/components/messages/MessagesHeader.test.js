import React from "react";
import renderer from "react-test-renderer/";

import MessagesHeader from "./MessagesHeader";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MessagesHeader
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
        chatTitle="Test"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders multiple avatars", () => {
  const tree = renderer
    .create(
      <MessagesHeader
        users={[
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          },
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          },
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          },
          {
            id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
            firstName: "Albert",
            lastName: "Rose",
            email: "arosec@bbb.org",
            avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
            ip: "20.79.231.223"
          }
        ]}
        chatTitle="Test"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("hides further avatars if > 5", () => {
    const tree = renderer
      .create(
        <MessagesHeader
          users={[
            {
              id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
              firstName: "Albert",
              lastName: "Rose",
              email: "arosec@bbb.org",
              avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
              ip: "20.79.231.223"
            },
            {
              id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
              firstName: "Albert",
              lastName: "Rose",
              email: "arosec@bbb.org",
              avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
              ip: "20.79.231.223"
            },
            {
              id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
              firstName: "Albert",
              lastName: "Rose",
              email: "arosec@bbb.org",
              avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
              ip: "20.79.231.223"
            },
            {
              id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
              firstName: "Albert",
              lastName: "Rose",
              email: "arosec@bbb.org",
              avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
              ip: "20.79.231.223"
            },
            {
                id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
                firstName: "Albert",
                lastName: "Rose",
                email: "arosec@bbb.org",
                avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
                ip: "20.79.231.223"
              },
              {
                id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
                firstName: "Albert",
                lastName: "Rose",
                email: "arosec@bbb.org",
                avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
                ip: "20.79.231.223"
              },
              {
                id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
                firstName: "Albert",
                lastName: "Rose",
                email: "arosec@bbb.org",
                avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
                ip: "20.79.231.223"
              },
              {
                id: "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
                firstName: "Albert",
                lastName: "Rose",
                email: "arosec@bbb.org",
                avatar: "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
                ip: "20.79.231.223"
              },
          ]}
          chatTitle="Test"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  