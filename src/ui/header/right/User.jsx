// Libraries.
import styled from "styled-components";

// Components.
import Button from "../../Button";
import Avatar from "../../Avatar";

// Styles.
const StyledUserContainer = styled.div`
 position: absolute;
 top: calc(100% + 32px);
 right: 8px;
 backdrop-filter: blur(24px);
 background-color: var(--clr-grey-0);
 box-shadow: var(--shadow-md);
 border-radius: var(--border-radius-lg);
 padding: 1.4rem;
 font-size: 1.4rem;
 width: 252px;
 opacity: 0;
 visibility: hidden;
 pointer-events: none;
 z-index: 8;
 transition: all 0.4s;

 &.show {
  top: calc(100% + 16px);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
 }

 & .user-info {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 1.6rem;
 }

 & .user-info .info .name {
  font-weight: 600;
  margin-bottom: 0.2rem;
 }

 & .user-info .info .email {
  font-size: 1.2rem;
  color: var(--clr-grey-600);
  font-weight: 500;
 }

 & .view-profile,
 & .signout {
  padding: 0.8rem;
  font-weight: 600;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.75px;
  display: flex;
  align-items: center;
 justify-content: center;
  gap: 0.8rem;
  border-radius: var(--border-radius-sm);
  transition: color 0.4s, background-color 0.4s;
 }

 & .view-profile {
  color: var(--clr-brand-600);
  background-color: var(--clr-brand-100);
 }

 & .signout {
  color: var(--clr-red-700);
  background-color: var(--clr-red-100);
 }

 & .view-profile:hover {
  color: var(--clr-grey-0);
  background-color: var(--clr-brand-600);
 }

 & .signout:hover {
  color: var(--clr-grey-0);
  background-color: var(--clr-red-700);
 }

 & .options {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 2.4rem 0;
 }

 & .options .options-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  transition: color 0.4s;
 }

 & .options .options-link:hover {
  color: var(--clr-brand-600);
 }

 & .modes {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.6rem;
 }

 & .modes .txt {
  font-weight: 500;
  letter-spacing: 1px;
 }

 & .modes .btns {
  display: flex;
  align-items: center;
  gap: 1.4rem;
 }

 & .modes .btns .btn {
  width: 29px;
  height: 29px;
  border-radius: var(--border-radius-sm);
  transition: color 0.4s, background-color 0.4s;
 }

 & .modes .btns .btn:hover,
 & .modes .btns .btn.active {
  color: var(--clr-grey-0);
  background-color: var(--clr-brand-600);
 }
`;

export default function User() {
 return (
  <div className="user">
   <Avatar size="small" />

   <StyledUserContainer>
    <div className="user-info">
     <Avatar size="medium" />

     <p className="info">
      <span className="name">Lori Ferguson</span>
      <span className="email">example@gmail.com</span>
     </p>
    </div>

    <a href="#" className="view-profile">
     <i className="fa-solid fa-user"></i>
     <span>View profile</span>
    </a>

    <ul className="options">
     <li>
      <a href="#" className="options-link">
       <i className="fa-solid fa-gear"></i>
       <span>Settings</span>
      </a>
     </li>
     <li>
      <a href="#" className="options-link">
       <i className="fa-solid fa-circle-info"></i>
       <span>Help</span>
      </a>
     </li>
    </ul>

    <a href="#" className="signout">
     <i className="fa-solid fa-power-off"></i>
     <span>Sign Out</span>
    </a>

    <div className="modes">
     <p className="txt">Mode: </p>
     <div className="btns">
      <Button variation="square" className="btn-mode active">
       <i className="fa-solid fa-gear"></i>
      </Button>

      <button className="btn active">
       <i className="fa-solid fa-sun"></i>
      </button>
      <button className="btn">
       <i className="fa-solid fa-moon"></i>
      </button>
     </div>
    </div>
   </StyledUserContainer>
  </div>
 );
}
