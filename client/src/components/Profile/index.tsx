// Common
import Container from "../../common/Container";
import Section from "../../common/Section";
import Text from "../../common/Text";
import Title from "../../common/Title";
import "./index.scss";

const Profile = () => {
  return (
    <Section className="profile">
      <Container className="profile-container wrapper">
        <Container className="profile-info">
          <Title>Profile Info</Title>
          <Container className="profile-info-card">
            <Container className="profile-info-card-item">
              <Text className="label">username:</Text>
              <Text className="value">Hayk</Text>
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
