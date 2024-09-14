// react
import { FC } from "react";
//ui
import { Logo } from "@/shared/ui/Logo";
import { Link } from "@/shared/ui/Link";
// styles
import styles from "./Footer.module.scss";
import { getCartRoute } from "@/shared/libs/constants/routes";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Logo colorVariant="white" />
          <div className={styles.logoText}>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
          <div className={styles.socialMediaButtons}></div>
        </div>
        <div className={styles.quickLinks}>
          <div className={styles.title}>Services</div>
          <Link path={getCartRoute()} name={"Bonus program"} />
          <Link path={getCartRoute()} name={"Gift cards"} />
          <Link path={getCartRoute()} name={"Credit and payment"} />
          <Link path={getCartRoute()} name={"Service contracts"} />
          <Link path={getCartRoute()} name={"Non-cash account"} />
          <Link path={getCartRoute()} name={"Payment"} />
        </div>
        <div className={styles.quickLinks}>
          <div className={styles.title}>Assistance to the buyer</div>
          <Link path={getCartRoute()} name={"Find an order"} />
          <Link path={getCartRoute()} name={"Terms of delivery"} />
          <Link path={getCartRoute()} name={"Exchange and return of goods"} />
          <Link path={getCartRoute()} name={"Guarantee"} />
          <Link path={getCartRoute()} name={"Frequently asked questions"} />
          <Link path={getCartRoute()} name={"Terms of use of the site"} />
        </div>
      </div>
    </div>
  );
};
