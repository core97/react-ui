import { ButtonProps } from "../../../atoms/Button";
import { ModalBaseProps } from "../Modal.types";

export type ModalButtonOpts = Pick<
  ButtonProps,
  "onClick" | "color" | "iconLeft" | "iconRight"
> & {
  label: string;
};

export interface InfoModalProps extends Pick<ModalBaseProps, "children"> {
  title: string;
  primaryButton?: ModalButtonOpts;
  secondaryButton?: ModalButtonOpts;
}
