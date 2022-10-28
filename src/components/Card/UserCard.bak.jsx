import { InfoCard } from "../InfoCard";
import { Avatar } from "../Avatar";
import { Card } from "./Card";
import { Title } from "../Title";
import "./UserCard.css";

export function UserCard({
  gender,
  title,
  firstName,
  lastName,
  email,
  phone,
  location,
  pictureUrl,
  countryCode,
}) {
  return (
    <Card>
      <Avatar picture_url={pictureUrl} />
      <div className="rightSection">
        <Title
          title={title}
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          countryCode={countryCode}
        />
        <InfoCard email={email} phone={phone} location={location} />
      </div>
    </Card>
  );
}
