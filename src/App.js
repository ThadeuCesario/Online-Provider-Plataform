import React, { useState, useEffect } from "react";
import UserDetails from "./components/UserDetails";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TextBlock from "./components/TextBlock";
import HomeCopy from "./copies/Home";
import { handleDeviceWidth } from "./utils/device";
import "./style.css";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const userDevice = handleDeviceWidth();
    setIsDesktop(userDevice >= 1024);
  }, []);

  const WidthInfoContainer = isDesktop ? { width: "33.3%" } : { width: "65%" };

  return (
    <main>
      <Header />
      <Banner
        image={
          "https://silversd.com/wp-content/uploads/2016/09/banner-background-business-brainstorming-meeting.jpg"
        }
        alt={"Banner Home"}
        title={"Banner Home"}
      />
      <TextBlock title={HomeCopy.Title} subtitle={HomeCopy.Description} />
      <strong className="secundary-title">{HomeCopy.secondTitle}</strong>
      <section className="section-benefits">
        <TextBlock
          title={HomeCopy.moneyTitle}
          subtitle={HomeCopy.moneyDescription}
          image={
            "https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png"
          }
          altImg="Money"
          titleImg="Money"
          styles={WidthInfoContainer}
        />
        <TextBlock
          title={HomeCopy.partnerTitle}
          subtitle={HomeCopy.partnerDescription}
          image={
            "https://i.pinimg.com/originals/72/c0/f4/72c0f4c3b8c5ce89ce781df48bdd1242.png"
          }
          altImg="Money"
          titleImg="Money"
          styles={WidthInfoContainer}
        />
        <TextBlock
          title={HomeCopy.secureTitle}
          subtitle={HomeCopy.secureDescription}
          image={"https://image.flaticon.com/icons/png/512/217/217875.png"}
          altImg="Money"
          titleImg="Money"
          styles={WidthInfoContainer}
        />
      </section>
      <strong className="third-title">{HomeCopy.thirdTitle}</strong>
      <section className="user-details">
        <UserDetails />
      </section>
    </main>
  );
}
