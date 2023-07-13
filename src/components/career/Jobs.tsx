import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  HStack,
  Spacer,
  Text,
  Image,
  Select,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { Job } from "../../models/Jobs";
import { SearchIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState<Job[]>();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const fetchData = async () => {
    const response = await axios.get("/api/jobs");
    setJobs(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleQuery = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
    const response = await axios.get(
      `/api/jobs?filters[Title][$containsi]=${event.target.value}&filters[Location][$containsi]=${location}`
    );
    setJobs(response.data.data);
  };

  const handleLocation = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocation(event.target.value);
    const response = await axios.get(
      `/api/jobs?filters[Title][$containsi]=${query}&filters[Location][$eq]=${event.target.value}`
    );
    setJobs(response.data.data);
  };

  return (
    <>
      <HStack fontFamily={"Red Hat Display"}>
        <Box w={"100%"}>
          <Text fontSize={"14px"} fontWeight={400} mb={2}>
            {t("job-position")}
          </Text>
          <InputGroup
            border={"1px"}
            borderRadius={"8px"}
            borderColor={"#D3D3D3"}
          >
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={t("search") || "search"}
              onChange={handleQuery}
              value={query}
            />
          </InputGroup>
        </Box>
        <Box w={"100%"}>
          <Text fontSize={"14px"} fontWeight={400} mb={2}>
            {t("job-location")}
          </Text>
          <Select
            border={"1px"}
            borderRadius={"8px"}
            borderColor={"#D3D3D3"}
            value={location}
            onChange={handleLocation}
          >
            <option value="">choose</option>
            <option value="Zdalna">Zdalna</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Łódź">Łódź</option>
          </Select>
        </Box>
      </HStack>
      {jobs?.map((job) => (
        <Box
          key={job.id}
          border={"1px"}
          borderRadius={"8px"}
          borderColor={"#D3D3D3"}
          p={7}
          m={2}
          fontFamily={"Red Hat Display"}
        >
          <HStack>
            <Avatar
              src="/jobs/JobTile.svg"
              mr={3}
              onClick={() => window.open(job.attributes.Link, "_blank")}
              cursor={"pointer"}
            />
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight={600}
                cursor={"pointer"}
                onClick={() => window.open(job.attributes.Link, "_blank")}
              >
                {job.attributes.Title}
              </Text>
              <HStack
                fontSize={"12px"}
                fontWeight={400}
                color={"#898989"}
                gap={4}
              >
                <Text display={"flex"}>
                  <Image src="/jobs/JobLocation.svg" mr={2} />
                  {job.attributes.Location}
                </Text>
                <Text display={"flex"}>
                  <Image src="/jobs/JobDepartament.svg" mr={2} />
                  {job.attributes.Department}
                </Text>
              </HStack>
            </Box>
            <Spacer />
            <Image
              src="/jobs/JobArrow.svg"
              onClick={() => window.open(job.attributes.Link, "_blank")}
              cursor={"pointer"}
            />
          </HStack>
        </Box>
      ))}
    </>
  );
};

export default Jobs;
