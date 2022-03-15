import { Input } from "../input/Input";

interface Props {
  size?: string;
}

export const Checkbox = ({ size = "15px", ...rest }: Props) => (
  <Input
    style={{
      cursor: "pointer",
    }}
    type="checkbox"
    height={size}
    width={size}
    {...rest}
  />
);
