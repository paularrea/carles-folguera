import * as React from "react"
import clsx from "clsx"
import { styled } from "@mui/system"
import { useSwitch } from "@mui/base/SwitchUnstyled"

const blue = {
  700: "var(--secondaryColor)",
}

const grey = {
  400: "#BFC7CF",
  800: "#2F3A45",
}

const SwitchRoot = styled("span")`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`

const SwitchThumb = styled("span")`
  position: absolute;
  display: block;
  background-color: ${blue[700]};
  width: 15px;
  height: 15px;
  border-radius: 100px;
  top: 10px;
  left: 10px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(29px);
`

const SwitchTrack = styled("span")(
  ({ theme }) => `
  background-color: var(--3Color);
  border-radius: 100px;
  width: 100%;
  height: 100%;
  display: block;
`
)

export function Switch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props)

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  }
  return (
      <SwitchRoot className={clsx(stateClasses)}>
        <SwitchTrack>
          <SwitchThumb className={clsx(stateClasses)} />
        </SwitchTrack>
        <SwitchInput {...getInputProps()} aria-label="Demo switch" />
      </SwitchRoot>
  )
}
