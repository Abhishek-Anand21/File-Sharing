import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({
  response,
}) => (
  <Html>
      <Head />
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {response?.emailToSend?.split("@")[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {response?.userName} Shared 🗃️ file with you
                </Heading>

                <Text style={paragraph}>
                  <b>File Name: </b>
                  {response?.fileName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: </b>
                  {response?.fileSize} MB
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: </b>
                  {response?.fileType}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.8)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  ⚠️ Access and Download file at your own risk!
                </Text>

                <Text style={paragraph}>
                  You can also share your file with the File-Sharing-App ✨
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click below button to access the shared file
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={response?.shortUrl}>Click here to Download</Button>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0)",
            }}
          >
            © 2024 | File Sharing App, Crafted with ❤️ just for You!
          </Text>
        </Container>
      </Body>
    </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};


const boxInfos = {
  padding: "20px",
};
