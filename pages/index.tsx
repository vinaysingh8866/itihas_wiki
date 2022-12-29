import React, { useEffect, useState } from "react";
import {
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  HStack,
  Text,
  VStack,
  Button,
  TextField,
  Stack,
  Pressable,
  Link,
  Input,
} from "native-base";

// Start editing here, save and see your changes.
export default function App() {
  const [noOfpages, setNoOfpages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [allData, setAllData] = useState([]);
  async function getData() {
    const response = await fetch("/data.json");
    const data = await response.json();
    setData(data);
    setAllData(data);
    console.log(data);
    const noOfPages = Math.ceil(data.length / itemsPerPage);
    setNoOfpages(noOfPages);
  }

  function search(text: string) {
    setSearchValue(text);
    const newData = allData.filter((item: any) => {
      return item.Title.toLowerCase().includes(text.toLocaleLowerCase());
    });
    setData(newData);
    const noOfPages = Math.ceil(newData.length / itemsPerPage);
    setNoOfpages(noOfPages);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <VStack w="100vw" h="100vh" _dark={colors.dark} _light={colors.light}>
      <VStack>
        <HStack w="100vw" h="20" justifyContent="center">
          <ChangingTextLogo />
          <Input
            w={["45vw", "45vw", "40vw", "60vw"]}
            mx="4"
            my="auto"
            placeholder="Search"
            value={searchValue}
            onChangeText={(text) => search(text)}
          />

          <ColorModeSwitch />
        </HStack>
        <VStack w="100vw" p="4" h="90vh" overflowY={"scroll"}>
          <HStack
            m="2"
            space="2"
            h="10"
            w="72vw"
            mx="auto"
            rounded={10}
            _dark={colors.dark}
            _light={colors.light}
            justifyContent="space-between"
          >
            <Text w="30%">Title</Text>
            <Text ml="-10">Author</Text>
            <Text ml="-10">Pages</Text>
            <Text ml="-10">Year</Text>
            <Text></Text>
          </HStack>
          <PageItems
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            data={data}
          />
          <NextPrevPage
            currentPage={currentPage}
            noOfPages={noOfpages}
            setCurrentPage={setCurrentPage}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "dark" ? "Enable light mode" : "Enable dark mode"}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        onPress={toggleColorMode}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}

const ChangingTextLogo = () => {
  const texts = ["Itihas", "इतिहास"];
  const [text, setText] = useState(texts[0]);
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setText(texts[i]);
      i = (i + 1) % texts.length;
    }, 2000);
  }, []);

  return (
    <Text my="auto" mx="5" w="40" fontSize={"4xl"} fontWeight="bold">
      {text}
    </Text>
  );
};

const PageItems = ({ currentPage, itemsPerPage, data }: any) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [currentPage, setWindowWidth, windowWidth]);

  return (
    <HStack justifyContent="center" h="80%" overflow={"scroll"}>
      <VStack>
        {data.length > 0 &&
          Array.from(Array(itemsPerPage).keys()).map((item) => {
            return (
              <HStack key={item}>
                {data[currentPage * itemsPerPage + item] && (
                  <HStack
                    key={item}
                    m="2"
                    space="2"
                    h="20"
                    w="70vw"
                    rounded={10}
                    _dark={colors.dark}
                    _light={colors.light}
                    shadow={4}
                  >
                    <Text
                      mx="10%"
                      my="auto"
                      noOfLines={3}
                      _dark={colors.dark}
                      _light={colors.light}
                      w="40%"
                    >
                      {data[currentPage * itemsPerPage + item].Title}
                    </Text>
                    <Text
                      my="auto"
                      noOfLines={2}
                      _dark={colors.dark}
                      _light={colors.light}
                      w="20%"
                    >
                      {data[currentPage * itemsPerPage + item].Author}
                    </Text>
                    <Text
                      my="auto"
                      noOfLines={2}
                      _dark={colors.dark}
                      _light={colors.light}
                      w="20%"
                      px="3"
                    >
                      {data[currentPage * itemsPerPage + item].Pages}
                    </Text>
                    <Text
                      my="auto"
                      noOfLines={2}
                      _dark={colors.dark}
                      _light={colors.light}
                      w="20%"
                      px="3"
                    >
                      {data[currentPage * itemsPerPage + item].Year}
                    </Text>
                  </HStack>
                )}
                {data[currentPage * itemsPerPage + item] && (
                  <Link
                    href={
                      "http://arweave.net/" +
                      data[currentPage * itemsPerPage + item].Link
                    }
                    m="auto"
                  >
                    <Pressable
                      w="10vw"
                      h="50"
                      rounded={10}
                      _dark={colors.dark}
                      _light={colors.light}
                      shadow={4}
                    >
                      <Text
                        my="auto"
                        mx="auto"
                        _dark={colors.dark}
                        _light={colors.light}
                      >
                        Read
                      </Text>
                    </Pressable>
                  </Link>
                )}
              </HStack>
            );
          })}
      </VStack>
    </HStack>
  );
};

const NextPrevPage = ({ currentPage, noOfPages, setCurrentPage }: any) => {
  //return 10 buttons for 10 pages
  return (
    <HStack mx="auto">
      <Button disabled={currentPage === 0} onPress={() => setCurrentPage(0)}>
        First
      </Button>
      {Array.from(Array(noOfPages).keys()).map((page) => {
        return (
          <Stack key={page}>
            {currentPage - page < 2 && currentPage - page > -2 && (
              <Button
                w="10"
                m="2"
                key={page}
                onPress={() => setCurrentPage(page)}
              >
                {page + 1}
              </Button>
            )}
          </Stack>
        );
      })}
      <Button
        disabled={currentPage === noOfPages - 1}
        onPress={() => setCurrentPage(noOfPages - 1)}
      >
        Last
      </Button>
    </HStack>
  );
};

const colors = {
  dark: {
    bg: "gray.800",
    color: "gray.50",
  },
  light: {
    bg: "gray.50",
    color: "gray.800",
  },
};
