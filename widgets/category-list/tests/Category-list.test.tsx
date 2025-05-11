import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CategoryList from "../Category-list";

describe("CategoryList", () => {
  const categories = ["Physics", "Chemistry", "Peace"];
  const goToCategory = jest.fn();

  it("renders all categories", () => {
    const { getByText } = render(<CategoryList categories={categories} goToCategory={goToCategory} />);

    categories.forEach((category) => {
      expect(getByText(category)).toBeTruthy();
    });
  });

  it("calls goToCategory when a category is pressed", () => {
    const { getByText } = render(<CategoryList categories={categories} goToCategory={goToCategory} />);

    const chemistryItem = getByText("Chemistry");
    fireEvent.press(chemistryItem);

    expect(goToCategory).toHaveBeenCalledWith("Chemistry");
  });
});
