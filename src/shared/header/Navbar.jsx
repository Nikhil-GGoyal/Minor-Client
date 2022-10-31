import React, { useState } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import Logo from "../assets/Logo1.png";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Container state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <a href="/"><img src="" alt="logo" /></a>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Faculty"> Faculty</a>
          </li>
          <li>
            <a href="/Student">Student</a>
          </li>
          <li>
            <a href="/Authfac">Assign Faculty</a>
          </li>
          <li>
            <a href="/Admin">Admin Panel</a>
          </li>
        </ul>
      </div>
      <div className="account-info">
        <div className="account">
          <span>
            <BsPerson />
          </span>
          <span id="myacc">
            {/* <a href="/Login">
            <button className="btn btn-outline-success" disabled>My Account</button>
            </a> */}
          </span>
        </div>
        {/* <div className="search">
          <IoSearchOutline />
        </div> */}
      </div>
    </Container >
  );
}

const Container = styled.nav`
  display: flex;
  background-color:rgba(79, 74, 74, 0.827);;
  justify-content: space-between;
  align-items: center;
  font-size:1rem;
  .brand {
    img {
      cursor: pointer;
      width:100%;
      height:4.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      margin-right:5rem;
      margin-top:1rem;
      display: flex;
      gap: 5rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: white;
          cursor: pointer;
          font-weight:500;
          transition: var(--default-transition);
          &:hover {
            border-bottom:2px solid black;
          }
        }
      }
    }
  }
  .account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  #myacc a
  {
    text-decoration:none;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: black;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;
