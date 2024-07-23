import SignIn from "@/app/auth/sign-in";
import { NavigationProp } from "@react-navigation/native";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

describe("Sign-in component", () => {
  const mockNavigation = {
    setOptions: jest.fn(),
  } as unknown as NavigationProp<any>;

  jest.mock("expo-router", () => ({
    useNavigation: jest.fn().mockReturnValue({
      setOptions: jest.fn(),
    }),
    useRouter: jest.fn().mockReturnValue({
      back: jest.fn(),
      replace: jest.fn(),
    }),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets navigation options on mount", () => {
    render(<SignIn navigation={mockNavigation} />);

    expect(mockNavigation.setOptions).toHaveBeenCalledWith({
      headerShown: false,
    });
  });

  // Rendering Tests
  it("should render correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <SignIn navigation={mockNavigation} />
    );

    expect(getByText("Welcome Back")).toBeTruthy();
    expect(getByText("Let's Sign You In")).toBeTruthy();
    expect(getByPlaceholderText("Enter your email")).toBeTruthy();
    expect(getByPlaceholderText("Enter your password")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("New to this app?")).toBeTruthy();
    expect(getByText("Create Account")).toBeTruthy();
  });

  // Input handling tests
  /*  it("should handle input changes correctly", () => {
    const { getByPlaceholderText } = render(<SignIn />);

    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123@");

    expect(emailInput.props.value).toBe("test@example.com");
    expect(passwordInput.props.value).toBe("password123@");
  });

  // Error messages display tests
  it("should display error messages correctly", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const signInButton = getByText("Sign In");

    fireEvent.changeText(emailInput, "invalid-email");
    fireEvent.changeText(passwordInput, "short");
    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(getByText("Invalid email address")).toBeTruthy();
      expect(getByText("Password must be at least 8 characters")).toBeTruthy();
    });
  });

  // Form submission tests
  it("should submit form correctly", async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailInput = getByPlaceholderText("Enter your email");
    const passwordInput = getByPlaceholderText("Enter your password");
    const signInButton = getByText("Sign In");

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123@");

    const consoleSpy = jest.spyOn(console, "log");
    fireEvent.press(signInButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("form values", {
        email: "test@example.com",
        password: "password123@",
      });
    });

    consoleSpy.mockRestore();
  });
 */
  // Navigation tests
  /*   it("navigates to sign-up page when Create Account is pressed", () => {
    const { getByText } = render(<SignIn />);
    const createAccountButton = getByText("Create Account");

    fireEvent.press(createAccountButton);

   
  }); */
  /*   it("should navigate to sign up correctly", () => {
    const { getByText, getByPlaceholderText } = render(<SignIn />);
    
    const emailInput = getByPlaceholderText("Enter your email");    
    const passwordInput = getByPlaceholderText("Enter your password");
    const signInButton = getByText("Sign In");
    const createAccountButton = getByText("New to this app?");  

    fireEvent.changeText(emailInput, "test@example.com");
    fireEvent.changeText(passwordInput, "password123@");
    fireEvent.press(signInButton);
    fireEvent.press(createAccountButton);
    expect(getByText("Sign Up")).toBeTruthy();
  }); */
});
