import styled from "styled-components";

export const HeaderContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 55px;

	.header {
		&__container {
			display: flex;
			align-items: center;
		}

		&__submenu {
			display: flex;
			align-items: center;
			max-width: 90px;
			width: 100%;
			justify-content: space-between;
			&-notification-modal {
				display: none;
			}
		}
	}
`;

export const LogoContainer = styled.div`
	/* Adicione estilos conforme necessário */
`;

// Estilo para o componente Title
export const TitleContainer = styled.div`
	/* Adicione estilos conforme necessário */
`;

// Estilo para o componente NotificationIcon
export const NotificationIconContainer = styled.div`
	height: 30px;
	width: 30px;
`;

// Estilo para o componente AccountIcon
export const AccountIconContainer = styled.div`
	height: 30px;
	width: 30px;
`;
