import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import BusinessModalBodyContent from "./business/ModalBodyContent";
import CareerModalBodyContent from "./career/ModalBodyContent";

const Nav = () => {
  // const [mobileMenu, setMobileMenu] = useState(false);
  const [business, setBusiness] = useState(false);
  const [career, setCareer] = useState(false);

  return (
    <>
      <Box>
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={"10%"}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            {/* <IconButton
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              icon={
                mobileMenu ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            /> */}
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Image
              py={"15px"}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              src="logo.svg"
            />
          </Flex>

          <Menu>
            <Button
              rounded={"full"}
              display="flex"
              size={"lg"}
              bg="rgba(255, 208, 151, 0)"
              fontWeight={"normal"}
              _hover={{
                borderWidth: 0,
                borderColor: "#F19E38",
                bg: "rgba(255, 208, 151, 0.2)",
              }}
              onClick={() => {
                setBusiness(!business);
              }}
            >
              Dla biznesu
            </Button>
            <Button
              rounded={"full"}
              display="flex"
              size={"lg"}
              bg="rgba(255, 208, 151, 0)"
              fontWeight={"normal"}
              _hover={{
                borderWidth: 0,
                borderColor: "#F19E38",
                bg: "rgba(255, 208, 151, 0.2)",
              }}
              onClick={() => {
                setCareer(!career);
              }}
            >
              Kariera
            </Button>

            <Button
              px="30px"
              color="#fff"
              fontSize={"sm"}
              fontWeight={500}
              bg="#F19E38"
              mx="10px"
              borderRadius={"40px"}
              _hover={{
                bg: "#D07A0F",
                color: "#fff",
              }}
            >
              Kontakt
              <Image
                marginLeft="10px"
                float="right"
                src="icons/footer/mail.svg"
              />
            </Button>

            <MenuButton
              textAlign="center"
              display={{ base: "none", md: "inline-flex" }}
              borderWidth={"1px"}
              borderColor="#F19E38"
              padding="4px"
              borderRadius={"48px"}
              bg="rgba(255,255,255,0)"
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              p={"10px"}
              // _hover={{
              //   bg: "pink.300",
              // }}>
            >
              <Image src="icons/language.svg" />
            </MenuButton>
            <MenuList
              bg="#FFFAF5"
              borderWidth="1px"
              borderColor="#F19E38"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
            >
              <MenuItem
                bg="rgba(255,255,255,0)"
                borderWidth="0px"
                _hover={{
                  bg: "rgba(255,255,255,0)",
                  borderWidth: "0px",
                  border: "none",
                  borderColor: "rgba(255,255,255,0)",
                  boxShadow: "none",
                }}
                _focus={{ boxShadow: "none" }}
              >
                <strong>{"PL   "}</strong> -polski
              </MenuItem>
              {/* <MenuItem
                bg="rgba(255,255,255,0)"
                borderWidth="0px"
                _hover={{
                  bg: "rgba(255,255,255,0)",
                  borderWidth: "0px",
                  borderColor: "rgba(255,255,255,0)",
                  boxShadow: "none",
                }}
                _focus={{ boxShadow: "none" }}
              >
                <strong>EN</strong> {"   -angielski"}
              </MenuItem> */}
            </MenuList>
          </Menu>
        </Flex>

        <Collapse in={business} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <Modal
        id="biznes"
        isOpen={business}
        onClose={() => {
          setBusiness(!business);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" paddingTop="50px">
            Zadbaj o rozwój swojego biznesu z zaufanym partnerem
            technologicznym.
          </ModalHeader>
          <ModalCloseButton margin="50px" />
          <ModalBody>
            <BusinessModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        id="kariera"
        isOpen={career}
        onClose={() => {
          setCareer(!career);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" paddingTop="50px">
            Kształtuj swoją karierę z Nexio.
          </ModalHeader>
          <ModalCloseButton margin="50px" />
          <ModalBody>
            <CareerModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4} alignItems={"center"}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Dla biznesu",
    href: "#",
  },
  {
    label: "Kariera",
    href: "#",
  },
];

export default Nav;
