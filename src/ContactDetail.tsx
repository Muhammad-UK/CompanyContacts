import { TContactDetailProps } from "./types.ts";

const ContactDetail = ({
  contactDetail,
  setContactDetail,
  isToggled,
  setToggle,
}: TContactDetailProps) => {
  return (
    <div>
      {contactDetail && isToggled ? (
        <div>
          <h2
            className="lessDetailButton"
            onClick={() => {
              window.location.hash = "";
              setToggle(false);
              setContactDetail(undefined);
            }}
          >
            Hide Details
          </h2>
          <p>{contactDetail.phone}</p>
          <p>{contactDetail.state}</p>
          <p>{contactDetail.catchPhrase}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ContactDetail;
