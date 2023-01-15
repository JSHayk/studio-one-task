// Common
import Container from "../../common/Container";
import Section from "../../common/Section";
import Text from "../../common/Text";
import Title from "../../common/Title";
import { useAppSelector } from "../../hooks/useRedux";
import "./index.scss";

const Profile = () => {
  const userData = useAppSelector((state) => state.auth.data);
  const { username } = userData!;
  return (
    <Section className="profile">
      <Container className="profile-container wrapper">
        <Container className="profile-info">
          <Title>Profile Info</Title>
          <Container className="profile-info-card">
            <Container className="profile-info-card-item">
              <Text className="label">username:</Text>
              <Text className="value">{username}</Text>
            </Container>
            <Container className="profile-info-card-item">
              <Text className="label">Keywords count:</Text>
              <Text className="value">5</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Section>
  );
};

export default Profile;
