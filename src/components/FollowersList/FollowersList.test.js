import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "./FollowersList";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

test("should render a followersList item", async () => {
  render(<MockFollowersList />);
  const followersItem = await screen.findByTestId("follower-item-0");
  screen.debug();
  expect(followersItem).toBeInTheDocument();
});

// test("should render a multiple followersList items", async () => {
//   render(<MockFollowersList />);
//   const followersItems = await screen.findAllByTestId(/follower-item/i);

//   expect(followersItems.length).toBe(5);
// });
