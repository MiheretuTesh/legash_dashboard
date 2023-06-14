import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import FullButton from "../Buttons/FullButton";

import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import Logo from "../../assets/svg/legash_logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const legash_logo =styled(Image);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  return (
    <>
      <div className="mb-5">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
        <Wrapper
          className="flexCenter animate whiteBg shadow"
          style={y > 100 ? { height: "120px" } : { height: "80px" }}
        >
          <NavInner className="container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="home">
              <img className="mb-4" src={Logo} width={200} />
            </Link>
            <BurderWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Donation
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Patient
                </Link>
              </li>

              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Contact
                </Link>
              </li>
            </UlWrapper>

            <UlWrapperRight className="flexNullCenter">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Amharic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li></li>
                </ul>
              </li>
              <div style={{ marginLeft: "30px", width: "90px" }}>
                <Link to="/signin">
                  {/* <FullButton title="Login" /> */}
                  <button className="btn bir-button">Login</button>
                </Link>
              </div>
            </UlWrapperRight>
          </NavInner>
        </Wrapper>
      </div>
    </>
  );
}
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
  margin-top: 30px;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  margin-left: 15px;
  @media (max-width: 760px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 8px 15px;
`;
const SearchIcon = styled.div`
  color: #068e95;
  margin-right: 8px;
`;
