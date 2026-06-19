import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  background-color: #ffffff;
  color: #333;
}

main {
  flex: 1;
}

a{
  text-decoration: none;
}


header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fffde9;
  padding: 10px 40px;
  box-shadow: 0px 4px 4px #00000040;
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}


.navbar-left {
  display: flex;
  align-items: center;
}


.navbar-right {
  display: flex;
  align-items: center;
}

.nav-links a {
  margin: 0 15px;
  color: #fffde9;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
}



.logo {
  width: 50px;
  height: 50px;
}

.brand-name {
  font-size: 28px;
  font-weight: 800;
}

.nav-links a {
  margin: 0 15px;
  color: #fffde9;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
}

.login-box {
  background-color: transparent;
  border: 2px solid #d0ebec;
  border-radius: 50px;
  padding: 10px 20px;
  color: #fffde9;
  text-align: center;
  font-size: 14px;
  box-shadow: 0px 4px 4px #00000040;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.hero-text h2 {
  font-size: 32px;
  margin-bottom: 15px;
}


.login-button {
 
  display: block;
  text-align: center;
  padding: 10px;
  border: 2px solid #284e5c;
  border-radius: 20px;
  font-weight: bold;
  color: #284e5c;
  background-color: #f1f1f1;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}
.login-button:hover{
  background-color: #71b3b6bb;
}


.menu-toggle {
  display: none;
  font-size: 24px;
  margin-left: 16px;
  cursor: pointer;
  color: #000;
}


main {
  position: relative;
  width: 100%;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}


footer {
  background-color: #264653;
  color: #fffde9;
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
}

.logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.site-name {
  margin-left: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
}


.navbar-right {
  display: flex;
  align-items: center;
}

.nav-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.login-button {
 
  display: block;
  text-align: center;
  padding: 10px;
  border: 2px solid #284e5c;
  border-radius: 10px;
  font-weight: bold;
  color: #284e5c;
  background-color: #f1f1f1;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}
.login-button:hover{
  background-color: #71b3b638;
}


.menu-toggle {
  display: none;
  font-size: 24px;
  margin-left: 16px;
  cursor: pointer;
  color: #000;
}



@media (max-width: 768px) {
  .nav-links,
  .login-button {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    background-color: white;
    padding: 16px 24px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .mobile-menu a {
    margin: 10px 0;
    text-decoration: none;
    color: #000;
  }

  .mobile-menu .login-button {
  display: block;
  text-align: center;
  padding: 10px;
  border: 2px solid #284e5c;
  border-radius: 20px;
  font-weight: bold;
  color: #284e5c;
  background-color: #f1f1f1;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}
  }

  .mobile-menu.active {
    display: flex;
  }



@media (min-width: 769px) {
  .mobile-menu,
  .menu-toggle {
    display: none !important;
  }

  .nav-links,
  .login-button {
    display: flex;
    align-items: center;
  }
}

`;

export default GlobalStyle;
