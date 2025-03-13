import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoRss } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an software engineer and a content creator from in
        Brazil.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alan Guerra
          </Heading>
          <p>Software Engineer, Content Creator</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/alan.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Description
        </Heading>
        <Paragraph>
          Alan Guerra is a systems programmer, software engineer, and content
          creator from Brazil, specializing in back-end web development and
          mobile development. Passionate about technology, he focuses on
          building efficient solutions, from planning to implementation, always
          aiming to solve real-world problems with code. In addition to being a
          developer, he is also an IT instructor and continuously expands his
          knowledge in DevOps and microservices. When not coding, he enjoys
          exploring new technologies and sharing knowledge. He creates content
          to share his expertise and promote his projects, including his YouTube
          channel{' '}
          <Link
            as={NextLink}
            href="https://www.youtube.com/@alsgy2001"
            passHref
            target="_blank"
          >
            Engenheiro de Software Alan Guerra
          </Link>
          .
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Salvador, Bahia, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Started studying Java and HTML.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Began a degree in Analysis and Systems Development.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Interned at Market Profile Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Junior Software Engineer at Asa Administrador de Sistemas
          Aeroportuários.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started a degree in Computer Science.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Mid-level Backend Software Engineer at SoftSnov.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Mid-level Backend Software Engineer at ISpeak.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Watching anime and classic movies (Terminator, Star Wars, Back to the
          Future, Blade), Reading ebooks and manga, Playing{' '}
          <Link href="https://www.minecraft.net/" target="_blank">
            Minecraft
          </Link>
          ,
          <Link href="https://bloodstrike.com/" target="_blank">
            Blood Strike
          </Link>
          , and
          <Link href="https://www.projectzomboid.com/" target="_blank">
            Project Zomboid
          </Link>
          .
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/alsgy2001" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @alsgy2001
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/alsgy2001" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @alsgy2001
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/esalanguerra" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @esalanguerra
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/alsgy2001" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @alsgy2001
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          TabNews
        </Heading>
        <p>
          Check out my posts and insights on TabNews, where I share content
          about programming, development, and technology.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.tabnews.com.br/esalanguerra"
            scroll={false}
            leftIcon={<IoLogoRss />}
            colorScheme="teal"
          >
            Visit my TabNews profile
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
