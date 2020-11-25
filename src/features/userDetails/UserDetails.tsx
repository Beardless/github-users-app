import {Flex, Heading, Icon, Link} from '@chakra-ui/react';
import React from 'react';
import {User} from "../../api/githubApi";
import {MdBusiness, MdFace, MdMailOutline, MdPlace} from "react-icons/md"
import {GoRepo} from "react-icons/go"
import {ExternalLinkIcon} from '@chakra-ui/icons';

const UserDetails = ({followers, login, following, company, email, location, public_repos}: User) => {
    return (
        <Flex direction={"column"}>
            <Heading size={"sm"}>Profile</Heading>
            <Flex align={"center"} mt={2}>
                <Icon as={MdFace}/>
                <Link ml={1} href={`https://github.com/${login}?tab=followers`} isExternal>
                    <Flex align={"center"}>{followers} followers <ExternalLinkIcon mx="2px"/></Flex>
                </Link>
                <Link ml={5} href={`https://github.com/${login}?tab=following`} isExternal>
                    <Flex align={"center"}>{following} following <ExternalLinkIcon mx="2px"/></Flex>
                </Link>

            </Flex>
            {company && <Flex align={"center"} mt={2}>
                <Icon as={MdBusiness}/>
                <Flex ml={1} align={"center"}>{company}</Flex>
            </Flex>}
            {location && <Flex align={"center"} mt={2}>
                <Icon as={MdPlace}/>
                <Flex ml={1} align={"center"}>{location}</Flex>
            </Flex>}
            {email && <Flex align={"center"} mt={2}>
                <Icon as={MdMailOutline}/>
                <Flex ml={1} align={"center"}>{email}</Flex>
            </Flex>}
            {public_repos && <Flex align={"center"} mt={2}>
                <Icon as={GoRepo}/>
                <Link ml={1} href={`https://github.com/${login}?tab=repositories`} isExternal>
                    <Flex align={"center"}>{public_repos} public repos <ExternalLinkIcon mx="2px"/></Flex>
                </Link>

            </Flex>}
        </Flex>
    );
};

export default UserDetails;
