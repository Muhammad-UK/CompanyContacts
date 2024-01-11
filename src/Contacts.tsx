import { TContactsProps } from "./types";
import ContactDetail from "./ContactDetail";

const Contacts = ({
  companies,
  contactDetail,
  setContactDetail,
  isToggled,
  setToggle,
}: TContactsProps) => {
  return (
    <div className="Companies">
      {companies.map((company) => {
        return (
          <section key={company.id}>
            <h2>{company.name}</h2>
            {contactDetail?.id === company.id && isToggled ? (
              <ContactDetail
                contactDetail={contactDetail}
                setContactDetail={setContactDetail}
                isToggled={isToggled}
                setToggle={setToggle}
              />
            ) : (
              <h2
                className="detailButton"
                onClick={() => {
                  window.location.hash = company.id;
                  setToggle(true);
                  setContactDetail(company);
                }}
              >
                Show More Details
              </h2>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Contacts;
