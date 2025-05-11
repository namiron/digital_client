import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import UiButton from "../Button";

const click_me: string = "Click me";
describe("UiButton", () => {
  it("should display text and move on click when clicked", () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <UiButton buttonStyles={{ padding: 10, backgroundColor: "blue" }} textStyles={{ color: "white" }} onPress={onPressMock}>
        {click_me}
      </UiButton>
    );

    const buttonText = getByText(click_me);

    fireEvent.press(buttonText);

    expect(buttonText).toBeTruthy();
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
