import { Layout } from "@shiksha/common-lib";
import React from "react";
import PropTypes from "prop-types";

export default function App({ children, _appBar, ...props }) {
  return (
    <Layout
      allowRoles={["facilitator", "volunteer", "beneficiary"]}
      _appBar={{
        onlyIconsShow: ["loginBtn", "backBtn", "userInfo", "langBtn"],
        ..._appBar,
      }}
      {...props}
    >
      {children}
    </Layout>
  );
}

App.propTypes = {
  children: PropTypes.node,
};
