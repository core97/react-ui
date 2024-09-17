import { InputSizeMeasure } from "../../../types/input-size.types";
import { type InfoModalProps } from "./InfoModal";

export enum ModalVariant {
  info = "info",
}

export interface ModalBaseProps
  extends Pick<
    React.DetailedHTMLProps<
      React.DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >,
    "children"
  > {
  isOpen: boolean;
  onClose: () => void;
  size?: keyof typeof InputSizeMeasure;
}

export type ModalProps =
  | ({ variant: `${ModalVariant.info}` } & InfoModalProps & ModalBaseProps)
  | ({ variant?: undefined } & ModalBaseProps);
