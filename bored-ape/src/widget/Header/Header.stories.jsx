import React from "react";
import { Header } from "./Header";

const Template = (args) => <Header {...args} />;

export const _Header = Template.bind({});
_Header.args = {
  gwei: 71,
};

export default {
  title: "components/Header",
  component: Header,
};
