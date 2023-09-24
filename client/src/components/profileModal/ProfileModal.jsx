import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              className="infoInput"
              type="text"
              name="firstname"
              placeholder="First Name"
            />

            <input
              className="infoInput"
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              className="infoInput"
              type="text"
              name="worksAt"
              placeholder="Work at"
            />
          </div>

          <div>
            <input
              className="infoInput"
              type="text"
              name="livesIn"
              placeholder="Lives in"
            />

            <input
              className="infoInput"
              type="text"
              name="country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="Relationship Status"
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
