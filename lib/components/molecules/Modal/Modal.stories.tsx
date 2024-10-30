import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "./Modal.component";
import { ModalProps, ModalVariant } from "./Modal.types";
import { InputSizeMeasure } from "../../../types/input-size.types";

export default {
  title: "molecules/Modal",
  component: Modal,
  argTypes: {
    children: {
      control: "object",
    },
    isOpen: {
      control: "boolean",
    },
    onClose: {},
    size: {
      control: "select",
      options: Object.values(InputSizeMeasure),
    },
    variant: {
      control: "select",
      options: Object.values(ModalVariant),
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <p>Hello world</p>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {};

export const InfoVariant = Template.bind({});
InfoVariant.args = {
  variant: ModalVariant.info,
  title: "Header",
  primaryButton: {
    label: "Accept",
  },
  secondaryButton: {
    label: "Cancel",
  },
};
