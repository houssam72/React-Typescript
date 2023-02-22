import React from "react";

type InputProps = React.ComponentProps<"input">;

export default function input(props: InputProps) {
  return <input {...props} />;
}
