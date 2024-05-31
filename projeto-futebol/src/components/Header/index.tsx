
import {
    HeaderContainer, LogoContainer,
    TitleContainer,
    NotificationIconContainer,
    AccountIconContainer,
} from "./styles";
import bellIcon from "../../assets/icon-submenu-bell.svg";
import userIcon from "../../assets/icon-user-menu.svg";
import HeaderLogo from "../../assets/logo-soccer.png";

// Subcomponentes do Header
const Logo = () => (
    <LogoContainer className="header__container-logo">
        <img
            className="header__submenu-notification-icon-svg"
            src={HeaderLogo}
            alt="Ícone azul representando um sino para notificações"
        />
    </LogoContainer>
);

const Title = () => (
    <TitleContainer className="header__container-title">
        <h1 className="header__container-title-text">Futebol 24 horas</h1>
    </TitleContainer>
);

const NotificationIcon = () => (
    <NotificationIconContainer className="header__submenu-notification-icon">
        <img
            className="header__submenu-notification-icon-svg"
            src={bellIcon}
            alt="Ícone azul representando um sino para notificações"
        />
    </NotificationIconContainer>
);

const AccountIcon = () => (
    <AccountIconContainer className="header__submenu-account-icon">
        <img
            className="header__submenu-account-icon-svg"
            src={userIcon}
            alt="Ícone azul simulando um semblante de uma pessoa"
        />
    </AccountIconContainer>
);

// Componente Header
export function Header() {
    return (
        <HeaderContainer>
            <div className="header__container">
                <Logo />
                <Title />
            </div>
            <div className="header__submenu">
                <div className="header__submenu-notification">
                    <NotificationIcon />
                    <div className="header__submenu-notification-modal">
                        <div className="header__submenu-notification-modal-overlay"></div>
                        <div className="header__submenu-notification-modal-content">
                            <ul className="header__submenu-notification-modal-content-list">
                                <li className="header__submenu-notification-modal-content-list-item">
                                    Caro amante do futebol, pedimos desculpas. Estamos implementando essa funcionalidade.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__submenu-account">
                    <AccountIcon />
                </div>
            </div>
        </HeaderContainer>
    );
}
