import * as Device from "expo-device";
import * as responsive from "@/utility-functions/responsive";
import { render, screen } from "@testing-library/react-native";
import Login from "../Login";

// Mock device functions
jest.mock("@/utility-functions/responsive", () => ({
  isTablet: jest.fn(),
}));

describe("Login component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly on phone", () => {
    jest.spyOn(responsive, "isTablet").mockReturnValue(false);
    const { toJSON } = render(<Login />);

    // check if component renders
    expect(toJSON()).toMatchSnapshot();

    // check if elements are rendered
    expect(screen.getByText("AI Travel Planner")).toBeTruthy();
    expect(
      screen.getByText(/Discover your next adventure effortlessly/i)
    ).toBeTruthy();
    expect(screen.getByText("Sign in with Google")).toBeTruthy();
  });

  test("renders correctly on tablet", () => {
    // Mock isTablet to return true (tablet)

    const { toJSON } = render(<Login />);

    // Check if the component matches the snapshot
    expect(toJSON()).toMatchSnapshot();

    // Check if elements are rendered
    expect(screen.getByText("AI Travel Planner")).toBeTruthy();
    expect(
      screen.getByText(/Discover your next adventure effortlessly/i)
    ).toBeTruthy();
    expect(screen.getByText("Sign in with Google")).toBeTruthy();
  });
});
