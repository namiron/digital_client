import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useForm, FormProvider } from "react-hook-form";
import Field from "../Field";

describe("Field component", () => {
  const setup = () => {
    const TestComponent = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Field control={methods.control} name="testField" placeholder="Test input" rules={{ required: "This field is required" }} />
        </FormProvider>
      );
    };

    return render(<TestComponent />);
  };

  it("should render the input field with the correct placeholder", () => {
    const { getByPlaceholderText } = setup();
    const input = getByPlaceholderText("Test input");
    expect(input).toBeTruthy();
  });

  it("should call onChange when typing in the input", () => {
    const { getByPlaceholderText } = setup();
    const input = getByPlaceholderText("Test input");

    fireEvent.changeText(input, "new value");

    expect(input.props.value).toBe("new value");
  });
});
