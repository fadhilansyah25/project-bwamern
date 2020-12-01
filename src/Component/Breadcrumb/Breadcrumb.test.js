import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";
import { BrowserRouter as Router } from "react-router-dom";

const setUp = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList}></Breadcrumb>
    </Router>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);

  return breadcrumb;
};

test("should have <ol> with className .breadcrumb and have text Home & House Details", () => {
  const breadcrumb = setUp();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
