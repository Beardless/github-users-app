import axios from "axios";
import parseLink, {Links} from "parse-link-header";

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface UsersResult {
    pageLinks: Links | null;
    sinceUser: number;
    currentSinceUser: number;
    users: User[]
}

export async function getUsers(
    since = 0
): Promise<UsersResult> {
    const url = `https://api.github.com/users?since=${since}&per_page=25`

    try {
        const usersResponse = await axios.get<User[]>(url)
        const pageLinks = parseLink(usersResponse.headers.link)
        const sinceUser = parseInt(pageLinks?.next.since || '0', 10);

        return {
            pageLinks,
            sinceUser,
            currentSinceUser: since,
            users: usersResponse.data
        }
    } catch (err) {
        throw err
    }
}

export async function getUser(
    userLogin: string
): Promise<User> {
    const url = `https://api.github.com/users/${userLogin}`

    try {
        const { data: user } = await axios.get<User>(url)

        return user;
    } catch (err) {
        throw err
    }
}


