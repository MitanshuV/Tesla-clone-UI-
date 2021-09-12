import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        imgUrl="/images/model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        imgUrl="/images/model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        imgUrl="/images/model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftButton="custom order"
        rightButton="existing order"
        imgUrl="/images/model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftButton="order now"
        rightButton="learn  more"
        imgUrl="/images/solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftButton="order now"
        rightButton="learn  more"
        imgUrl="/images/solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftButton="shop now"
        imgUrl="/images/accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
