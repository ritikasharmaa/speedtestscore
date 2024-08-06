"use client";

import { Box, Flex, Button, useColorMode, Text, Switch, IconButton, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { IoIosStats, IoMdMail, IoMdMenu } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import NavigationItem from "./ui/NavigationItem";
import { BiSolidVideos } from "react-icons/bi";
import { FaDollarSign, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import NavigationSubMenu from "./ui/NavigationSubMenu";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { logout } from "@/app/store/slice/authSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(true);
  const { user } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLargerThanMobile] = useMediaQuery('(min-width: 768px)');

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleCloseAllMenus();
      }
    };

    if (showMoreDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoreDetails]);

  const handleCloseAllMenus = () => {
    setShowMoreDetails(false);
    setShowSubMenu(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleCloseAllMenus();
    router.push('/');
  };

  return (
    <Box
      as="header"
      bg="gray.800"
      p={{
        base: 4,
        md: 7,
      }}
      shadow="md"
      width={'100%'}
    >
      <Flex maxW="1268px" mx="auto" align="center" justify="space-between">
        <Flex alignItems={'center'} gap={{ base: 10, md: 20 }}>
          <Link href="/">
            <Box width={'100%'} height={50}>
              <Image
                src="/images/speedscore_logo.png"
                alt="Logo"
                width={100}
                height={100}
                unoptimized
              />
            </Box>
          </Link>
          <Flex alignItems={'center'} gap={3}>
            <Text
              fontSize="16px"
              color={'white'}
            >
              Today&apos;s Earning:
            </Text>
            <Text
              fontSize="20px"
              color={'white'}
              fontWeight={'500'}
            >
              0.00
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems={'center'} gap={10}>
          {
            isLargerThanMobile && <Flex alignItems={'center'} gap={4}>
              <Text
                fontSize="16px"
                color={'white'}
              >
                Light Mode
              </Text>
              <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
                colorScheme="teal"
              />
              <Text
                fontSize="16px"
                color={'white'}
              >
                Dark Mode
              </Text>
            </Flex>
          }
          {isLargerThanMobile && <Box>
            {isClient && (user ?
              <Text
                fontSize="16px"
                color={'white'}
              >
                {user?.email}
              </Text>
              :
              <Link href={'/?modal=login'}>
                <Text
                  fontSize="16px"
                  color={'white'}
                >
                  Login
                </Text>

              </Link>
            )}
          </Box>}
          <Box position={'relative'} ref={menuRef}>
            <Button
              bgGradient="linear(to-r, #34BDE3, #0379CC)"
              color="white"
              p={4}
              borderRadius="md"
              _hover={{
                bgGradient: "linear(to-r, #0379CC, #34BDE3)",
              }}
              onClick={() => setShowMoreDetails(!showMoreDetails)}
            >
              <IoMdMenu />
            </Button>
            {showMoreDetails && (
              <Box background={'#242C3C'} w={'350px'} p={4} borderRadius={5} position={'absolute'} top={0} right={0} zIndex={1000}>
                <Box display={'flex'} alignItems={'end'} justifyContent={'end'}>
                  <Box display={'inline-block'} cursor={'pointer'} onClick={() => setShowMoreDetails(false)}>
                    <RxCross2 size={'20px'} color='white' />
                  </Box>
                </Box>
                <Box onClick={() => setShowSubMenu(!showSubMenu)}>
                  <NavigationItem text="General support videos" icon={<BiSolidVideos />} showMore={true} />
                </Box>
                <Box
                  height={showSubMenu ? 0 : 230}
                  overflow={'hidden'}
                  transition={'all 0.3s ease'}
                  onClick={handleCloseAllMenus}
                >
                  <NavigationSubMenu text="Wifi" link="general-support-videos?tab=wifi" />
                  <NavigationSubMenu text="Routers" link="general-support-videos?tab=router" />
                  <NavigationSubMenu text="Modems" link="general-support-videos?tab=modems" />
                  <NavigationSubMenu text="Printers" link="general-support-videos?tab=printers" />
                  <NavigationSubMenu text="Laptop/Pcs" link="general-support-videos?tab=laptop-pc" />
                  <NavigationSubMenu text="Network Switching" link="general-support-videos?tab=network-switching" />
                  <NavigationSubMenu text="Adapters/Do dads" link="general-support-videos?tab=adapters" />
                </Box>
                <NavigationItem text="Your ISPs support videos" icon={<BiSolidVideos />} link="service-provider" onClick={handleCloseAllMenus} />
                <NavigationItem text="Get paid for tests" icon={<FaDollarSign />} link="get-paid-for-tests" onClick={handleCloseAllMenus} />
                {
                  user && <>
                    <NavigationItem text="My Account" icon={<FaRegUserCircle />} link="my-account" onClick={handleCloseAllMenus} />
                    <NavigationItem text="My Tests" icon={<IoIosStats />} />
                  </>
                }
                <NavigationItem text="Create isp page" icon={<IoIosStats />} />
                <NavigationItem text="Live Test Map" icon={<MdOutlineQueryStats />} />
                <NavigationItem text="Contact Form" icon={<IoMdMail />} />
                {
                  user && (
                    <Box>
                      <Button
                        bgGradient="linear(to-r, #34BDE3, #0379CC)"
                        mt={4}
                        color="white"
                        _hover={{
                          bgGradient: "linear(to-r, #0379CC, #34BDE3)"
                        }}
                        size={'sm'}
                        sx={{
                          transition: "all 3s ease-in-out"
                        }}
                        onClick={handleLogout}
                      >
                        Log out
                      </Button>
                    </Box>
                  )
                }
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
