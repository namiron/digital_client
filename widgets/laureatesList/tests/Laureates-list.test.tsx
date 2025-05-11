import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ILaureateData } from "../../../screens/laureates/types/laureates.type";
import LaureatesList from "../Laureates-list";

describe("LaureatesList", () => {
  const laureates: ILaureateData[] = [
    {
      id: "1",
      firstname: "Albert",
      surname: "Einstein",
      year: "1921",
      motivation: "For his services to theoretical physics",
    },
    {
      id: "2",
      firstname: "Marie",
      surname: "Curie",
      year: "1903",
      motivation: "In recognition of her services in the advancement of chemistry",
    },
  ];

  const gatToLaureate = jest.fn();

  it("renders all laureates", () => {
    const { getByText } = render(<LaureatesList currentLaureates={laureates} gatToLaureate={gatToLaureate} />);

    expect(getByText("Albert Einstein (1921)")).toBeTruthy();
    expect(getByText("Marie Curie (1903)")).toBeTruthy();
    expect(getByText("For his services to theoretical physics")).toBeTruthy();
    expect(getByText("In recognition of her services in the advancement of chemistry")).toBeTruthy();
  });

  it("calls gatToLaureate when a laureate is pressed", () => {
    const { getByText } = render(<LaureatesList currentLaureates={laureates} gatToLaureate={gatToLaureate} />);

    const button = getByText("Albert Einstein (1921)");
    fireEvent.press(button);

    expect(gatToLaureate).toHaveBeenCalledWith(laureates[0]);
  });

  it("renders nothing when list is empty", () => {
    const { queryByText } = render(<LaureatesList currentLaureates={[]} gatToLaureate={gatToLaureate} />);

    expect(queryByText(/Einstein|Curie/)).toBeNull();
  });
});
