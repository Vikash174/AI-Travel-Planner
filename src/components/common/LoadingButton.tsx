import type { ButtonProps } from "@rneui/themed";
import { Button } from "@rneui/themed";

import ActivityIndicator from "./ActivityIndicator";

export default function LoadingButton({
  loading = false,
  disabled: _disabled = false,
  ...props
}: { loading?: boolean } & ButtonProps) {
  const disabled = _disabled || loading;
  if (loading) {
    return (
      <Button {...props} disabled>
        <ActivityIndicator color={disabled ? undefined : "white"} />
      </Button>
    );
  }
  return <Button {...props} disabled={_disabled} />;
}
