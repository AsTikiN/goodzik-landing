import {
  Button as MuiButton,
  styled,
  ButtonOwnProps,
  css,
} from "@mui/material";

interface ButtonProps extends ButtonOwnProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({
  children,
  onClick,
  disabled,
  type = "button",
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      variant={variant as any}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)<{
  variant: "outlined" | "text";
}>`
  padding: 22px 48px;
  border-radius: 0 40px 40px 40px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  transition: all 0.2s ease-in-out;
  background-color: #daebff;
  color: #0075ff;
  text-transform: none;
  height: 70px;

  ${({ variant }) => {
    switch (variant) {
      case "text":
        return `
          background-color: #0075ff;
          color: #ffffff;
          border: none;
          &:hover {
            background-color: #0061d6;
          }
        `;
      case "outlined":
        return `
          background-color: transparent;
          color: #0075ff;
          border: 2px solid #0075ff;
          &:hover {
            background-color: rgba(0, 117, 255, 0.1);
          }
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 239px;
        `;
    }
  }}
`;
