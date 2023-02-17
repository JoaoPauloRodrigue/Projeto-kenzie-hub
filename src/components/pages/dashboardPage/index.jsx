import { StyledContainerMainDash } from "./dashboarPage";
import { Header } from "../../Header";

export const DashboardPage = ({ userLogin, userLogOut }) => {
  return (
    <>
      <Header userLogin={userLogin} userLogOut={userLogOut} />
      <StyledContainerMainDash>
        <div>
          <h2>Que pena! Ainda estamos em desenvolvimento:(</h2>
          <h6>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h6>
        </div>
      </StyledContainerMainDash>
    </>
  );
};
