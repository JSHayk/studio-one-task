import { memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { $Logout } from "../../api";
import { logout } from "../../store/slices/auth.slice";
import Router from "../../const/router";
// Common
import Section from "../../common/Section";
import Image from "../../common/Image";
import Container from "../../common/Container";
// Assets
import LogoIcon from "../../assets/news.png";
import EnterIcon from "../../assets/enter.png";
import ProfileIcon from "../../assets/profile.png";
import LogoutIcon from "../../assets/logout.png";
import "./index.scss";

const Header = () => {
  const isLoged = useAppSelector((state) => state.auth.isLoged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submitLogout = useCallback(async () => {
    try {
      const { ms } = await $Logout();
      dispatch(logout());
      toast.success(ms, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(Router.HOME);
    } catch (err: any) {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
      throw new Error(err);
    }
  }, [dispatch, navigate]);

  return (
    <Section className="header">
      <Container className="wrapper">
        <Link to={Router.HOME} className="logo">
          <Image src={LogoIcon} />
        </Link>
        <Container className="row">
          {isLoged ? (
            <>
              <Link to={Router.PROFILE} className="logo">
                <Image src={ProfileIcon} />
              </Link>
              <Container
                click={() => {
                  submitLogout();
                }}
                className="logo"
              >
                <Image src={LogoutIcon} />
              </Container>
            </>
          ) : (
            <Link to={Router.REGISTER} className="logo">
              <Image src={EnterIcon} />
            </Link>
          )}
        </Container>
      </Container>
      <ToastContainer />
    </Section>
  );
};

export default memo(Header);
